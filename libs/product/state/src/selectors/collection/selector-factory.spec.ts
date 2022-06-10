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

import { Dict } from '@daffodil/core';
import {
  DaffProductFilter,
  DaffProductFilterType,
  daffProductFilterEqualOptionArrayToDict,
  daffProductFilterArrayToDict,
  DaffProductCollectionMetadata,
  daffProductFiltersToRequests,
} from '@daffodil/product';
import {
  daffProductCollectionReducerInitialState,
  DaffProductCollectionReducerState,
} from '@daffodil/product/state';
import {
  DaffProductFilterFactory,
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
  DaffProductCollectionMetadataFactory,
} from '@daffodil/product/testing';

import { daffProductCollectionSelectorFactory } from './selector-factory';

interface State {
  test: DaffProductCollectionReducerState;
}

const featureSelector = createFeatureSelector<DaffProductCollectionReducerState>('test');

describe('@daffodil/product/state | daffProductCollectionSelectorFactory', () => {

  let store: MockStore<State>;
  let productFilterFactory: DaffProductFilterFactory;
  let productFilterEqualFactory: DaffProductFilterEqualFactory;
  let productFilterEqualOptionFactory: DaffProductFilterEqualOptionFactory;
  let productCollectionMetadataFactory: DaffProductCollectionMetadataFactory;

  let stubProductCollectionMetadata: DaffProductCollectionMetadata;
  const selectors = daffProductCollectionSelectorFactory(featureSelector);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ...provideMockStore<State>({
          initialState: {
            test: daffProductCollectionReducerInitialState,
          },
        }),
      ],
    });

    store = TestBed.inject(MockStore);
    productCollectionMetadataFactory = TestBed.inject(DaffProductCollectionMetadataFactory);
    productFilterFactory = TestBed.inject(DaffProductFilterFactory);
    productFilterEqualFactory = TestBed.inject(DaffProductFilterEqualFactory);
    productFilterEqualOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);

    stubProductCollectionMetadata = productCollectionMetadataFactory.create();

    store.setState({
      test: stubProductCollectionMetadata,
    });
  });

  describe('selectProductCollectionMetadata', () => {
    it('selects the product collection metadata', () => {
      const selector = store.pipe(select(selectors.selectProductCollectionMetadata));
      const expected = cold('a', { a: stubProductCollectionMetadata });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectProductCollectionRequest', () => {
    it('builds a product collection request', () => {
      const selector = store.pipe(select(selectors.selectProductCollectionRequest));
      const expected = cold('a', { a: {
        filter_requests: daffProductFiltersToRequests(stubProductCollectionMetadata.filters),
        applied_sort_option: stubProductCollectionMetadata.applied_sort_option,
        applied_sort_direction: stubProductCollectionMetadata.applied_sort_direction,
        current_page: stubProductCollectionMetadata.current_page,
        page_size: stubProductCollectionMetadata.page_size,
      }});
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectProductCollectionTotalProducts', () => {
    it('selects the current page of the product collection', () => {
      const selector = store.pipe(select(selectors.selectProductCollectionTotalProducts));
      const expected = cold('a', { a: stubProductCollectionMetadata.total_products });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectProductCollectionCurrentPage', () => {
    it('selects the current page of the product collection', () => {
      const selector = store.pipe(select(selectors.selectProductCollectionCurrentPage));
      const expected = cold('a', { a: stubProductCollectionMetadata.current_page });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectProductCollectionTotalPages', () => {
    it('selects the total pages of products of the product collection', () => {
      const selector = store.pipe(select(selectors.selectProductCollectionTotalPages));
      const expected = cold('a', { a: stubProductCollectionMetadata.total_pages });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectProductCollectionSize', () => {
    it('selects the page size of the product collection', () => {
      const selector = store.pipe(select(selectors.selectProductCollectionSize));
      const expected = cold('a', { a: stubProductCollectionMetadata.page_size });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectProductCollectionFilters', () => {
    it('selects filters of the product collection', () => {
      const selector = store.pipe(select(selectors.selectProductCollectionFilters));
      const expected = cold('a', { a: stubProductCollectionMetadata.filters });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectProductCollectionAppliedFilters', () => {
    it('sets applied filters to {} if there are no applied filters', () => {
      const expectedAppliedFilters: Dict<DaffProductFilter> = {};

      store.setState({
        test: {
          ...stubProductCollectionMetadata,
          filters: {
            name: {
              name: 'name',
              type: DaffProductFilterType.Equal,
              label: 'labelRDaffProductFilterRequest',
              options: {
                value: {
                  applied: false,
                  label: 'option_label',
                  value: 'value',
                  count: 2,
                },
              },
            },
            name2: {
              name: 'name2',
              type: DaffProductFilterType.Equal,
              label: 'label2RDaffProductFilterRequest',
              options: {
                value2: {
                  applied: false,
                  label: 'option_label2',
                  value: 'value2',
                  count: 2,
                },
              },
            },
          },
        },
      });

      const selector = store.pipe(select(selectors.selectProductCollectionAppliedFilters));
      const expected = cold('a', { a: expectedAppliedFilters });
      expect(selector).toBeObservable(expected);
    });

    it('selects the applied filters of the product collection', () => {
      const filters = productFilterFactory.createMany(5);
      const filterEqual = productFilterEqualFactory.create({
        options: daffProductFilterEqualOptionArrayToDict(productFilterEqualOptionFactory.createMany(2, {
          applied: true,
        })),
      });
      const filterDict = daffProductFilterArrayToDict([
        ...filters,
        filterEqual,
      ]);

      const expectedAppliedFilters: Dict<DaffProductFilter> = daffProductFilterArrayToDict([filterEqual]);

      store.setState({
        test: {
          ...stubProductCollectionMetadata,
          filters: filterDict,
        },
      });

      const selector = store.pipe(select(selectors.selectProductCollectionAppliedFilters));
      const expected = cold('a', { a: expectedAppliedFilters });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectProductCollectionSortOptions', () => {
    it('selects the sort options of the product collection', () => {
      const selector = store.pipe(select(selectors.selectProductCollectionSortOptions));
      const expected = cold('a', { a: stubProductCollectionMetadata.sort_options.options });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectProductCollectionAppliedSortOption', () => {
    it('selects the applied sort option of the product collection page', () => {
      const selector = store.pipe(select(selectors.selectProductCollectionAppliedSortOption));
      const expected = cold('a', { a: stubProductCollectionMetadata.applied_sort_option });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectProductCollectionAppliedSortDirection', () => {
    it('selects the applied sort direction of the product collection page', () => {
      const selector = store.pipe(select(selectors.selectProductCollectionAppliedSortDirection));
      const expected = cold('a', { a: stubProductCollectionMetadata.applied_sort_direction });
      expect(selector).toBeObservable(expected);
    });
  });
});
