import { Injectable } from '@angular/core';
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

  beforeEach(() => {
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

  describe('recent$', () => {
    it('should be the recent search queries', () => {
      const expected = cold('a', { a: []});
      expect(facade.recent$).toBeObservable(expected);
    });
  });

  describe('searchResultIds$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: {}});
      expect(facade.searchResultIds$).toBeObservable(expected);
    });

    it('should contain the search id upon a successful search load', () => {
      const expected = cold('a', { a: { [mockSearchResult.kind]: [searchResultId]}});
      store.dispatch(new DaffSearchLoadSuccess({
        collection: mockSearchResultCollection,
        metadata: {},
      }));
      expect(facade.searchResultIds$).toBeObservable(expected);
    });
  });

  describe('resultCount$', () => {
    it('should initially be zero', () => {
      const expected = cold('a', { a: 0 });
      expect(facade.resultCount$).toBeObservable(expected);
    });

    it('should be one upon a successful search load', () => {
      const expected = cold('a', { a: 1 });
      store.dispatch(new DaffSearchLoadSuccess({
        collection: mockSearchResultCollection,
        metadata: {},
      }));
      expect(facade.resultCount$).toBeObservable(expected);
    });
  });
});
