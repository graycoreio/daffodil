import {
  DaffSearchResult,
  daffSearchTransformResultsToCollection,
} from '@daffodil/search';
import {
  DaffSearchLoadSuccess,
  daffSearchEntitiesInitialState as initialState,
} from '@daffodil/search/state';
import { DaffGeneralSearchResultFactory } from '@daffodil/search/testing';

import { daffSearchEntitiesReducer as reducer } from './search-entities.reducer';

describe('@daffodil/search/state | daffSearchEntitiesReducer', () => {
  let searchResultFactory: DaffGeneralSearchResultFactory;
  let search: DaffSearchResult;
  let searchResultId: DaffSearchResult['id'];

  beforeEach(() => {
    searchResultFactory = new DaffGeneralSearchResultFactory();

    search = searchResultFactory.create();
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
    let result;

    beforeEach(() => {
      const searchResultLoadSuccess = new DaffSearchLoadSuccess(daffSearchTransformResultsToCollection([search]));

      result = reducer(initialState, searchResultLoadSuccess);
    });

    it('should set search from action.payload', () => {
      expect(result.entities[searchResultId]).toEqual(search);
    });
  });
});
