import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

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
  daffSearchGetPageSelectors,
} from '@daffodil/search/state';
import { DaffSearchResultFactory } from '@daffodil/search/testing';

import { DaffSearchFacadeBase } from './base.facade';

@Injectable()
export class TestFacade extends DaffSearchFacadeBase {
  constructor(
    store: Store<DaffSearchStateRootSlice>,
  ) {
    super(store, daffSearchGetPageSelectors());
  }
}

describe('@daffodil/search/state | DaffSearchFacadeBase', () => {
  let store: Store<DaffSearchStateRootSlice>;
  let facade: TestFacade;
  let searchResultFactory: DaffSearchResultFactory;

  let mockSearchResult: DaffSearchResult;
  let mockSearchResultCollection: DaffSearchResultCollection;
  let searchResultId: DaffSearchResult['id'];
  let errors: string[];

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_SEARCH_STORE_FEATURE_KEY]: combineReducers(daffSearchReducers),
        }),
      ],
      providers: [
        TestFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(TestFacade);
    searchResultFactory = TestBed.inject(DaffSearchResultFactory);

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
    expect(<any>store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('loading$', () => {
    it('should be false if the search is not loading', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: false });
      });
    });

    it('should be true if the search is loading', () => {
      store.dispatch(new DaffSearchLoad('query'));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: true });
      });
    });
  });

  describe('errors$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.errors$).toBe('a', { a: errors });
      });
    });

    it('should contain an error upon a failed load', () => {
      const error: DaffStateError = { code: 'code', message: 'message' };
      store.dispatch(new DaffSearchLoadFailure(error));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.errors$).toBe('a', { a: [error]});
      });
    });
  });

  describe('recent$', () => {
    it('should be the recent search queries', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.recent$).toBe('a', { a: []});
      });
    });
  });

  describe('searchResultIds$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.searchResultIds$).toBe('a', { a: {}});
      });
    });

    it('should contain the search id upon a successful search load', () => {
      store.dispatch(new DaffSearchLoadSuccess({
        collection: mockSearchResultCollection,
        metadata: {},
      }));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.searchResultIds$).toBe('a', { a: { [mockSearchResult.kind]: [searchResultId]}});
      });
    });
  });

  describe('resultCount$', () => {
    it('should initially be zero', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.resultCount$).toBe('a', { a: 0 });
      });
    });

    it('should be one upon a successful search load', () => {
      store.dispatch(new DaffSearchLoadSuccess({
        collection: mockSearchResultCollection,
        metadata: {},
      }));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.resultCount$).toBe('a', { a: 1 });
      });
    });
  });
});
