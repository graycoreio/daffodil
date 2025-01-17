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

import {
  DaffCollectionMetadata,
  DaffFilters,
} from '@daffodil/core';
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
  let collectionMetadataFactory: DaffCollectionMetadataFactory;
  let collectionMetadata: DaffCollectionMetadata;

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

    collectionMetadataFactory = TestBed.inject(DaffCollectionMetadataFactory);

    collectionMetadata = collectionMetadataFactory.create();

    store.setState({
      test: collectionMetadata,
    });
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

  describe('currentPage$', () => {
    it('should return an observable of the current page', () => {
      const expected = cold('a', { a: collectionMetadata.currentPage });
      expect(facade.currentPage$).toBeObservable(expected);
    });
  });

  describe('metadata$', () => {
    it('should return an observable of the collection metadata', () => {
      const expected = cold('a', { a: collectionMetadata });
      expect(facade.metadata$).toBeObservable(expected);
    });
  });

  describe('request$', () => {
    it('should return an observable of the collection request', () => {
      const expected = cold('a', { a: {
        appliedSortOption: collectionMetadata.appliedSortOption,
        appliedSortDirection: collectionMetadata.appliedSortDirection,
        currentPage: collectionMetadata.currentPage,
        pageSize: collectionMetadata.pageSize,
      }});
      expect(facade.request$).toBeObservable(expected);
    });
  });

  describe('totalPages$', () => {
    it('should return an observable of the total number of pages', () => {
      const expected = cold('a', { a: collectionMetadata.totalPages });
      expect(facade.totalPages$).toBeObservable(expected);
    });
  });

  describe('count$', () => {
    it('should return an observable of the total number of entities', () => {
      const expected = cold('a', { a: collectionMetadata.count });
      expect(facade.count$).toBeObservable(expected);
    });
  });

  describe('pageSize$', () => {
    it('should return an observable of the page size', () => {
      const expected = cold('a', { a: collectionMetadata.pageSize });
      expect(facade.pageSize$).toBeObservable(expected);
    });
  });

  describe('sortOptions$', () => {
    it('should return an observable of the sort options', () => {
      const expected = cold('a', { a: collectionMetadata.sortOptions.options });
      expect(facade.sortOptions$).toBeObservable(expected);
    });
  });

  describe('appliedSortOption$', () => {
    it('should return an observable of the applied sort option', () => {
      const expected = cold('a', { a: collectionMetadata.appliedSortOption });
      expect(facade.appliedSortOption$).toBeObservable(expected);
    });
  });

  describe('appliedSortDirection$', () => {
    it('should return an observable of the applied sort direction', () => {
      const expected = cold('a', { a: collectionMetadata.appliedSortDirection });
      expect(facade.appliedSortDirection$).toBeObservable(expected);
    });
  });

  describe('filters$', () => {
    it('should return an observable of the filters', () => {
      const expected = cold('a', { a: collectionMetadata.filters });
      expect(facade.filters$).toBeObservable(expected);
    });
  });

  describe('appliedFilters$', () => {
    it('should return an observable of the applied filters', () => {
      const expectedFilters: DaffFilters = {};

      const expected = cold('a', { a: expectedFilters });
      expect(facade.appliedFilters$).toBeObservable(expected);
    });
  });
});
