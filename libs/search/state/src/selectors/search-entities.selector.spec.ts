import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  select,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffSearchResult,
  daffSearchTransformResultsToCollection,
} from '@daffodil/search';
import {
  daffSearchReducers,
  DAFF_SEARCH_STORE_FEATURE_KEY,
  DaffSearchStateRootSlice,
  DaffSearchLoadSuccess,
} from '@daffodil/search/state';
import { DaffGeneralSearchResultFactory } from '@daffodil/search/testing';

import { getDaffSearchEntitySelectors } from './search-entities.selector';

describe('@daffodil/search/state | getDaffSearchEntitySelectors', () => {
  let store: Store<DaffSearchStateRootSlice>;

  let searchResultFactory: DaffGeneralSearchResultFactory;

  let mockSearchResult: DaffSearchResult;
  let searchResultId: DaffSearchResult['id'];

  const {
    selectAllSearches,
    selectSearchEntities,
    selectSearchIds,
    selectSearchTotal,
    selectSearch,
  } = getDaffSearchEntitySelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_SEARCH_STORE_FEATURE_KEY]: combineReducers(daffSearchReducers),
        }),
      ],
    });

    store = TestBed.inject(Store);
    searchResultFactory = TestBed.inject(DaffGeneralSearchResultFactory);

    mockSearchResult = searchResultFactory.create();
    searchResultId = mockSearchResult.id;
  });

  describe('selectAllSearches', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectAllSearches));
      const expected = cold('a', { a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an search has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffSearchLoadSuccess(daffSearchTransformResultsToCollection([mockSearchResult])));
      });

      it('should select all of the searchResults', () => {
        const selector = store.pipe(select(selectAllSearches));
        const expected = cold('a', { a: [mockSearchResult]});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectSearchEntities', () => {
    it('should initially be an empty object', () => {
      const selector = store.pipe(select(selectSearchEntities));
      const expected = cold('a', { a: {}});

      expect(selector).toBeObservable(expected);
    });

    describe('when an search has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffSearchLoadSuccess(daffSearchTransformResultsToCollection([mockSearchResult])));
      });

      it('should select all of the searchResults', () => {
        const selector = store.pipe(select(selectSearchEntities));
        const expected = cold('a', { a: { [searchResultId]: mockSearchResult }});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectSearchIds', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectSearchIds));
      const expected = cold('a', { a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an search has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffSearchLoadSuccess(daffSearchTransformResultsToCollection([mockSearchResult])));
      });

      it('should select all of the search IDs', () => {
        const selector = store.pipe(select(selectSearchIds));
        const expected = cold('a', { a: [searchResultId]});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectSearchTotal', () => {
    it('should initially be 0', () => {
      const selector = store.pipe(select(selectSearchTotal));
      const expected = cold('a', { a: 0 });

      expect(selector).toBeObservable(expected);
    });

    describe('when an search has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffSearchLoadSuccess(daffSearchTransformResultsToCollection([mockSearchResult])));
      });

      it('should select the total number of searchResults', () => {
        const selector = store.pipe(select(selectSearchTotal));
        const expected = cold('a', { a: 1 });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectSearch', () => {
    it('should initially be null', () => {
      const selector = store.pipe(select(selectSearch(searchResultId)));
      const expected = cold('a', { a: null });

      expect(selector).toBeObservable(expected);
    });

    describe('when search results have been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffSearchLoadSuccess(daffSearchTransformResultsToCollection([mockSearchResult])));
      });

      it('should select the specified searchResult', () => {
        const selector = store.pipe(select(selectSearch(searchResultId)));
        const expected = cold('a', { a: mockSearchResult });

        expect(selector).toBeObservable(expected);
      });
    });
  });
});
