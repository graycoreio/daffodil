import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';

import { CategoryReducerState } from './category-reducer-state.interface';
import { DaffCategoryLoad, DaffCategoryLoadSuccess, DaffCategoryLoadFailure } from '../../actions/category.actions';
import { categoryReducer } from './category.reducer';
import { DaffCategory } from '../../models/category';
import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';
import { DaffCategoryRequest } from '../../models/requests/category-request';

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
    loading: false,
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

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
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

  describe('when CategoryLoadSuccessAction is triggered', () => {

    let result: CategoryReducerState;
    let state: CategoryReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      const categoryLoadSuccess = new DaffCategoryLoadSuccess({ category: category, categoryPageConfigurationState: categoryPageConfigurationState, products: null });
      result = categoryReducer(state, categoryLoadSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
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
        loading: true,
        errors: new Array('firstError')
      }

      const categoryLoadFailure = new DaffCategoryLoadFailure(error);

      result = categoryReducer(state, categoryLoadFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(1);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors).toEqual([error]);
    });
  });
});
