import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffCategory,
  DaffCategoryFilterType,
  DaffCategoryRequest,
  DaffCategoryFilter,
  DaffCategoryPageMetadata,
  daffCategoryFilterArrayToDict,
  daffCategoryFilterEqualOptionArrayToDict,
} from '@daffodil/category';
import {
  DaffCategoryReducersState,
  daffCategoryReducers,
  DaffCategoryPageLoadSuccess,
  DaffCategoryPageLoad,
  DAFF_CATEGORY_STORE_FEATURE_KEY,
  DaffCategoryPageChangePageSize,
} from '@daffodil/category/state';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
  DaffCategoryFilterFactory,
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterEqualOptionFactory,
} from '@daffodil/category/testing';
import { Dict } from '@daffodil/core';
import { DaffState } from '@daffodil/core/state';

import { DaffCategoryReducerState } from '../../reducers/public_api';
import { getDaffCategoryPageSelectors } from './category-page.selector';

describe('DaffCategoryPageSelectors', () => {

  let store: Store<DaffCategoryReducersState<DaffCategory>>;
  let categoryFactory: DaffCategoryFactory;
  let categoryFilterFactory: DaffCategoryFilterFactory;
  let categoryFilterEqualFactory: DaffCategoryFilterEqualFactory;
  let categoryFilterEqualOptionFactory: DaffCategoryFilterEqualOptionFactory;

  let categoryPageMetadataFactory: DaffCategoryPageMetadataFactory;
  let stubCategory: DaffCategory;
  let stubCategoryPageMetadata: DaffCategoryPageMetadata;
  const categorySelectors = getDaffCategoryPageSelectors<DaffCategory>();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CATEGORY_STORE_FEATURE_KEY]: combineReducers(daffCategoryReducers),
        }),
      ],
    });
    categoryFactory = TestBed.inject(DaffCategoryFactory);
    categoryPageMetadataFactory = TestBed.inject(DaffCategoryPageMetadataFactory);
    categoryFilterFactory = TestBed.inject(DaffCategoryFilterFactory);
    categoryFilterEqualFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
    categoryFilterEqualOptionFactory = TestBed.inject(DaffCategoryFilterEqualOptionFactory);


    stubCategory = categoryFactory.create();
    stubCategoryPageMetadata = categoryPageMetadataFactory.create();
    stubCategoryPageMetadata.id = stubCategory.id;

    store = TestBed.inject(Store);
    store.dispatch(new DaffCategoryPageLoadSuccess({ category: stubCategory, categoryPageMetadata: stubCategoryPageMetadata, products: null }));
  });

  describe('selectCategoryState', () => {

    it('selects CategoryReducerState for category', () => {
      const expectedFeatureState: DaffCategoryReducerState = {
        categoryPageMetadata: stubCategoryPageMetadata,
        daffState: DaffState.Stable,
        categoryLoading: false,
        productsLoading: false,
        errors: [],
      };
      const selector = store.pipe(select(categorySelectors.selectCategoryState));
      const expected = cold('a', { a: expectedFeatureState });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageMetadata', () => {

    it('selects the category page metadata', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageMetadata));
      const expected = cold('a', { a: stubCategoryPageMetadata });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryCurrentPage', () => {

    it('selects the current page of the current category', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryCurrentPage));
      const expected = cold('a', { a: stubCategoryPageMetadata.current_page });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryTotalPages', () => {

    it('selects the total pages of products of the current category', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryTotalPages));
      const expected = cold('a', { a: stubCategoryPageMetadata.total_pages });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageSize', () => {

    it('selects the page size of the current category', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageSize));
      const expected = cold('a', { a: stubCategoryPageMetadata.page_size });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryFilters', () => {

    it('selects filters of the current category', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryFilters));
      const expected = cold('a', { a: stubCategoryPageMetadata.filters });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageAppliedFilters', () => {

    it('sets applied filters to {} if there are no applied filters', () => {
      const expectedAppliedFilters: Dict<DaffCategoryFilter> = {};

      store.dispatch(new DaffCategoryPageLoadSuccess({
        products: [],
        category: {
          id: stubCategoryPageMetadata.id,
          name: 'test',
        },
        categoryPageMetadata: {
          ...stubCategoryPageMetadata,
          filters: {
            name: {
              name: 'name',
              type: DaffCategoryFilterType.Equal,
              label: 'labelRDaffCategoryFilterRequest',
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
              type: DaffCategoryFilterType.Equal,
              label: 'label2RDaffCategoryFilterRequest',
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
      }));

      const selector = store.pipe(select(categorySelectors.selectCategoryPageAppliedFilters));
      const expected = cold('a', { a: expectedAppliedFilters });
      expect(selector).toBeObservable(expected);
    });

    it('selects the applied filters of the current category', () => {
      const filters = categoryFilterFactory.createMany(5);
      const filterEqual = categoryFilterEqualFactory.create({
        options: daffCategoryFilterEqualOptionArrayToDict(categoryFilterEqualOptionFactory.createMany(2, {
          applied: true,
        })),
      });
      const filterDict = daffCategoryFilterArrayToDict([
        ...filters,
        filterEqual,
      ]);

      const expectedAppliedFilters: Dict<DaffCategoryFilter> = daffCategoryFilterArrayToDict([filterEqual]);

      store.dispatch(new DaffCategoryPageLoadSuccess({ products: [],
        category: {
          id: stubCategoryPageMetadata.id,
          name: 'test',
        },
        categoryPageMetadata: {
          ...stubCategoryPageMetadata,
          filters: filterDict,
        }}));

      const selector = store.pipe(select(categorySelectors.selectCategoryPageAppliedFilters));
      const expected = cold('a', { a: expectedAppliedFilters });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategorySortOptions', () => {

    it('selects the category sort options of the current category', () => {
      const selector = store.pipe(select(categorySelectors.selectCategorySortOptions));
      const expected = cold('a', { a: stubCategoryPageMetadata.sort_options.options });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageProductIds', () => {

    it('selects the product_ids of the current category page', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageProductIds));
      const expected = cold('a', { a: stubCategoryPageMetadata.product_ids });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectIsCategoryPageEmpty', () => {

    it('selects whether the current category page is empty of products', () => {
      const selector = store.pipe(select(categorySelectors.selectIsCategoryPageEmpty));
      const expected = cold('a', { a: !stubCategoryPageMetadata.product_ids.length });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageTotalProducts', () => {

    it('selects the total number of products of the current category page', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageTotalProducts));
      const expected = cold('a', { a: stubCategoryPageMetadata.total_products });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageAppliedSortOption', () => {

    it('selects the applied sort option of the current category page', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageAppliedSortOption));
      const expected = cold('a', { a: stubCategoryPageMetadata.applied_sort_option });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageAppliedSortDirection', () => {

    it('selects the applied sort direction of the current category page', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageAppliedSortDirection));
      const expected = cold('a', { a: stubCategoryPageMetadata.applied_sort_direction });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageState', () => {

    it('selects the daffState of the current category page', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageState));
      const expected = cold('a', { a: DaffState.Stable });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectSelectedCategoryId', () => {

    it('selects the id of the selected category', () => {
      const selector = store.pipe(select(categorySelectors.selectSelectedCategoryId));
      const expected = cold('a', { a: stubCategory.id });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryLoading', () => {

    it('selects the loading state of the category', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryLoading));
      const expected = cold('a', { a: false });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryProductsLoading', () => {

    it('selects the loading state of the category products', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryProductsLoading));
      const expected = cold('a', { a: false });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryErrors', () => {

    it('returns the selected category id', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryErrors));
      const expected = cold('a', { a: []});
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectIsCategoryPageMutating', () => {
    describe('when the category page is mutating', () => {
      beforeEach(() => {
        store.dispatch(new DaffCategoryPageChangePageSize(10));
      });

      it('returns true', () => {
        const selector = store.pipe(select(categorySelectors.selectIsCategoryPageMutating));
        const expected = cold('a', { a: true });
        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the category page is not mutating', () => {
      it('returns false', () => {
        const selector = store.pipe(select(categorySelectors.selectIsCategoryPageMutating));
        const expected = cold('a', { a: false });
        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectIsCategoryPageResolving', () => {
    describe('when the category page is resolving', () => {
      beforeEach(() => {
        store.dispatch(new DaffCategoryPageLoad(<DaffCategoryRequest>{}));
      });

      it('returns true', () => {
        const selector = store.pipe(select(categorySelectors.selectIsCategoryPageResolving));
        const expected = cold('a', { a: true });
        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the category page is not resolving', () => {
      it('returns false', () => {
        const selector = store.pipe(select(categorySelectors.selectIsCategoryPageResolving));
        const expected = cold('a', { a: false });
        expect(selector).toBeObservable(expected);
      });
    });
  });
});
