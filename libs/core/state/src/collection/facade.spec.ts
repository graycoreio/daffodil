import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  Store,
  createFeatureSelector,
} from '@ngrx/store';
import {
  MockStore,
  provideMockStore,
} from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';

import { DaffCollectionMetadata } from '@daffodil/core';
import {
  daffCollectionReducerInitialState,
  daffCollectionSelectorFactory,
} from '@daffodil/core/state';
import { DaffCollectionMetadataFactory } from '@daffodil/core/testing';

import { DaffCollectionFacade } from './facade';

interface State {
  test: DaffCollectionMetadata;
}

const featureSelector = createFeatureSelector<DaffCollectionMetadata>('test');
const selectors = daffCollectionSelectorFactory(featureSelector);

@Injectable()
class TestFacade extends DaffCollectionFacade<State> {
  constructor(
    store: Store<State>,
  ) {
    super(store, selectors);
  }
}

describe('@daffodil/core/state | DaffCollectionFacade', () => {
  let store: MockStore<State>;
  let facade: DaffCollectionFacade<State>;
  let productCollectionMetadataFactory: DaffCollectionMetadataFactory;
  let productCollectionMetadata: DaffCollectionMetadata;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ...provideMockStore<State>({
          initialState: {
            test: daffCollectionReducerInitialState,
          },
        }),
        TestFacade,
      ],
    });

    store = TestBed.inject(MockStore);
    facade = TestBed.inject(TestFacade);

    productCollectionMetadataFactory = TestBed.inject(DaffCollectionMetadataFactory);

    productCollectionMetadata = productCollectionMetadataFactory.create();

    store.setState({
      test: productCollectionMetadata,
    });
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

  describe('currentPage$', () => {
    it('should return an observable of the current page', () => {
      const expected = cold('a', { a: productCollectionMetadata.currentPage });
      expect(facade.currentPage$).toBeObservable(expected);
    });
  });

  describe('metadata$', () => {
    it('should return an observable of the product collection metadata', () => {
      const expected = cold('a', { a: productCollectionMetadata });
      expect(facade.metadata$).toBeObservable(expected);
    });
  });

  describe('request$', () => {
    it('should return an observable of the product collection request', () => {
      const expected = cold('a', { a: {
        appliedSortOption: productCollectionMetadata.appliedSortOption,
        appliedSortDirection: productCollectionMetadata.appliedSortDirection,
        currentPage: productCollectionMetadata.currentPage,
        pageSize: productCollectionMetadata.pageSize,
      }});
      expect(facade.request$).toBeObservable(expected);
    });
  });

  describe('totalPages$', () => {
    it('should return an observable of the total number of pages', () => {
      const expected = cold('a', { a: productCollectionMetadata.totalPages });
      expect(facade.totalPages$).toBeObservable(expected);
    });
  });

  describe('count$', () => {
    it('should return an observable of the total number of products', () => {
      const expected = cold('a', { a: productCollectionMetadata.count });
      expect(facade.count$).toBeObservable(expected);
    });
  });

  describe('pageSize$', () => {
    it('should return an observable of the page size', () => {
      const expected = cold('a', { a: productCollectionMetadata.pageSize });
      expect(facade.pageSize$).toBeObservable(expected);
    });
  });

  describe('sortOptions$', () => {
    it('should return an observable of the sort options', () => {
      const expected = cold('a', { a: productCollectionMetadata.sortOptions.options });
      expect(facade.sortOptions$).toBeObservable(expected);
    });
  });

  describe('appliedSortOption$', () => {
    it('should return an observable of the applied sort option', () => {
      const expected = cold('a', { a: productCollectionMetadata.appliedSortOption });
      expect(facade.appliedSortOption$).toBeObservable(expected);
    });
  });

  describe('appliedSortDirection$', () => {
    it('should return an observable of the applied sort direction', () => {
      const expected = cold('a', { a: productCollectionMetadata.appliedSortDirection });
      expect(facade.appliedSortDirection$).toBeObservable(expected);
    });
  });
});
