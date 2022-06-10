import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  select,
  combineReducers,
  createSelector,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffSearchResult,
  daffSearchTransformResultsToCollection,
} from '@daffodil/search';
import {
  DaffSearchLoad,
  DaffSearchLoadSuccess,
  daffSearchReducers,
  DaffSearchStateRootSlice,
  DAFF_SEARCH_STORE_FEATURE_KEY,
} from '@daffodil/search/state';
import { DaffSearchResultFactory } from '@daffodil/search/testing';

import { getDaffSearchReducersStateSelector } from './search-feature.selector';
import { daffSearchCreateSearchSelectors } from './search.selector';

const { selectSearchFeatureState } = getDaffSearchReducersStateSelector();
const selectSearchState = createSelector(
  selectSearchFeatureState,
  state => state.search,
);

describe('@daffodil/search/state | daffSearchCreateSearchSelectors', () => {
  let store: Store<DaffSearchStateRootSlice>;

  let searchResultFactory: DaffSearchResultFactory;

  let loading: boolean;
  let errors: string[];
  let mockSearchResults: DaffSearchResult[];

  const {
    selectSearchLoading,
    selectSearchErrors,
    selectSearchResultIds,
    selectRecent,
  } = daffSearchCreateSearchSelectors(selectSearchState);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_SEARCH_STORE_FEATURE_KEY]: combineReducers(daffSearchReducers),
        }),
      ],
    });

    store = TestBed.inject(Store);
    searchResultFactory = TestBed.inject(DaffSearchResultFactory);

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

  describe('selectSearchResultIds', () => {
    it('should initially be an empty dictionary', () => {
      const selector = store.pipe(select(selectSearchResultIds));
      const expected = cold('a', { a: {}});

      expect(selector).toBeObservable(expected);
    });

    describe('when search results have been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffSearchLoadSuccess({
          collection: daffSearchTransformResultsToCollection(mockSearchResults),
          metadata: {},
        }));
      });

      it('should select the specified search result collection', () => {
        const selector = store.pipe(select(selectSearchResultIds));
        const expected = cold('a', { a: {
          [mockSearchResults[0].kind]: [mockSearchResults[0].id],
        }});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectRecent', () => {
    describe('when there have been no recent search queries', () => {
      it('should be an empty array', () => {
        const selector = store.pipe(select(selectRecent));
        const expected = cold('a', { a: []});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when there have been recent search queries', () => {
      let query: string;

      beforeEach(() => {
        query = 'query';
        store.dispatch(new DaffSearchLoad(query));
      });

      it('should contain the recent search queries', () => {
        const selector = store.pipe(select(selectRecent));
        const expected = cold('a', { a: jasmine.arrayContaining([query]) });

        expect(selector).toBeObservable(expected);
      });
    });
  });
});
