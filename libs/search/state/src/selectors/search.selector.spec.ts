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
  DaffSearchLoadSuccess,
  daffSearchReducers,
  DaffSearchStateRootSlice,
  DAFF_SEARCH_STORE_FEATURE_KEY,
} from '@daffodil/search/state';
import { DaffGeneralSearchResultFactory } from '@daffodil/search/testing';

import { getSearchSelectors } from './search.selector';

describe('@daffodil/search/state | getSearchSelectors', () => {
  let store: Store<DaffSearchStateRootSlice>;

  let searchResultFactory: DaffGeneralSearchResultFactory;

  let loading: boolean;
  let errors: string[];
  let mockSearchResults: DaffSearchResult[];

  const {
    selectSearchLoading,
    selectSearchErrors,
    selectSearchResults,
  } = getSearchSelectors();

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

    mockSearchResults = searchResultFactory.createMany();
    loading = false;
    errors = [];
  });

  describe('selectSearchLoading', () => {
    it('should select the loading property of the search state', () => {
      const selector = store.pipe(select(selectSearchLoading));
      const expected = cold('a', { a: loading });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectSearchErrors', () => {
    it('should select the error property of the search state', () => {
      const selector = store.pipe(select(selectSearchErrors));
      const expected = cold('a', { a: errors });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectSearchResults', () => {
    it('should initially be an empty dictionary', () => {
      const selector = store.pipe(select(selectSearchResults));
      const expected = cold('a', { a: {}});

      expect(selector).toBeObservable(expected);
    });

    describe('when search results have been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffSearchLoadSuccess(daffSearchTransformResultsToCollection(mockSearchResults)));
      });

      it('should select the specified search result collection', () => {
        const selector = store.pipe(select(selectSearchResults));
        const expected = cold('a', { a: daffSearchTransformResultsToCollection(mockSearchResults) });

        expect(selector).toBeObservable(expected);
      });
    });
  });
});
