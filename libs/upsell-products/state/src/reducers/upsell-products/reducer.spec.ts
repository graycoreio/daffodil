import { TestBed } from '@angular/core/testing';

import { DaffProductPageLoadSuccess } from '@daffodil/product/state';
import {
  DaffProductFactory,
  DaffProductTestingModule,
} from '@daffodil/product/testing';
import { DaffUpsellProduct } from '@daffodil/upsell-products';
import { DaffUpsellProductsReducerState } from '@daffodil/upsell-products/state';
import { DaffUpsellProductFactory } from '@daffodil/upsell-products/testing';

import {
  initialState,
  daffUpsellProductsReducer,
} from './reducer';

describe('@daffodil/upsell-products/state | daffUpsellProductsReducer', () => {
  let productFactory: DaffProductFactory;
  let upsellProductFactory: DaffUpsellProductFactory;
  let product: DaffUpsellProduct;
  let productId: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
    });

    productFactory = TestBed.inject(DaffProductFactory);
    upsellProductFactory = TestBed.inject(DaffUpsellProductFactory);

    product = upsellProductFactory.create({
      upsell: productFactory.createMany(3),
    });
    productId = product.id;
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = <any>{};

      const result = daffUpsellProductsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when ProductPageLoadSuccessAction is triggered', () => {
    let result: DaffUpsellProductsReducerState;

    beforeEach(() => {

      const productLoadSuccess = new DaffProductPageLoadSuccess({
        id: productId,
        products: [product],
      });
      result = daffUpsellProductsReducer(initialState, productLoadSuccess);
    });

    it('stores the upsell product IDs in state', () => {
      product.upsell.forEach(p => {
        expect(result.upsellProductIds).toContain(p.id);
      });
    });
  });
});
