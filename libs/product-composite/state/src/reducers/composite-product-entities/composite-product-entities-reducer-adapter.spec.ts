import { TestBed } from '@angular/core/testing';
import { EntityState } from '@ngrx/entity';

import { DaffProduct } from '@daffodil/product';
import { DaffCompositeProduct } from '@daffodil/product-composite';
import {
  DaffCompositeProductApplyOption,
  DaffCompositeProductEntity,
} from '@daffodil/product-composite/state';
import { DaffCompositeProductFactory } from '@daffodil/product-composite/testing';
import {
  DaffProductLoadSuccess,
  DaffProductGridLoadSuccess,
  DaffBestSellersLoadSuccess,
  DaffProductPageLoadSuccess,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { daffCompositeProductAppliedOptionsEntitiesAdapter } from './composite-product-entities-reducer-adapter';
import { DaffCompositeProductAppliedOptionsEntitiesAdapter } from './composite-product-entities-reducer-adapter';

describe('@daffodil/product-composite/state | DaffCompositeProductAppliedOptionsEntitiesAdapter', () => {
  let adapter: DaffCompositeProductAppliedOptionsEntitiesAdapter;
  let productFactory: DaffProductFactory;
  let compositeProductFactory: DaffCompositeProductFactory;

  let initialState: EntityState<DaffCompositeProductEntity>;
  let product: DaffProduct;
  let compositeProduct: DaffCompositeProduct;

  beforeEach(() => {
    adapter = new DaffCompositeProductAppliedOptionsEntitiesAdapter();
    productFactory = TestBed.inject(DaffProductFactory);
    compositeProductFactory = TestBed.inject(DaffCompositeProductFactory);

    compositeProduct = compositeProductFactory.create();
    product = productFactory.create();
    initialState = daffCompositeProductAppliedOptionsEntitiesAdapter().getInitialState();
  });

  describe('upsertProducts', () => {
    let result: EntityState<DaffCompositeProductEntity>;

    beforeEach(() => {
      result = adapter.upsertProducts(initialState, <DaffCompositeProduct>product, compositeProduct);
    });

    it('sets a composite product entity', () => {
      expect(result.entities[compositeProduct.id]).toEqual({
        id: compositeProduct.id,
        items: {
          [compositeProduct.items[0].id]: {
            value: compositeProduct.items[0].options[0].id,
            qty: compositeProduct.items[0].options[0].quantity,
          },
          [compositeProduct.items[1].id]: {
            value: compositeProduct.items[1].options[0].id,
            qty: compositeProduct.items[1].options[0].quantity,
          },
        },
      });
    });

    it('does not set a product entity when the given product is not composite', () => {
      expect(result.entities[product.id]).toBeUndefined();
    });

    describe('setting the default item option', () => {
      it('should set the item to the default option when it is provided and in stock', () => {
        compositeProduct.items[0].options[0].is_default = false;
        compositeProduct.items[0].options[1].is_default = true;
        compositeProduct.items[0].options[1].in_stock = true;
        result = adapter.upsertProducts(initialState, compositeProduct);

        expect(result.entities[compositeProduct.id].items[compositeProduct.items[0].id]).toEqual({
          value: compositeProduct.items[0].options[1].id,
          qty: compositeProduct.items[0].options[1].quantity,
        });
      });

      it('should set the default option to null when the default option is out of stock', () => {
        compositeProduct.items[0].options[0].is_default = false;
        compositeProduct.items[0].options[1].is_default = true;
        compositeProduct.items[0].options[1].in_stock = false;
        result = adapter.upsertProducts(initialState, compositeProduct);

        expect(result.entities[compositeProduct.id].items[compositeProduct.items[0].id].value).toEqual(null);
      });

      it('should set the default option qty to the default qty when the default option is out of stock', () => {
        compositeProduct.items[0].options[0].is_default = false;
        compositeProduct.items[0].options[1].is_default = true;
        compositeProduct.items[0].options[1].in_stock = false;
        result = adapter.upsertProducts(initialState, compositeProduct);

        expect(result.entities[compositeProduct.id].items[compositeProduct.items[0].id].qty).toEqual(compositeProduct.items[0].options[1].quantity);
      });

      it(`should set the default option to null when the default item option is not defined`, () => {
        compositeProduct.items[0].options[0].is_default = false;
        compositeProduct.items[0].options[1].is_default = false;
        compositeProduct.items[0].required = true;
        result = adapter.upsertProducts(initialState, compositeProduct);

        expect(result.entities[compositeProduct.id].items[compositeProduct.items[0].id]).toEqual({ value: null, qty: null });
      });
    });
  });

  describe('applyOption', () => {
    let result: EntityState<DaffCompositeProductEntity>;

    beforeEach(() => {
      const specInitialState = {
        ids: [compositeProduct.id],
        entities: {
          [compositeProduct.id]: {
            id: compositeProduct.id,
            items: compositeProduct.items.reduce((acc, item) => ({
              ...acc,
              [item.id]: {
                value: item.options.find(option => option.is_default).id,
                qty: item.options.find(option => option.is_default).quantity,
              },
            }), {}),
          },
        },
      };

      result = adapter.applyOption(
        specInitialState,
        compositeProduct.id,
				<string>compositeProduct.items[0].id,
				compositeProduct.items[0].options[1].id,
				compositeProduct.items[0].options[1].quantity,
      );
    });

    it('changes the option id of the given product item', () => {
      expect(result.entities[compositeProduct.id].items[compositeProduct.items[0].id]).toEqual({
        value: compositeProduct.items[0].options[1].id,
        qty: compositeProduct.items[0].options[1].quantity,
      });
    });
  });
});
