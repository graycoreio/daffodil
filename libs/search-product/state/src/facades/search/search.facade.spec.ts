import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DAFF_PRODUCT_STORE_FEATURE_KEY,
  daffProductReducers,
  DaffProductGridLoadSuccess,
} from '@daffodil/product/state';
import { DaffProductTestingModule } from '@daffodil/product/testing';
import { daffSearchTransformResultsToCollection } from '@daffodil/search';
import { DaffSearchDriverResponse } from '@daffodil/search/driver';
import {
  DaffSearchLoadSuccess,
  daffSearchReducers,
  DAFF_SEARCH_STORE_FEATURE_KEY,
} from '@daffodil/search/state';
import { DaffSearchProductResult } from '@daffodil/search-product';
import {
  daffSearchProductGetPageSelectors,
  daffSearchProductReducers,
  DaffSearchProductStateRootSlice,
  DAFF_SEARCH_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/search-product/state';
import { DaffSearchProductResultFactory } from '@daffodil/search-product/testing';

import { DaffSearchProductFacade } from './search.facade';

@Injectable()
export class TestFacade extends DaffSearchProductFacade {
  constructor(
    store: Store<DaffSearchProductStateRootSlice>,
  ) {
    super(store, daffSearchProductGetPageSelectors());
  }
}

describe('@daffodil/search-product/state | DaffSearchProductFacade', () => {
  let store: Store<DaffSearchProductStateRootSlice>;
  let facade: TestFacade;
  let searchResultFactory: DaffSearchProductResultFactory;

  let mockSearchResult: DaffSearchProductResult;
  let mockSearchResultResponse: DaffSearchDriverResponse;

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
      providers: [
        TestFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(TestFacade);
    searchResultFactory = TestBed.inject(DaffSearchProductResultFactory);

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

  describe('productResults$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.productResults$).toBeObservable(expected);
    });

    it('should be the productResults upon a successful load', () => {
      const expected = cold('a', { a: [mockSearchResult]});
      store.dispatch(new DaffSearchLoadSuccess(mockSearchResultResponse));
      store.dispatch(new DaffProductGridLoadSuccess([mockSearchResult]));
      expect(facade.productResults$).toBeObservable(expected);
    });
  });
});
