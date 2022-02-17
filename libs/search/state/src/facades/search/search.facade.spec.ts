import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffStateError } from '@daffodil/core/state';
import {
  DaffSearchResult,
  DaffSearchResultCollection,
  daffSearchTransformResultsToCollection,
} from '@daffodil/search';
import {
  DaffSearchLoad,
  DaffSearchLoadSuccess,
  DaffSearchLoadFailure,
  DaffSearchStateRootSlice,
  daffSearchReducers,
  DAFF_SEARCH_STORE_FEATURE_KEY,
} from '@daffodil/search/state';
import { DaffGeneralSearchResultFactory } from '@daffodil/search/testing';

import { DaffSearchFacade } from './search.facade';

describe('@daffodil/search/state | DaffSearchFacade', () => {
  let store: Store<DaffSearchStateRootSlice>;
  let facade: DaffSearchFacade;
  let searchResultFactory: DaffGeneralSearchResultFactory;

  let mockSearchResult: DaffSearchResult;
  let mockSearchResultCollection: DaffSearchResultCollection;
  let searchResultId: DaffSearchResult['id'];
  let errors: string[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_SEARCH_STORE_FEATURE_KEY]: combineReducers(daffSearchReducers),
        }),
      ],
      providers: [
        DaffSearchFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffSearchFacade);
    searchResultFactory = TestBed.inject(DaffGeneralSearchResultFactory);

    mockSearchResult = searchResultFactory.create();
    mockSearchResultCollection = daffSearchTransformResultsToCollection([mockSearchResult]);
    searchResultId = mockSearchResult.id;
    errors = [];
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'SOME_TYPE' };

    facade.dispatch(action);
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('loading$', () => {
    it('should be false if the search is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });

    it('should be true if the search is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffSearchLoad('query'));
      expect(facade.loading$).toBeObservable(expected);
    });
  });

  describe('errors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: errors });
      expect(facade.errors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed load', () => {
      const error: DaffStateError = { code: 'code', message: 'message' };
      const expected = cold('a', { a: [error]});
      store.dispatch(new DaffSearchLoadFailure(error));
      expect(facade.errors$).toBeObservable(expected);
    });
  });

  describe('searchResults$', () => {
    it('should initially be an empty dictionary', () => {
      const expected = cold('a', { a: {}});
      expect(facade.searchResults$).toBeObservable(expected);
    });

    it('should be the searchResults upon a successful load', () => {
      const expected = cold('a', { a: mockSearchResultCollection });
      store.dispatch(new DaffSearchLoadSuccess(mockSearchResultCollection));
      expect(facade.searchResults$).toBeObservable(expected);
    });
  });

  describe('searchResultIds$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.searchResultIds$).toBeObservable(expected);
    });

    it('should contain the search id upon a successful search load', () => {
      const expected = cold('a', { a: [searchResultId]});
      store.dispatch(new DaffSearchLoadSuccess(mockSearchResultCollection));
      expect(facade.searchResultIds$).toBeObservable(expected);
    });
  });

  describe('searchResultCount$', () => {
    it('should initially be zero', () => {
      const expected = cold('a', { a: 0 });
      expect(facade.searchResultCount$).toBeObservable(expected);
    });

    it('should be one upon a successful search load', () => {
      const expected = cold('a', { a: 1 });
      store.dispatch(new DaffSearchLoadSuccess(mockSearchResultCollection));
      expect(facade.searchResultCount$).toBeObservable(expected);
    });
  });

  describe('searchResultEntities$', () => {
    it('should initially be an empty object', () => {
      const expected = cold('a', { a: {}});
      expect(facade.searchResultEntities$).toBeObservable(expected);
    });

    it('should contain the search upon a successful search load', () => {
      const expected = cold('a', { a: { [searchResultId]: mockSearchResult }});
      store.dispatch(new DaffSearchLoadSuccess(mockSearchResultCollection));
      expect(facade.searchResultEntities$).toBeObservable(expected);
    });
  });

  describe('getSearch$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null });

      expect(facade.getSearch$(searchResultId)).toBeObservable(expected);
    });

    describe('when a search has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffSearchLoadSuccess(mockSearchResultCollection));
      });

      it('should select the search', () => {
        const expected = cold('a', { a: mockSearchResult });

        expect(facade.getSearch$(searchResultId)).toBeObservable(expected);
      });
    });
  });
});
