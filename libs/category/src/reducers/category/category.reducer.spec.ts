import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';

import { CategoryReducerState } from './category-reducer-state.interface';
import { DaffCategoryLoad, DaffCategoryLoadSuccess, DaffCategoryLoadFailure, DaffChangeCategoryPageSize, DaffChangeCategoryCurrentPage, DaffChangeCategorySortingOption, DaffChangeCategoryFilters, DaffToggleCategoryFilter } from '../../actions/category.actions';
import { categoryReducer } from './category.reducer';
import { DaffCategory } from '../../models/category';
import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';
import { DaffCategoryRequest, DaffSortDirectionEnum } from '../../models/requests/category-request';
import { DaffCategoryFilterActionEnum, DaffCategoryFilterAction } from '../../models/requests/filter-action';

describe('Category | Category Reducer', () => {

  let categoryFactory: DaffCategoryFactory;
  let categoryPageConfigurationStateFactory: DaffCategoryPageConfigurationStateFactory
  let category: DaffCategory;
  let categoryPageConfigurationState: DaffCategoryPageConfigurationState;
  let categoryId: string;
  const initialState: CategoryReducerState = {
    categoryPageConfigurationState: {
      id: null,
      applied_filters: [],
      applied_sort_option: null,
      applied_sort_direction: null,
      current_page: null,
      page_size: null,
      total_pages: null,
      filters: [],
			sort_options: [],
			total_products: null,
			product_ids: []
    },
		categoryLoading: false,
		productsLoading: false,
    errors: []
  };

  beforeEach(() => {
    categoryFactory = new DaffCategoryFactory();
    categoryPageConfigurationStateFactory = new DaffCategoryPageConfigurationStateFactory();

    category = categoryFactory.create();
		categoryPageConfigurationState = categoryPageConfigurationStateFactory.create();
    categoryId = category.id;
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = categoryReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CategoryLoadAction is triggered', () => {
    let result;
    let categoryRequest: DaffCategoryRequest;

    beforeEach(() => {
      categoryRequest = {
        id: categoryId,
        page_size: categoryPageConfigurationState.page_size,
        applied_filters: categoryPageConfigurationState.applied_filters,
        applied_sort_option: categoryPageConfigurationState.applied_sort_option,
        applied_sort_direction: categoryPageConfigurationState.applied_sort_direction,
        current_page: categoryPageConfigurationState.current_page
      }
      const categoryLoadAction: DaffCategoryLoad = new DaffCategoryLoad(categoryRequest);

      result = categoryReducer(initialState, categoryLoadAction);
    });

    it('sets categoryLoading state to true', () => {
      expect(result.categoryLoading).toEqual(true);
    });

    it('sets productsLoading state to true', () => {
      expect(result.productsLoading).toEqual(true);
    });

    it('sets the included parameters on categoryPageConfigurationState', () => {
      expect(result.categoryPageConfigurationState.id).toEqual(categoryRequest.id);
      expect(result.categoryPageConfigurationState.page_size).toEqual(categoryRequest.page_size);
      expect(result.categoryPageConfigurationState.current_page).toEqual(categoryRequest.current_page);
      expect(result.categoryPageConfigurationState.applied_filters).toEqual(categoryRequest.applied_filters);
      expect(result.categoryPageConfigurationState.applied_sort_direction).toEqual(categoryRequest.applied_sort_direction);
      expect(result.categoryPageConfigurationState.applied_sort_option).toEqual(categoryRequest.applied_sort_option);
		});
		
		it('should set applied filters to an empty array if the user passes null', () => {
			categoryRequest = {
        id: categoryId,
        page_size: categoryPageConfigurationState.page_size,
        applied_filters: null,
        applied_sort_option: categoryPageConfigurationState.applied_sort_option,
        applied_sort_direction: categoryPageConfigurationState.applied_sort_direction,
        current_page: categoryPageConfigurationState.current_page
      }
      const categoryLoadAction: DaffCategoryLoad = new DaffCategoryLoad(categoryRequest);

      result = categoryReducer(initialState, categoryLoadAction);
      expect(result.categoryPageConfigurationState.applied_filters).toEqual([]);
		});
  });

  describe('when ChangeCategoryPageSizeAction is triggered', () => {
    let result;

    beforeEach(() => {
      const changeCategoryPageSize: DaffChangeCategoryPageSize = new DaffChangeCategoryPageSize(3);

      result = categoryReducer(initialState, changeCategoryPageSize);
    });

    it('does not change the categoryLoading state', () => {
      expect(result.categoryLoading).toEqual(false);
    });

    it('sets productsLoading state to true', () => {
      expect(result.productsLoading).toEqual(true);
		});
		
		it('should set the categoryPageConfigurationState page size', () => {
			expect(result.categoryPageConfigurationState.page_size).toEqual(3);
		});
  });

  describe('when ChangeCategoryCurrentPageAction is triggered', () => {
    let result;

    beforeEach(() => {
      const changeCategoryCurrentPage: DaffChangeCategoryCurrentPage = new DaffChangeCategoryCurrentPage(3);

      result = categoryReducer(initialState, changeCategoryCurrentPage);
    });

    it('does not change the categoryLoading state', () => {
      expect(result.categoryLoading).toEqual(false);
    });

    it('sets productsLoading state to true', () => {
      expect(result.productsLoading).toEqual(true);
		});
		
		it('should set the categoryPageConfigurationState current page', () => {
			expect(result.categoryPageConfigurationState.current_page).toEqual(3);
		});
  });

  describe('when ChangeCategorySortingOptionAction is triggered', () => {
    let result;

    beforeEach(() => {
      const changeCategorySortingOption: DaffChangeCategorySortingOption = new DaffChangeCategorySortingOption({
				option: 'option',
				direction: DaffSortDirectionEnum.Ascending
			});

      result = categoryReducer(initialState, changeCategorySortingOption);
    });

    it('does not change the categoryLoading state', () => {
      expect(result.categoryLoading).toEqual(false);
    });

    it('sets productsLoading state to true', () => {
      expect(result.productsLoading).toEqual(true);
		});
		
		it('should set the categoryPageConfigurationState applied sort option', () => {
			expect(result.categoryPageConfigurationState.applied_sort_option).toEqual('option');
		});
		
		it('should set the categoryPageConfigurationState applied sort direction', () => {
			expect(result.categoryPageConfigurationState.applied_sort_direction).toEqual(DaffSortDirectionEnum.Ascending);
		});
  });

  describe('when ChangeCategoryFiltersAction is triggered', () => {
    let result;
		let expectedFilters: DaffCategoryFilterAction[];

    beforeEach(() => {
			expectedFilters = [{
				action: DaffCategoryFilterActionEnum.Equal,
				name: 'name',
				value: 'value'
			}];
      const changeCategoryFilters: DaffChangeCategoryFilters = new DaffChangeCategoryFilters(expectedFilters);

      result = categoryReducer(initialState, changeCategoryFilters);
    });

    it('does not change the categoryLoading state', () => {
      expect(result.categoryLoading).toEqual(false);
    });

    it('sets productsLoading state to true', () => {
      expect(result.productsLoading).toEqual(true);
		});
		
		it('should set the categoryPageConfigurationState applied filters', () => {
			expect(result.categoryPageConfigurationState.applied_filters).toEqual(expectedFilters);
		});
  });

  describe('when CategoryLoadSuccessAction is triggered', () => {

    let result: CategoryReducerState;
    let state: CategoryReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        categoryLoading: true,
        productsLoading: true,
      }

      const categoryLoadSuccess = new DaffCategoryLoadSuccess({ category: category, categoryPageConfigurationState: categoryPageConfigurationState, products: null });
      result = categoryReducer(state, categoryLoadSuccess);
    });

    it('sets categoryLoading to false', () => {
      expect(result.categoryLoading).toEqual(false);
    });

    it('sets productsLoading to false', () => {
      expect(result.productsLoading).toEqual(false);
    });

    it('sets categoryPageConfigurationState from the payload', () => {
      expect(result.categoryPageConfigurationState).toEqual(categoryPageConfigurationState);
    });
  });

  describe('when CategoryLoadFailureAction is triggered', () => {

    const error = 'error message';
    let result;
    let state: CategoryReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        categoryLoading: true,
        productsLoading: true,
        errors: new Array('firstError')
      }

      const categoryLoadFailure = new DaffCategoryLoadFailure(error);

      result = categoryReducer(state, categoryLoadFailure);
    });

    it('sets categoryLoading to false', () => {
      expect(result.categoryLoading).toEqual(false);
    });

    it('sets productsLoading to false', () => {
      expect(result.productsLoading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(1);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors).toEqual([error]);
    });
  });
});
