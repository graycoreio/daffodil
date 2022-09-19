import { TestBed } from '@angular/core/testing';
import {
  select,
  createFeatureSelector,
} from '@ngrx/store';
import {
  provideMockStore,
  MockStore,
} from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';

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
      const expected = cold('a', { a: stubCollectionMetadata.filters });
      expect(selector).toBeObservable(expected);
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
      const expected = cold('a', { a: expectedAppliedFilters });
      expect(selector).toBeObservable(expected);
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
      const expected = cold('a', { a: expectedAppliedFilters });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCollectionMetadata', () => {
    it('selects the collection metadata', () => {
      const selector = store.pipe(select(selectors.selectCollectionMetadata));
      const expected = cold('a', { a: stubCollectionMetadata });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCollectionRequest', () => {
    it('builds a collection request', () => {
      const selector = store.pipe(select(selectors.selectCollectionRequest));
      const expected = cold('a', { a: {
        appliedSortOption: stubCollectionMetadata.appliedSortOption,
        appliedSortDirection: stubCollectionMetadata.appliedSortDirection,
        currentPage: stubCollectionMetadata.currentPage,
        pageSize: stubCollectionMetadata.pageSize,
      }});
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCollectionCount', () => {
    it('selects the current page of the collection', () => {
      const selector = store.pipe(select(selectors.selectCollectionCount));
      const expected = cold('a', { a: stubCollectionMetadata.count });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCollectionCurrentPage', () => {
    it('selects the current page of the collection', () => {
      const selector = store.pipe(select(selectors.selectCollectionCurrentPage));
      const expected = cold('a', { a: stubCollectionMetadata.currentPage });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCollectionTotalPages', () => {
    it('selects the total pages of items of the collection', () => {
      const selector = store.pipe(select(selectors.selectCollectionTotalPages));
      const expected = cold('a', { a: stubCollectionMetadata.totalPages });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCollectionPageSize', () => {
    it('selects the page size of the collection', () => {
      const selector = store.pipe(select(selectors.selectCollectionPageSize));
      const expected = cold('a', { a: stubCollectionMetadata.pageSize });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCollectionSortOptions', () => {
    it('selects the sort options of the collection', () => {
      const selector = store.pipe(select(selectors.selectCollectionSortOptions));
      const expected = cold('a', { a: stubCollectionMetadata.sortOptions.options });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCollectionAppliedSortOption', () => {
    it('selects the applied sort option of the collection page', () => {
      const selector = store.pipe(select(selectors.selectCollectionAppliedSortOption));
      const expected = cold('a', { a: stubCollectionMetadata.appliedSortOption });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCollectionAppliedSortDirection', () => {
    it('selects the applied sort direction of the collection page', () => {
      const selector = store.pipe(select(selectors.selectCollectionAppliedSortDirection));
      const expected = cold('a', { a: stubCollectionMetadata.appliedSortDirection });
      expect(selector).toBeObservable(expected);
    });
  });
});
