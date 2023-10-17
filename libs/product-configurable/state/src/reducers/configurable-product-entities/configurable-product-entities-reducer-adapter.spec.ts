
import { EntityState } from '@ngrx/entity';

import { DaffProduct } from '@daffodil/product';
import {
  DaffProductLoadSuccess,
  DaffProductGridLoadSuccess,
  DaffBestSellersLoadSuccess,
  DaffProductPageLoadSuccess,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffConfigurableProduct } from '@daffodil/product-configurable';
import {
  DaffConfigurableProductApplyAttribute,
  DaffConfigurableProductRemoveAttribute,
  DaffConfigurableProductToggleAttribute,
  daffConfigurableProductAppliedAttributesEntitiesAdapter,
  DaffConfigurableProductEntity,
} from '@daffodil/product-configurable/state';
import { DaffConfigurableProductFactory } from '@daffodil/product-configurable/testing';

import { DaffConfigurableProductAppliedAttributesEntitiesAdapter } from './configurable-product-entities-reducer-adapter';

describe('@daffodil/product-configurable/state | DaffConfigurableProductAppliedAttributesEntitiesAdapter', () => {
  let adapter: DaffConfigurableProductAppliedAttributesEntitiesAdapter;
  let productFactory: DaffProductFactory;
  let configurableProductFactory: DaffConfigurableProductFactory;
  const initialState = daffConfigurableProductAppliedAttributesEntitiesAdapter().getInitialState();
  let configurableProduct: DaffConfigurableProduct;

  beforeEach(() => {
    adapter = new DaffConfigurableProductAppliedAttributesEntitiesAdapter();
    productFactory = new DaffProductFactory();
    configurableProductFactory = new DaffConfigurableProductFactory();

    configurableProduct = configurableProductFactory.create();
  });

  describe('upsertProducts', () => {
    let products: DaffProduct[];
    let simpleProducts: DaffProduct[];
    let configurableProducts: DaffConfigurableProduct[];
    let result: EntityState<DaffConfigurableProductEntity>;

    beforeEach(() => {
      simpleProducts = productFactory.createMany(2);
      configurableProducts = configurableProductFactory.createMany(2);

      products = [
        ...simpleProducts,
        ...configurableProducts,
      ];

      result = adapter.upsertProducts(initialState, ...<DaffConfigurableProduct[]>products);
    });

    it('sets a configurable product entity for each configurable product', () => {
      expect(result.ids.length).toEqual(configurableProducts.length);
      configurableProducts.forEach(({ id }) => {
        expect(result.ids).toContain(id);
      });
    });

    it('does not upsert products that are not configurable', () => {
      simpleProducts.forEach(({ id }) => {
        expect(result.ids).not.toContain(id);
      });
    });
  });

  describe('applyAttribute', () => {
    let result: EntityState<DaffConfigurableProductEntity>;

    beforeEach(() => {
      const specInitialState = {
        ids: [configurableProduct.id],
        entities: {
          [configurableProduct.id]: {
            id: configurableProduct.id,
            attributes: [],
          },
        },
      };

      result = adapter.applyAttribute(
        specInitialState,
        configurableProduct.id,
        configurableProduct.configurableAttributes[0].code,
        configurableProduct.configurableAttributes[0].values[0].value,
      );
    });

    it('adds a configurable product attribute to its corresponding entity', () => {
      expect(result.entities[configurableProduct.id]).toEqual({
        id: configurableProduct.id,
        attributes: [{
          code: configurableProduct.configurableAttributes[0].code,
          value: configurableProduct.configurableAttributes[0].values[0].value,
        }],
      });
    });
  });

  describe('removeAttribute', () => {
    let result: EntityState<DaffConfigurableProductEntity>;

    beforeEach(() => {
      const specInitialState = {
        ids: [configurableProduct.id],
        entities: {
          [configurableProduct.id]: {
            id: configurableProduct.id,
            attributes: [{
              code: configurableProduct.configurableAttributes[0].code,
              value: configurableProduct.configurableAttributes[0].values[0].value,
            }],
          },
        },
      };

      result = adapter.removeAttribute(
        specInitialState,
        configurableProduct.id,
        configurableProduct.configurableAttributes[0].code,
      );
    });

    it('removes a configurable product attribute from its corresponding entity', () => {
      expect(result.entities[configurableProduct.id]).toEqual({
        id: configurableProduct.id,
        attributes: [],
      });
    });
  });

  describe('toggleAttribute', () => {
    let result: EntityState<DaffConfigurableProductEntity>;

    describe('when the attribute type of the same value is already selected', () => {
      beforeEach(() => {
        const specInitialState = {
          ids: [configurableProduct.id],
          entities: {
            [configurableProduct.id]: {
              id: configurableProduct.id,
              attributes: [{
                code: configurableProduct.configurableAttributes[0].code,
                value: configurableProduct.configurableAttributes[0].values[0].value,
              }],
            },
          },
        };

        result = adapter.toggleAttribute(
          specInitialState,
          configurableProduct.id,
          configurableProduct.configurableAttributes[0].code,
          configurableProduct.configurableAttributes[0].values[0].value,
        );
      });

      it('removes a configurable product attribute from its corresponding entity', () => {
        expect(result.entities[configurableProduct.id]).toEqual({
          id: configurableProduct.id,
          attributes: [],
        });
      });
    });

    describe('when the attribute type does not have a value selected', () => {
      beforeEach(() => {
        const specInitialState = {
          ids: [configurableProduct.id],
          entities: {
            [configurableProduct.id]: {
              id: configurableProduct.id,
              attributes: [],
            },
          },
        };

        result = adapter.toggleAttribute(
          specInitialState,
          configurableProduct.id,
          configurableProduct.configurableAttributes[0].code,
          configurableProduct.configurableAttributes[0].values[0].value,
        );
      });

      it('adds a configurable product attribute to its corresponding entity', () => {
        expect(result.entities[configurableProduct.id]).toEqual({
          id: configurableProduct.id,
          attributes: [{
            code: configurableProduct.configurableAttributes[0].code,
            value: configurableProduct.configurableAttributes[0].values[0].value,
          }],
        });
      });
    });

    describe('when the attribute type is selected with a different value', () => {
      beforeEach(() => {
        const specInitialState = {
          ids: [configurableProduct.id],
          entities: {
            [configurableProduct.id]: {
              id: configurableProduct.id,
              attributes: [{
                code: configurableProduct.configurableAttributes[0].code,
                value: configurableProduct.configurableAttributes[0].values[0].value,
              }],
            },
          },
        };

        result = adapter.toggleAttribute(
          specInitialState,
          configurableProduct.id,
          configurableProduct.configurableAttributes[0].code,
          configurableProduct.configurableAttributes[0].values[1].value,
        );
      });

      it('adds a configurable product attribute to its corresponding entity', () => {
        expect(result.entities[configurableProduct.id]).toEqual({
          id: configurableProduct.id,
          attributes: [{
            code: configurableProduct.configurableAttributes[0].code,
            value: configurableProduct.configurableAttributes[0].values[1].value,
          }],
        });
      });
    });
  });
});
