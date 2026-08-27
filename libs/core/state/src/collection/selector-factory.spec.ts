import { TestBed } from '@angular/core/testing';
import {
  select,
  createFeatureSelector,
} from '@ngrx/store';
import {
  provideMockStore,
  MockStore,
} from '@ngrx/store/testing';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCollectionMetadata,
  DaffFilters,
  daffFilterArrayToDict,
  daffFilterEqualOptionArrayToDict,
  DaffFilterType,
} from '@daffodil/core';
import { daffCollectionReducerInitialState } from '@daffodil/core/state';
import {
  DaffCollectionMetadataFactory,
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
  DaffFilterFactory,
} from '@daffodil/core/testing';

import { daffCollectionSelectorFactory } from './selector-factory';

interface State {
  test: DaffCollectionMetadata;
}

const featureSelector = createFeatureSelector<DaffCollectionMetadata>('test');

describe('@daffodil/core/state | daffCollectionSelectorFactory', () => {

  let store: MockStore<State>;
  let collectionMetadataFactory: DaffCollectionMetadataFactory;
  let filterFactory: DaffFilterFactory;
  let filterEqualFactory: DaffFilterEqualFactory;
  let filterEqualOptionFactory: DaffFilterEqualOptionFactory;

  let stubCollectionMetadata: DaffCollectionMetadata;
  const selectors = daffCollectionSelectorFactory(featureSelector);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ...provideMockStore<State>({
          initialState: {
            test: daffCollectionReducerInitialState,
          },
        }),
      ],
    });

    store = TestBed.inject(MockStore);
    collectionMetadataFactory = TestBed.inject(DaffCollectionMetadataFactory);
    filterFactory = TestBed.inject(DaffFilterFactory);
    filterEqualFactory = TestBed.inject(DaffFilterEqualFactory);
    filterEqualOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);

    stubCollectionMetadata = collectionMetadataFactory.create();

    store.setState({
      test: stubCollectionMetadata,
    });
  });

  describe('selectCollectionFilters', () => {
    it('selects filters of the collection', () => {
      const selector = store.pipe(select(selectors.selectCollectionFilters));
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: stubCollectionMetadata.filters });
      });
    });
  });

  describe('selectCollectionAppliedFilters', () => {
    it('sets applied filters to {} if there are no applied filters', () => {
      const expectedAppliedFilters: DaffFilters = {};

      store.setState({
        test: {
          ...stubCollectionMetadata,
          filters: {
            name: {
              name: 'name',
              type: DaffFilterType.Equal,
              label: 'labelRDaffFilterRequest',
              options: {
                value: {
                  applied: false,
                  label: 'optionLabel',
                  value: 'value',
                  count: 2,
                },
              },
            },
            name2: {
              name: 'name2',
              type: DaffFilterType.Equal,
              label: 'label2RDaffFilterRequest',
              options: {
                value2: {
                  applied: false,
                  label: 'optionLabel2',
                  value: 'value2',
                  count: 2,
                },
              },
            },
          },
        },
      });

      const selector = store.pipe(select(selectors.selectCollectionAppliedFilters));
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: expectedAppliedFilters });
      });
    });

    it('selects the applied filters of the collection', () => {
      const filters = filterFactory.createMany(5);
      const filterEqual = filterEqualFactory.create({
        options: daffFilterEqualOptionArrayToDict(filterEqualOptionFactory.createMany(2, {
          applied: true,
        })),
      });
      const filterDict = daffFilterArrayToDict([
        ...filters,
        filterEqual,
      ]);

      const expectedAppliedFilters: DaffFilters = daffFilterArrayToDict([filterEqual]);

      store.setState({
        test: {
          ...stubCollectionMetadata,
          filters: filterDict,
        },
      });

      const selector = store.pipe(select(selectors.selectCollectionAppliedFilters));
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: expectedAppliedFilters });
      });
    });
  });

  describe('selectCollectionMetadata', () => {
    it('selects the collection metadata', () => {
      const selector = store.pipe(select(selectors.selectCollectionMetadata));
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: stubCollectionMetadata });
      });
    });
  });

  describe('selectCollectionRequest', () => {
    it('builds a collection request', () => {
      const selector = store.pipe(select(selectors.selectCollectionRequest));
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: {
          appliedSortOption: stubCollectionMetadata.appliedSortOption,
          appliedSortDirection: stubCollectionMetadata.appliedSortDirection,
          currentPage: stubCollectionMetadata.currentPage,
          pageSize: stubCollectionMetadata.pageSize,
        }});
      });
    });
  });

  describe('selectCollectionCount', () => {
    it('selects the current page of the collection', () => {
      const selector = store.pipe(select(selectors.selectCollectionCount));
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: stubCollectionMetadata.count });
      });
    });
  });

  describe('selectCollectionCurrentPage', () => {
    it('selects the current page of the collection', () => {
      const selector = store.pipe(select(selectors.selectCollectionCurrentPage));
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: stubCollectionMetadata.currentPage });
      });
    });
  });

  describe('selectCollectionTotalPages', () => {
    it('selects the total pages of items of the collection', () => {
      const selector = store.pipe(select(selectors.selectCollectionTotalPages));
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: stubCollectionMetadata.totalPages });
      });
    });
  });

  describe('selectCollectionPageSize', () => {
    it('selects the page size of the collection', () => {
      const selector = store.pipe(select(selectors.selectCollectionPageSize));
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: stubCollectionMetadata.pageSize });
      });
    });
  });

  describe('selectCollectionSortOptions', () => {
    it('selects the sort options of the collection', () => {
      const selector = store.pipe(select(selectors.selectCollectionSortOptions));
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: stubCollectionMetadata.sortOptions.options });
      });
    });
  });

  describe('selectCollectionAppliedSortOption', () => {
    it('selects the applied sort option of the collection page', () => {
      const selector = store.pipe(select(selectors.selectCollectionAppliedSortOption));
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: stubCollectionMetadata.appliedSortOption });
      });
    });
  });

  describe('selectCollectionAppliedSortDirection', () => {
    it('selects the applied sort direction of the collection page', () => {
      const selector = store.pipe(select(selectors.selectCollectionAppliedSortDirection));
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: stubCollectionMetadata.appliedSortDirection });
      });
    });
  });
});
