import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DAFF_DOCS_STORE_FEATURE_KEY,
  daffDocsReducers,
  DaffDocsGridLoadSuccess,
} from '@daffodil/docs/state';
import { DaffDocsTestingModule } from '@daffodil/docs/testing';
import { daffSearchTransformResultsToCollection } from '@daffodil/search';
import { DaffSearchDriverResponse } from '@daffodil/search/driver';
import {
  DaffSearchLoadSuccess,
  daffSearchReducers,
  DAFF_SEARCH_STORE_FEATURE_KEY,
} from '@daffodil/search/state';
import { DaffSearchDocsResult } from '@daffodil/search-docs';
import {
  daffSearchDocsGetPageSelectors,
  daffSearchDocsReducers,
  DaffSearchDocsStateRootSlice,
  DAFF_SEARCH_DOCS_STORE_FEATURE_KEY,
} from '@daffodil/search-docs/state';
import { DaffSearchDocsResultFactory } from '@daffodil/search-docs/testing';

import { DaffSearchDocsFacade } from './search.facade';

@Injectable()
export class TestFacade extends DaffSearchDocsFacade {
  constructor(
    store: Store<DaffSearchDocsStateRootSlice>,
  ) {
    super(store, daffSearchDocsGetPageSelectors());
  }
}

describe('@daffodil/search-docs/state | DaffSearchDocsFacade', () => {
  let store: Store<DaffSearchDocsStateRootSlice>;
  let facade: TestFacade;
  let searchResultFactory: DaffSearchDocsResultFactory;

  let mockSearchResult: DaffSearchDocsResult;
  let mockSearchResultResponse: DaffSearchDriverResponse;

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
      providers: [
        TestFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(TestFacade);
    searchResultFactory = TestBed.inject(DaffSearchDocsResultFactory);

    mockSearchResult = searchResultFactory.create();
    mockSearchResultResponse = {
      collection: daffSearchTransformResultsToCollection([mockSearchResult]),
      metadata: {},
    };
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

  describe('docsResults$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.docsResults$).toBeObservable(expected);
    });

    it('should be the docsResults upon a successful load', () => {
      const expected = cold('a', { a: [mockSearchResult]});
      store.dispatch(new DaffSearchLoadSuccess(mockSearchResultResponse));
      store.dispatch(new DaffDocsGridLoadSuccess([mockSearchResult]));
      expect(facade.docsResults$).toBeObservable(expected);
    });
  });
});
