import { TestBed } from '@angular/core/testing';
import { EntityState } from '@ngrx/entity';

import { DaffConfigurableProduct } from '@daffodil/product-configurable';
import {
  daffConfigurableProductAppliedAttributesEntitiesAdapter,
  DaffConfigurableProductEntity,
} from '@daffodil/product-configurable/state';
import { DaffConfigurableProductFactory } from '@daffodil/product-configurable/testing';
import { daffSearchTransformResultsToCollection } from '@daffodil/search';
import { DaffSearchLoadSuccess } from '@daffodil/search/state';
import { daffTransformProductsToSearchResults } from '@daffodil/search-product';
import { DaffSearchProductConfigurableResult } from '@daffodil/search-product-configurable';

import { daffSearchProductConfigurableProductEntitiesReducer } from './configurable-product-entities.reducer';

describe('@daffodil/search-product-configurable | daffSearchProductConfigurableProductEntitiesReducer', () => {
  let configurableProductFactory: DaffConfigurableProductFactory;
  const initialState = daffConfigurableProductAppliedAttributesEntitiesAdapter().getInitialState();
  let configurableProduct: DaffConfigurableProduct;

  beforeEach(() => {
    configurableProductFactory = TestBed.inject(DaffConfigurableProductFactory);
    configurableProduct = configurableProductFactory.create();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = <any>{};

      const result = daffSearchProductConfigurableProductEntitiesReducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('when SearchLoadSuccessAction is triggered', () => {
    let result: EntityState<DaffConfigurableProductEntity>;

    it('sets a configurable product entity when the given product is configurable', () => {
      const productLoadSuccess = new DaffSearchLoadSuccess<DaffSearchProductConfigurableResult>({
        collection: daffSearchTransformResultsToCollection(daffTransformProductsToSearchResults([configurableProduct])),
        metadata: {},
      });
      result = daffSearchProductConfigurableProductEntitiesReducer(initialState, productLoadSuccess);
      expect(result.ids).toContain(configurableProduct.id);
    });
  });
});
