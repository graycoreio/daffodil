import { TestBed } from '@angular/core/testing';
import { EntityState } from '@ngrx/entity';

import { daffProductEntitiesAdapter } from '@daffodil/product/state';
import { DaffProductTestingModule } from '@daffodil/product/testing';
import {
  DaffSearchResult,
  daffSearchTransformResultsToCollection,
} from '@daffodil/search';
import {
  DaffSearchIncrementalSuccess,
  DaffSearchLoadSuccess,
} from '@daffodil/search/state';
import { DaffSearchProductResult } from '@daffodil/search-product';
import { DaffSearchProductResultFactory } from '@daffodil/search-product/testing';

import { daffSearchProductEntitiesReducer as reducer } from './entities.reducer';

describe('@daffodil/search-product-product/state | daffSearchProductEntitiesReducer', () => {
  let searchProductResultFactory: DaffSearchProductResultFactory;
  let search: DaffSearchProductResult;
  let searchResultId: DaffSearchResult['id'];
  let initialState: EntityState<DaffSearchProductResult>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
    });

    searchProductResultFactory = TestBed.inject(DaffSearchProductResultFactory);

    initialState = daffProductEntitiesAdapter<DaffSearchProductResult>().getInitialState();
    search = searchProductResultFactory.create();
    searchResultId = search.id;
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when SearchLoadSuccessAction is triggered', () => {
    let result: EntityState<DaffSearchProductResult>;

    beforeEach(() => {
      const searchResultLoadSuccess = new DaffSearchLoadSuccess({
        collection: daffSearchTransformResultsToCollection([search]),
        metadata: {},
      });

      result = reducer(initialState, searchResultLoadSuccess);
    });

    it('should set search from action.payload', () => {
      expect(result.entities[searchResultId]).toEqual(search);
    });
  });

  describe('when SearchIncrementalSuccessAction is triggered', () => {
    let result: EntityState<DaffSearchProductResult>;

    beforeEach(() => {
      const searchResultIncrementalSuccess = new DaffSearchIncrementalSuccess(daffSearchTransformResultsToCollection([search]));

      result = reducer(initialState, searchResultIncrementalSuccess);
    });

    it('should set search from action.payload', () => {
      expect(result.entities[searchResultId]).toEqual(search);
    });
  });
});
