import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';

import { DaffCategoryReducersState } from '../../reducers/category-reducers.interface';
import { DaffCategoryRequest } from '../../models/requests/category-request';
import { DaffCategory } from '../../models/category';
import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';
import { getDaffCategoryPageSelectors } from './category-page.selector';
import { daffCategoryReducers } from '../../reducers/category-reducers';
import { DaffCategoryFilterType } from '../../models/category-filter-base';
import { DaffCategoryLoadSuccess, DaffCategoryLoad } from '../../actions/category.actions';
import { DaffCategoryFilterRequest } from '../../models/requests/filter-request';
import { DaffCategoryAppliedFilter } from '../../models/category-applied-filter';

describe('DaffCategoryPageSelectors', () => {

  let store: Store<DaffCategoryReducersState<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState<DaffCategoryRequest>>>;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const categoryPageConfigurationFactory: DaffCategoryPageConfigurationStateFactory = new DaffCategoryPageConfigurationStateFactory();
	let stubCategory: DaffCategory;
  const stubCategoryPageConfigurationState: DaffCategoryPageConfigurationState<DaffCategoryRequest> = categoryPageConfigurationFactory.create();
	const categorySelectors = getDaffCategoryPageSelectors<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState<DaffCategoryRequest>>();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          category: combineReducers(daffCategoryReducers)
        })
      ]
    });
    
    stubCategory = categoryFactory.create();
    stubCategoryPageConfigurationState.id = stubCategory.id;
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
  });

  describe('selectCategoryState', () => {
    
    it('selects CategoryReducerState for category', () => {
      const expectedFeatureState = {
        categoryPageConfigurationState: stubCategoryPageConfigurationState,
        categoryLoading: false,
        productsLoading: false,
        errors: []
      }
      const selector = store.pipe(select(categorySelectors.selectCategoryState));
      const expected = cold('a', { a: expectedFeatureState });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageConfigurationState', () => {

    it('selects the category page configuration state', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageConfigurationState));
      const expected = cold('a', { a: stubCategoryPageConfigurationState });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryCurrentPage', () => {

    it('selects the current page of the current category', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryCurrentPage));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.current_page });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryTotalPages', () => {

    it('selects the total pages of products of the current category', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryTotalPages));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.total_pages });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageSize', () => {

    it('selects the page size of the current category', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageSize));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.page_size });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryFilters', () => {

    it('selects filters of the current category', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryFilters));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.filters });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageAppliedFilters', () => {

    it('sets applied filters to [] if the available filters is []', () => {
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
      const selector = store.pipe(select(categorySelectors.selectCategoryPageAppliedFilters));
      const expected = cold('a', { a: expectedAppliedFilters });
      expect(selector).toBeObservable(expected);
    });

    it('selects the applied filters of the current category', () => {
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
      const selector = store.pipe(select(categorySelectors.selectCategoryPageAppliedFilters));
      const expected = cold('a', { a: expectedAppliedFilters });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategorySortOptions', () => {

    it('selects the category sort options of the current category', () => {
      const selector = store.pipe(select(categorySelectors.selectCategorySortOptions));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.sort_options });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageProductIds', () => {

    it('selects the product_ids of the current category page', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageProductIds));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.product_ids });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectIsCategoryPageEmpty', () => {

    it('selects whether the current category page is empty of products', () => {
      const selector = store.pipe(select(categorySelectors.selectIsCategoryPageEmpty));
      const expected = cold('a', { a: !stubCategoryPageConfigurationState.product_ids.length });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageTotalProducts', () => {

    it('selects the total number of products of the current category page', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageTotalProducts));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.total_products });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageFilterRequests', () => {

    it('selects the filter requests of the current category page', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageFilterRequests));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.filter_requests });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageAppliedSortOption', () => {

    it('selects the applied sort option of the current category page', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageAppliedSortOption));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.applied_sort_option });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageAppliedSortDirection', () => {

    it('selects the applied sort direction of the current category page', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageAppliedSortDirection));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.applied_sort_direction });
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
      const expected = cold('a', { a: [] });
      expect(selector).toBeObservable(expected);
    });
  });
});
