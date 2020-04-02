import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffProductGridLoadSuccess, DaffProductUnion, daffProductReducers } from '@daffodil/product';
import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffCategoryLoadSuccess } from '../actions/category.actions';
import { 
  selectCategoryLoading, 
  selectCategoryErrors, 
  selectCategoryIds, 
  selectCategoryEntities, 
  selectAllCategories, 
  selectCategoryTotal, 
  selectCategoryPageConfigurationState,
  selectCategoryState, 
  selectSelectedCategoryId,
  selectSelectedCategory,
  selectCategoryPageProducts,
  selectCategoryCurrentPage,
  selectCategoryTotalPages,
  selectCategoryPageSize,
  selectCategoryFilters,
  selectCategorySortOptions,
	selectCategory,
	selectProductsByCategory,
	selectCategoryPageProductIds,
	selectCategoryPageTotalProducts,
	selectCategoryPageAppliedSortOption,
	selectCategoryPageAppliedSortDirection,
	selectTotalProductsByCategory,
	selectCategoryProductsLoading,
	selectCategoryPageFilterRequests,
	selectCategoryPageAppliedFilters,
	selectIsCategoryPageEmpty
} from './category.selector';
import { CategoryReducersState } from '../reducers/category-reducers.interface';
import { categoryReducers } from '../reducers/category-reducers';
import { DaffCategory } from '../models/category';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffCategoryFilterType } from '../models/category-filter-base';
import { DaffCategoryAppliedFilter } from '../models/category-applied-filter';
import { DaffCategoryLoad } from '@daffodil/category';
import { DaffCategoryFilterRequest } from '../models/requests/filter-request';

describe('DaffCategorySelectors', () => {

  let store: Store<CategoryReducersState<DaffCategory, DaffCategoryPageConfigurationState>>;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const categoryPageConfigurationFactory: DaffCategoryPageConfigurationStateFactory = new DaffCategoryPageConfigurationStateFactory();
  const productFactory: DaffProductFactory = new DaffProductFactory();
	let stubCategory: DaffCategory;
  const stubCategoryPageConfigurationState: DaffCategoryPageConfigurationState = categoryPageConfigurationFactory.create();
	let product: DaffProductUnion;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          category: combineReducers(categoryReducers()),
          product: combineReducers(daffProductReducers)
        })
      ]
    });
    
    stubCategory = categoryFactory.create();
    product = productFactory.create();
    stubCategoryPageConfigurationState.id = stubCategory.id;
		stubCategoryPageConfigurationState.product_ids = [product.id];
		stubCategory.product_ids = [product.id];
		stubCategoryPageConfigurationState.filters = [
			{
				name: 'name',
				type: DaffCategoryFilterType.Equal,
				label: 'label',
				options: [{
					label: 'option_label',
					value: 'value',
					count: 2
				}]
			},
			{
				name: 'name2',
				type: DaffCategoryFilterType.Equal,
				label: 'label2',
				options: [{
					label: 'option_label2',
					value: 'value2',
					count: 2
				}]
			}
		];
    store = TestBed.get(Store);

    store.dispatch(new DaffCategoryLoadSuccess({ category: stubCategory, categoryPageConfigurationState: stubCategoryPageConfigurationState, products: null }));
    store.dispatch(new DaffProductGridLoadSuccess([product]));
  });

  describe('selectCategoryState', () => {
    
    it('selects CategoryReducerState for category', () => {
      const expectedFeatureState = {
        categoryPageConfigurationState: stubCategoryPageConfigurationState,
        categoryLoading: false,
        productsLoading: false,
        errors: []
      }
      const selector = store.pipe(select(selectCategoryState()));
      const expected = cold('a', { a: expectedFeatureState });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageConfigurationState', () => {

    it('selects the category page configuration state', () => {
      const selector = store.pipe(select(selectCategoryPageConfigurationState()));
      const expected = cold('a', { a: stubCategoryPageConfigurationState });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryCurrentPage', () => {

    it('selects the current page of the current category', () => {
      const selector = store.pipe(select(selectCategoryCurrentPage()));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.current_page });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryTotalPages', () => {

    it('selects the total pages of products of the current category', () => {
      const selector = store.pipe(select(selectCategoryTotalPages()));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.total_pages });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageSize', () => {

    it('selects the page size of the current category', () => {
      const selector = store.pipe(select(selectCategoryPageSize()));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.page_size });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryFilters', () => {

    it('selects filters of the current category', () => {
      const selector = store.pipe(select(selectCategoryFilters()));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.filters });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageAppliedFilters', () => {

    it('sets applied filters to [] if the available filters is []', () => {
			stubCategory.product_ids = [product.id];
			stubCategoryPageConfigurationState.filters = [];
			store.dispatch(new DaffCategoryLoadSuccess({ category: stubCategory, categoryPageConfigurationState: stubCategoryPageConfigurationState, products: null }));
			const filterRequests: DaffCategoryFilterRequest[] = [
				{
					name: 'name',
					type: DaffCategoryFilterType.Equal,
					value: ['value']
				}
			];
			const expectedAppliedFilters: DaffCategoryAppliedFilter[] = [];
			store.dispatch(new DaffCategoryLoad({
				id: stubCategoryPageConfigurationState.id,
				filter_requests: filterRequests
			}));
      const selector = store.pipe(select(selectCategoryPageAppliedFilters()));
      const expected = cold('a', { a: expectedAppliedFilters });
      expect(selector).toBeObservable(expected);
    });

    it('selects the applied filters of the current category', () => {
			stubCategory.product_ids = [product.id];
			const filterRequests: DaffCategoryFilterRequest[] = [
				{
					name: 'name',
					type: DaffCategoryFilterType.Equal,
					value: ['value']
				}
			];
			const expectedAppliedFilters: DaffCategoryAppliedFilter[] = [{
				name: 'name',
				label: 'label',
				type: DaffCategoryFilterType.Equal,
				options: [{
					label: 'option_label',
					value: 'value'
				}]
			}]
			store.dispatch(new DaffCategoryLoad({
				id: stubCategoryPageConfigurationState.id,
				filter_requests: filterRequests
			}));
      const selector = store.pipe(select(selectCategoryPageAppliedFilters()));
      const expected = cold('a', { a: expectedAppliedFilters });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategorySortOptions', () => {

    it('selects the category sort options of the current category', () => {
      const selector = store.pipe(select(selectCategorySortOptions()));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.sort_options });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageProductIds', () => {

    it('selects the product_ids of the current category page', () => {
      const selector = store.pipe(select(selectCategoryPageProductIds()));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.product_ids });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectIsCategoryPageEmpty', () => {

    it('selects whether the current category page is empty of products', () => {
      const selector = store.pipe(select(selectIsCategoryPageEmpty()));
      const expected = cold('a', { a: !stubCategoryPageConfigurationState.product_ids.length });
      expect(selector).toBeObservable(expected);
    });
  });


  describe('selectCategoryPageTotalProducts', () => {

    it('selects the total number of products of the current category page', () => {
      const selector = store.pipe(select(selectCategoryPageTotalProducts()));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.total_products });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageFilterRequests', () => {

    it('selects the filter requests of the current category page', () => {
      const selector = store.pipe(select(selectCategoryPageFilterRequests()));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.filter_requests });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageAppliedSortOption', () => {

    it('selects the applied sort option of the current category page', () => {
      const selector = store.pipe(select(selectCategoryPageAppliedSortOption()));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.applied_sort_option });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageAppliedSortDirection', () => {

    it('selects the applied sort direction of the current category page', () => {
      const selector = store.pipe(select(selectCategoryPageAppliedSortDirection()));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.applied_sort_direction });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectSelectedCategoryId', () => {

    it('selects the id of the selected category', () => {
      const selector = store.pipe(select(selectSelectedCategoryId()));
      const expected = cold('a', { a: stubCategory.id });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryLoading', () => {

    it('selects the loading state of the category', () => {
      const selector = store.pipe(select(selectCategoryLoading()));
      const expected = cold('a', { a: false });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryProductsLoading', () => {

    it('selects the loading state of the category products', () => {
      const selector = store.pipe(select(selectCategoryProductsLoading()));
      const expected = cold('a', { a: false });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryErrors', () => {

    it('returns the selected category id', () => {
      const selector = store.pipe(select(selectCategoryErrors()));
      const expected = cold('a', { a: [] });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryIds', () => {

    it('returns all category ids', () => {
      const selector = store.pipe(select(selectCategoryIds()));
      const expected = cold('a', { a: [stubCategory.id] });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryEntities', () => {

    it('returns the categories as a dictionary object', () => {
      const expectedDictionary = new Object();
      expectedDictionary[stubCategory.id] = stubCategory;

      const selector = store.pipe(select(selectCategoryEntities()));
      const expected = cold('a', { a: expectedDictionary });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectAllCategories', () => {

    it('returns all categories as an array', () => {
      const selector = store.pipe(select(selectAllCategories()));
      const expected = cold('a', { a: [stubCategory] });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryTotal', () => {

    it('returns the total number of categories', () => {
      const selector = store.pipe(select(selectCategoryTotal()));
      const expected = cold('a', { a: 1 });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectSelectedCategory', () => {

    it('selects the selected category', () => {
      const selector = store.pipe(select(selectSelectedCategory()));
      const expected = cold('a', { a: stubCategory });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageProducts', () => {
		it('selects the products of the selected category', () => {
			const selector = store.pipe(select(selectCategoryPageProducts()));
			const expected = cold('a', { a: [product] });
			expect(selector).toBeObservable(expected);
		});

		it('selects the products in the right order', () => {
			const selector = store.pipe(select(selectCategoryPageProducts()));

			const productA = productFactory.create();
			const productB = productFactory.create();

			//Load a set of products
			stubCategory.product_ids = [productA.id, productB.id];
			stubCategoryPageConfigurationState.product_ids = [
				productA.id,
				productB.id,
			];
			const loadA = new DaffCategoryLoadSuccess({
				category: {
					...stubCategory,
				},
				categoryPageConfigurationState: {
					...stubCategoryPageConfigurationState,
				},
				products: [productA, productB],
			});
			const loadAProducts = new DaffProductGridLoadSuccess([
				productA,
				productB,
			]);
			store.dispatch(loadAProducts);
			store.dispatch(loadA);
			const expectedA = cold('a', { a: [productA, productB] });
			expect(selector).toBeObservable(expectedA);

			//Load the same products in a different order
			stubCategory.product_ids = [productB.id, productA.id];
			stubCategoryPageConfigurationState.product_ids = [
				productB.id,
				productA.id,
			];
			const loadB = new DaffCategoryLoadSuccess({
				category: {
					...stubCategory,
				},
				categoryPageConfigurationState: {
					...stubCategoryPageConfigurationState,
				},
				products: [productA, productB],
			});
			const loadBProducts = new DaffProductGridLoadSuccess([
				productA,
				productB,
			]);

			const expectedB = cold('b', { b: [productB, productA] });
			store.dispatch(loadBProducts);
			store.dispatch(loadB);
			expect(selector).toBeObservable(expectedB);
		});
	});

  describe('selectCategory', () => {

    it('selects the category by id', () => {
      const selector = store.pipe(select(selectCategory(), { id: stubCategory.id }));
      const expected = cold('a', { a: stubCategory });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectProductsByCategory', () => {

    it('selects products by category', () => {
      const selector = store.pipe(select(selectProductsByCategory(), { id: stubCategory.id }));
      const expected = cold('a', { a: [product] });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectTotalProductsByCategory', () => {

    it('selects products by category', () => {
      const selector = store.pipe(select(selectTotalProductsByCategory(), { id: stubCategory.id }));
      const expected = cold('a', { a: 1 });
      expect(selector).toBeObservable(expected);
    });
  });
});
