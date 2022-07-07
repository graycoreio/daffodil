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
  DaffCategoryPageMetadata,
  DaffCategoryIdRequest,
} from '@daffodil/category';
import {
  DaffCategoryStateRootSlice,
  daffCategoryReducers,
  DaffCategoryPageLoadSuccess,
  DaffCategoryPageLoad,
  DAFF_CATEGORY_STORE_FEATURE_KEY,
  DaffCategoryPageChangePageSize,
} from '@daffodil/category/state';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';
import { DaffState } from '@daffodil/core/state';
import {
  DaffProductFilter,
  DaffProductFilterType,
  daffProductFilterEqualOptionArrayToDict,
  daffProductFilterArrayToDict,
} from '@daffodil/product';
import {
  DaffProductFilterFactory,
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
} from '@daffodil/product/testing';

import { DaffCategoryReducerState } from '../../reducers/public_api';
import { getDaffCategoryPageSelectors } from './category-page.selector';

describe('DaffCategoryPageSelectors', () => {

  let store: Store<DaffCategoryStateRootSlice>;
  let categoryFactory: DaffCategoryFactory;
  let categoryFilterFactory: DaffProductFilterFactory;
  let categoryFilterEqualFactory: DaffProductFilterEqualFactory;
  let categoryFilterEqualOptionFactory: DaffProductFilterEqualOptionFactory;

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
    categoryFilterFactory = TestBed.inject(DaffProductFilterFactory);
    categoryFilterEqualFactory = TestBed.inject(DaffProductFilterEqualFactory);
    categoryFilterEqualOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);

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
      const expected = cold('a', { a: jasmine.objectContaining(expectedFeatureState) });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageMetadata', () => {

    it('selects the category page metadata', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageMetadata));
      const expected = cold('a', { a: jasmine.objectContaining(<DaffCategoryPageMetadata>{
        appliedSortOption: stubCategoryPageMetadata.appliedSortOption,
        appliedSortDirection: stubCategoryPageMetadata.appliedSortDirection,
        currentPage: stubCategoryPageMetadata.currentPage,
        count: stubCategoryPageMetadata.count,
        id: stubCategoryPageMetadata.id,
        ids: stubCategoryPageMetadata.ids,
        filters: stubCategoryPageMetadata.filters,
        totalPages: stubCategoryPageMetadata.totalPages,
        pageSize: stubCategoryPageMetadata.pageSize,
      }) });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryCurrentPage', () => {

    it('selects the current page of the current category', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryCurrentPage));
      const expected = cold('a', { a: stubCategoryPageMetadata.currentPage });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryTotalPages', () => {

    it('selects the total pages of products of the current category', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryTotalPages));
      const expected = cold('a', { a: stubCategoryPageMetadata.totalPages });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageSize', () => {

    it('selects the page size of the current category', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageSize));
      const expected = cold('a', { a: stubCategoryPageMetadata.pageSize });
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
      const expectedAppliedFilters: Record<DaffProductFilter['name'], DaffProductFilter> = {};

      store.dispatch(new DaffCategoryPageLoadSuccess({
        products: [],
        category: {
          id: stubCategoryPageMetadata.id,
          url: 'test',
          name: 'test',
        },
        categoryPageMetadata: {
          ...stubCategoryPageMetadata,
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
      }));

      const selector = store.pipe(select(categorySelectors.selectCategoryPageAppliedFilters));
      const expected = cold('a', { a: expectedAppliedFilters });
      expect(selector).toBeObservable(expected);
    });

    it('selects the applied filters of the current category', () => {
      const filters = categoryFilterFactory.createMany(5);
      const filterEqual = categoryFilterEqualFactory.create({
        options: daffProductFilterEqualOptionArrayToDict(categoryFilterEqualOptionFactory.createMany(2, {
          applied: true,
        })),
      });
      const filterDict = daffProductFilterArrayToDict([
        ...filters,
        filterEqual,
      ]);

      const expectedAppliedFilters: Record<DaffProductFilter['name'], DaffProductFilter> = daffProductFilterArrayToDict([filterEqual]);

      store.dispatch(new DaffCategoryPageLoadSuccess({ products: [],
        category: {
          id: stubCategoryPageMetadata.id,
          url: 'test',
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
      const expected = cold('a', { a: stubCategoryPageMetadata.sortOptions.options });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageProductIds', () => {

    it('selects the product_ids of the current category page', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageProductIds));
      const expected = cold('a', { a: stubCategoryPageMetadata.ids });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectIsCategoryPageEmpty', () => {

    it('selects whether the current category page is empty of products', () => {
      const selector = store.pipe(select(categorySelectors.selectIsCategoryPageEmpty));
      const expected = cold('a', { a: !stubCategoryPageMetadata.ids.length });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageTotalProducts', () => {

    it('selects the total number of products of the current category page', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageTotalProducts));
      const expected = cold('a', { a: stubCategoryPageMetadata.count });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageAppliedSortOption', () => {

    it('selects the applied sort option of the current category page', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageAppliedSortOption));
      const expected = cold('a', { a: stubCategoryPageMetadata.appliedSortOption });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageAppliedSortDirection', () => {

    it('selects the applied sort direction of the current category page', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageAppliedSortDirection));
      const expected = cold('a', { a: stubCategoryPageMetadata.appliedSortDirection });
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

  describe('selectCurrentCategoryId', () => {

    it('selects the id of the current category', () => {
      const selector = store.pipe(select(categorySelectors.selectCurrentCategoryId));
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

    it('returns errors associated with loading the category page', () => {
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
        store.dispatch(new DaffCategoryPageLoad(<DaffCategoryIdRequest>{}));
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
