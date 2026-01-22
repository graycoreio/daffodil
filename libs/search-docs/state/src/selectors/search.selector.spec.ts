import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  select,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffDocsGridLoadSuccess,
  daffDocsReducers,
  DAFF_DOCS_STORE_FEATURE_KEY,
} from '@daffodil/docs/state';
import { DaffDocsTestingModule } from '@daffodil/docs/testing';
import { daffSearchTransformResultsToCollection } from '@daffodil/search';
import {
  daffSearchGetPageSelectors,
  DaffSearchLoadSuccess,
  daffSearchReducers,
  DAFF_SEARCH_STORE_FEATURE_KEY,
} from '@daffodil/search/state';
import { DaffSearchDocsResult } from '@daffodil/search-docs';
import {
  DaffSearchDocsStateRootSlice,
  DAFF_SEARCH_DOCS_STORE_FEATURE_KEY,
  daffSearchDocsReducers,
} from '@daffodil/search-docs/state';
import { DaffSearchDocsResultFactory } from '@daffodil/search-docs/testing';

import { daffSearchDocsCreateSelectors } from './search.selector';

describe('@daffodil/search-docs/state | daffSearchDocsCreateSelectors', () => {
  let store: Store<DaffSearchDocsStateRootSlice>;

  let searchResultFactory: DaffSearchDocsResultFactory;

  let mockSearchResults: DaffSearchDocsResult[];

  const {
    selectDocsResultIds,
    selectDocsResults,
  } = daffSearchDocsCreateSelectors(daffSearchGetPageSelectors().selectSearchResultIds);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_SEARCH_STORE_FEATURE_KEY]: combineReducers(daffSearchReducers),
          [DAFF_DOCS_STORE_FEATURE_KEY]: combineReducers(daffDocsReducers),
          [DAFF_SEARCH_DOCS_STORE_FEATURE_KEY]: combineReducers(daffSearchDocsReducers),
        }),
        DaffDocsTestingModule,
      ],
    });

    store = TestBed.inject(Store);
    searchResultFactory = TestBed.inject(DaffSearchDocsResultFactory);

    mockSearchResults = searchResultFactory.createMany();
  });

  describe('selectDocsResultIds', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectDocsResultIds));
      const expected = cold('a', { a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when search results have been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffSearchLoadSuccess({
          collection: daffSearchTransformResultsToCollection(mockSearchResults),
          metadata: {},
        }));
      });

      it('should select the docs search result IDs', () => {
        const selector = store.pipe(select(selectDocsResultIds));
        const expected = cold('a', { a: mockSearchResults.map(({ id }) => id) });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectDocsResults', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectDocsResults));
      const expected = cold('a', { a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when search results have been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffSearchLoadSuccess({
          collection: daffSearchTransformResultsToCollection(mockSearchResults),
          metadata: {},
        }));
        store.dispatch(new DaffDocsGridLoadSuccess(mockSearchResults));
      });

      it('should select the docs search results', () => {
        const selector = store.pipe(select(selectDocsResults));
        const expected = cold('a', { a: mockSearchResults });

        expect(selector).toBeObservable(expected);
      });
    });
  });
});
