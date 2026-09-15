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
import { TestScheduler } from 'rxjs/testing';

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
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(facade.currentPage$).toBe('a', { a: collectionMetadata.currentPage });
      });
    });
  });

  describe('metadata$', () => {
    it('should return an observable of the collection metadata', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(facade.metadata$).toBe('a', { a: collectionMetadata });
      });
    });
  });

  describe('request$', () => {
    it('should return an observable of the collection request', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(facade.request$).toBe('a', { a: {
          appliedSortOption: collectionMetadata.appliedSortOption,
          appliedSortDirection: collectionMetadata.appliedSortDirection,
          currentPage: collectionMetadata.currentPage,
          pageSize: collectionMetadata.pageSize,
        }});
      });
    });
  });

  describe('totalPages$', () => {
    it('should return an observable of the total number of pages', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(facade.totalPages$).toBe('a', { a: collectionMetadata.totalPages });
      });
    });
  });

  describe('count$', () => {
    it('should return an observable of the total number of entities', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(facade.count$).toBe('a', { a: collectionMetadata.count });
      });
    });
  });

  describe('pageSize$', () => {
    it('should return an observable of the page size', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(facade.pageSize$).toBe('a', { a: collectionMetadata.pageSize });
      });
    });
  });

  describe('sortOptions$', () => {
    it('should return an observable of the sort options', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(facade.sortOptions$).toBe('a', { a: collectionMetadata.sortOptions.options });
      });
    });
  });

  describe('appliedSortOption$', () => {
    it('should return an observable of the applied sort option', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(facade.appliedSortOption$).toBe('a', { a: collectionMetadata.appliedSortOption });
      });
    });
  });

  describe('appliedSortDirection$', () => {
    it('should return an observable of the applied sort direction', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(facade.appliedSortDirection$).toBe('a', { a: collectionMetadata.appliedSortDirection });
      });
    });
  });

  describe('filters$', () => {
    it('should return an observable of the filters', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(facade.filters$).toBe('a', { a: collectionMetadata.filters });
      });
    });
  });

  describe('appliedFilters$', () => {
    it('should return an observable of the applied filters', () => {
      const expectedFilters: DaffFilters = {};

      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(facade.appliedFilters$).toBe('a', { a: expectedFilters });
      });
    });
  });
});
