import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  select,
  combineReducers,
} from '@ngrx/store';

import { runMarbles } from '@daffodil/jasmine';
import {
  DaffProductGridLoadSuccess,
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import { DaffProductTestingModule } from '@daffodil/product/testing';
import { daffSearchTransformResultsToCollection } from '@daffodil/search';
import {
  daffSearchGetPageSelectors,
  DaffSearchLoadSuccess,
  daffSearchReducers,
  DAFF_SEARCH_STORE_FEATURE_KEY,
} from '@daffodil/search/state';
import { DaffSearchProductResult } from '@daffodil/search-product';
import {
  DaffSearchProductStateRootSlice,
  DAFF_SEARCH_PRODUCT_STORE_FEATURE_KEY,
  daffSearchProductReducers,
} from '@daffodil/search-product/state';
import { DaffSearchProductResultFactory } from '@daffodil/search-product/testing';

import { daffSearchProductCreateSelectors } from './search.selector';

describe('@daffodil/search-product/state | daffSearchProductCreateSelectors', () => {
  let store: Store<DaffSearchProductStateRootSlice>;

  let searchResultFactory: DaffSearchProductResultFactory;

  let mockSearchResults: DaffSearchProductResult[];

  const {
    selectProductResultIds,
    selectProductResults,
  } = daffSearchProductCreateSelectors(daffSearchGetPageSelectors().selectSearchResultIds);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_SEARCH_STORE_FEATURE_KEY]: combineReducers(daffSearchReducers),
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
          [DAFF_SEARCH_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffSearchProductReducers),
        }),
        DaffProductTestingModule,
      ],
    });

    store = TestBed.inject(Store);
    searchResultFactory = TestBed.inject(DaffSearchProductResultFactory);

    mockSearchResults = searchResultFactory.createMany();
  });

  describe('selectProductResultIds', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectProductResultIds));

      runMarbles(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: []});
      });
    });

    describe('when search results have been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffSearchLoadSuccess({
          collection: daffSearchTransformResultsToCollection(mockSearchResults),
          metadata: {},
        }));
      });

      it('should select the product search result IDs', () => {
        const selector = store.pipe(select(selectProductResultIds));

        runMarbles(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: mockSearchResults.map(({ id }) => id) });
        });
      });
    });
  });

  describe('selectProductResults', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectProductResults));

      runMarbles(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: []});
      });
    });

    describe('when search results have been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffSearchLoadSuccess({
          collection: daffSearchTransformResultsToCollection(mockSearchResults),
          metadata: {},
        }));
        store.dispatch(new DaffProductGridLoadSuccess(mockSearchResults));
      });

      it('should select the product search results', () => {
        const selector = store.pipe(select(selectProductResults));

        runMarbles(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: mockSearchResults });
        });
      });
    });
  });
});
