import { TestBed } from '@angular/core/testing';
import { EntityState } from '@ngrx/entity';

import { DaffCompositeProduct } from '@daffodil/product-composite';
import {
  daffCompositeProductAppliedOptionsEntitiesAdapter,
  DaffCompositeProductEntity,
} from '@daffodil/product-composite/state';
import { DaffCompositeProductFactory } from '@daffodil/product-composite/testing';
import { daffSearchTransformResultsToCollection } from '@daffodil/search';
import { DaffSearchLoadSuccess } from '@daffodil/search/state';
import { daffTransformProductsToSearchResults } from '@daffodil/search-product';
import { DaffSearchProductCompositeResult } from '@daffodil/search-product-composite';

import { daffSearchProductCompositeEntitiesReducer } from './composite-product-entities.reducer';

describe('@daffodil/search-product-composite | daffSearchProductCompositeEntitiesReducer', () => {
  let compositeProductFactory: DaffCompositeProductFactory;
  const initialState = daffCompositeProductAppliedOptionsEntitiesAdapter().getInitialState();
  let compositeProduct: DaffCompositeProduct;

  beforeEach(() => {
    compositeProductFactory = TestBed.inject(DaffCompositeProductFactory);
    compositeProduct = compositeProductFactory.create();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = <any>{};

      const result = daffSearchProductCompositeEntitiesReducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('when SearchLoadSuccessAction is triggered', () => {
    let result: EntityState<DaffCompositeProductEntity>;

    it('sets a composite product entity when the given product is composite', () => {
      const productLoadSuccess = new DaffSearchLoadSuccess<DaffSearchProductCompositeResult>({
        collection: daffSearchTransformResultsToCollection(daffTransformProductsToSearchResults([compositeProduct])),
        metadata: {},
      });
      result = daffSearchProductCompositeEntitiesReducer(initialState, productLoadSuccess);
      expect(result.ids).toContain(compositeProduct.id);
    });
  });
});
