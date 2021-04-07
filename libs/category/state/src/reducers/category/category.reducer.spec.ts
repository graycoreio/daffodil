import { TestBed } from '@angular/core/testing';

import {
  DaffCategory,
  DaffCategoryRequest,
  DaffCategoryFilterRequest,
  DaffToggleCategoryFilterRequest,
  DaffCategoryPageMetadata,
  daffCategoryFiltersToRequests,
} from '@daffodil/category';
import {
  DaffCategoryReducerState,
  DaffCategoryPageChangePageSize,
  DaffCategoryPageChangeCurrentPage,
  DaffCategoryPageChangeSortingOption,
  DaffCategoryPageToggleFilter,
  DaffCategoryPageChangeFilters,
  DaffCategoryPageLoad,
  DaffCategoryPageLoadSuccess,
  DaffCategoryPageLoadFailure,
  DaffCategoryPageReplaceFilters,
  DaffCategoryPageApplyFilters,
  DaffCategoryPageClearFilters,
  DaffCategoryPageRemoveFilters,
} from '@daffodil/category/state';
import {
  DaffCategoryFactory,
  DaffCategoryFilterRequestFactory,
  DaffCategoryPageMetadataFactory,
  DaffCategoryFilterToggleRequestFactory,
} from '@daffodil/category/testing';
import {
  DaffSortDirectionEnum,
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';

import { daffCategoryReducer } from './category.reducer';

describe('Category | Category Reducer', () => {

  let categoryFactory: DaffCategoryFactory;
  let categoryPageMetadataFactory: DaffCategoryPageMetadataFactory;
  let filterRequestFactory: DaffCategoryFilterRequestFactory;
  let filterToggleRequestFactory: DaffCategoryFilterToggleRequestFactory;

  let initialState: DaffCategoryReducerState;
  let categoryPageMetadata: DaffCategoryPageMetadata;
  let category: DaffCategory;
  let filterRequest: DaffCategoryFilterRequest;
  let filterToggleRequest: DaffToggleCategoryFilterRequest;
  let categoryId: string;

  beforeEach(() => {
    categoryFactory = TestBed.inject(DaffCategoryFactory);
    categoryPageMetadataFactory = TestBed.inject(DaffCategoryPageMetadataFactory);
    filterRequestFactory = TestBed.inject(DaffCategoryFilterRequestFactory);
    filterToggleRequestFactory = TestBed.inject(DaffCategoryFilterToggleRequestFactory);

    category = categoryFactory.create();
    categoryPageMetadata = categoryPageMetadataFactory.create();
    categoryId = category.id;

    initialState = {
      categoryPageMetadata: {
        id: null,
        applied_sort_option: null,
        applied_sort_direction: null,
        current_page: null,
        page_size: null,
        total_pages: null,
        filters: {},
        sort_options: {
          default: null,
          options: [],
        },
        total_products: null,
        product_ids: [],
      },
      daffState: DaffState.Stable,
      categoryLoading: false,
      productsLoading: false,
      errors: [],
    };
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = <any>{};

      const result = daffCategoryReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when ChangeCategoryPageSizeAction is triggered', () => {
    let result;

    beforeEach(() => {
      const changeCategoryPageSize: DaffCategoryPageChangePageSize = new DaffCategoryPageChangePageSize(3);

      result = daffCategoryReducer(initialState, changeCategoryPageSize);
    });

    it('does not change the categoryLoading state', () => {
      expect(result.categoryLoading).toEqual(initialState.categoryLoading);
    });

    it('sets productsLoading state to true', () => {
      expect(result.productsLoading).toBeTrue();
    });

    it('should set the categoryPageMetadata page size', () => {
      expect(result.categoryPageMetadata.page_size).toEqual(3);
    });

    it('sets daffState to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Mutating);
    });
  });

  describe('when ChangeCategoryCurrentPageAction is triggered', () => {
    let result;

    beforeEach(() => {
      const changeCategoryCurrentPage: DaffCategoryPageChangeCurrentPage = new DaffCategoryPageChangeCurrentPage(3);

      result = daffCategoryReducer(initialState, changeCategoryCurrentPage);
    });

    it('does not change the categoryLoading state', () => {
      expect(result.categoryLoading).toEqual(initialState.categoryLoading);
    });

    it('sets productsLoading state to true', () => {
      expect(result.productsLoading).toBeTrue();
    });

    it('should set the categoryPageMetadata current page', () => {
      expect(result.categoryPageMetadata.current_page).toEqual(3);
    });

    it('sets daffState to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Mutating);
    });
  });

  describe('when ChangeCategorySortingOptionAction is triggered', () => {
    let result;

    beforeEach(() => {
      const changeCategorySortingOption: DaffCategoryPageChangeSortingOption = new DaffCategoryPageChangeSortingOption({
        option: 'option',
        direction: DaffSortDirectionEnum.Ascending,
      });

      result = daffCategoryReducer(initialState, changeCategorySortingOption);
    });

    it('does not change the categoryLoading state', () => {
      expect(result.categoryLoading).toEqual(initialState.categoryLoading);
    });

    it('sets productsLoading state to true', () => {
      expect(result.productsLoading).toBeTrue();
    });

    it('should set the categoryPageMetadata applied sort option', () => {
      expect(result.categoryPageMetadata.applied_sort_option).toEqual('option');
    });

    it('should set the categoryPageMetadata applied sort direction', () => {
      expect(result.categoryPageMetadata.applied_sort_direction).toEqual(DaffSortDirectionEnum.Ascending);
    });

    it('sets daffState to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Mutating);
    });
  });

  describe('when CategoryPageToggleFiltersAction is triggered', () => {
    let result: DaffCategoryReducerState;

    beforeEach(() => {
      filterToggleRequest = filterToggleRequestFactory.create();

      const toggleCategoryFilter: DaffCategoryPageToggleFilter = new DaffCategoryPageToggleFilter(filterToggleRequest);
      result = daffCategoryReducer(initialState, toggleCategoryFilter);
    });

    it('does not change the categoryLoading state', () => {
      expect(result.categoryLoading).toEqual(initialState.categoryLoading);
    });

    it('sets productsLoading state to true', () => {
      expect(result.productsLoading).toBeTrue();
    });

    it('sets daffState to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Mutating);
    });
  });

  describe('when CategoryPageChangeFiltersAction is triggered', () => {
    let result: DaffCategoryReducerState;

    beforeEach(() => {
      filterRequest = filterRequestFactory.create();

      const changeCategoryFilters = new DaffCategoryPageChangeFilters([filterRequest]);

      result = daffCategoryReducer(initialState, changeCategoryFilters);
    });

    it('does not change the categoryLoading state', () => {
      expect(result.categoryLoading).toEqual(initialState.categoryLoading);
    });

    it('sets productsLoading state to true', () => {
      expect(result.productsLoading).toBeTrue();
    });

    it('sets daffState to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Mutating);
    });
  });

  describe('when CategoryPageReplaceFiltersAction is triggered', () => {
    let result: DaffCategoryReducerState;

    beforeEach(() => {
      filterRequest = filterRequestFactory.create();

      const replaceCategoryFilters = new DaffCategoryPageReplaceFilters([filterRequest]);

      result = daffCategoryReducer(initialState, replaceCategoryFilters);
    });

    it('does not change the categoryLoading state', () => {
      expect(result.categoryLoading).toEqual(initialState.categoryLoading);
    });

    it('sets productsLoading state to true', () => {
      expect(result.productsLoading).toBeTrue();
    });

    it('sets daffState to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Mutating);
    });
  });

  describe('when CategoryPageApplyFiltersAction is triggered', () => {
    let result: DaffCategoryReducerState;

    beforeEach(() => {
      filterRequest = filterRequestFactory.create();

      const applyCategoryFilters = new DaffCategoryPageApplyFilters([filterRequest]);
      result = daffCategoryReducer(initialState, applyCategoryFilters);
    });

    it('does not change the categoryLoading state', () => {
      expect(result.categoryLoading).toEqual(initialState.categoryLoading);
    });

    it('sets productsLoading state to true', () => {
      expect(result.productsLoading).toBeTrue();
    });

    it('sets daffState to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Mutating);
    });
  });

  describe('when CategoryPageClearFiltersAction is triggered', () => {
    let result: DaffCategoryReducerState;

    beforeEach(() => {
      const clearCategoryFilters = new DaffCategoryPageClearFilters();
      result = daffCategoryReducer(initialState, clearCategoryFilters);
    });

    it('does not change the categoryLoading state', () => {
      expect(result.categoryLoading).toEqual(initialState.categoryLoading);
    });

    it('sets productsLoading state to true', () => {
      expect(result.productsLoading).toBeTrue();
    });

    it('sets daffState to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Mutating);
    });
  });

  describe('when CategoryPageRemoveFiltersAction is triggered', () => {
    let result: DaffCategoryReducerState;

    beforeEach(() => {
      filterRequest = filterRequestFactory.create();

      const removeCategoryFilters = new DaffCategoryPageRemoveFilters([filterRequest]);
      result = daffCategoryReducer(initialState, removeCategoryFilters);
    });

    it('does not change the categoryLoading state', () => {
      expect(result.categoryLoading).toEqual(initialState.categoryLoading);
    });

    it('sets productsLoading state to true', () => {
      expect(result.productsLoading).toBeTrue();
    });

    it('sets daffState to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Mutating);
    });
  });

  // TODO: revisit for kinded requests
  describe('when CategoryPageLoadAction is triggered', () => {
    let result;
    let categoryRequest: DaffCategoryRequest;

    beforeEach(() => {
      categoryRequest = {
        id: categoryId,
        page_size: categoryPageMetadata.page_size,
        filter_requests: daffCategoryFiltersToRequests(categoryPageMetadata.filters),
        applied_sort_option: categoryPageMetadata.applied_sort_option,
        applied_sort_direction: categoryPageMetadata.applied_sort_direction,
        current_page: categoryPageMetadata.current_page,
      };
      const categoryLoadAction: DaffCategoryPageLoad = new DaffCategoryPageLoad(categoryRequest);

      result = daffCategoryReducer(initialState, categoryLoadAction);
    });

    it('sets categoryLoading state to true', () => {
      expect(result.categoryLoading).toBeTrue();
    });

    it('sets productsLoading state to true', () => {
      expect(result.productsLoading).toBeTrue();
    });

    it('sets the included parameters on categoryPageMetadata', () => {
      categoryRequest.filter_requests.forEach(request => {
        expect(result.categoryPageMetadata.filters[request.name]).toBeTruthy();
      });
      expect(result.categoryPageMetadata.id).toEqual(categoryRequest.id);
      expect(result.categoryPageMetadata.page_size).toEqual(categoryRequest.page_size);
      expect(result.categoryPageMetadata.current_page).toEqual(categoryRequest.current_page);
      expect(result.categoryPageMetadata.applied_sort_direction).toEqual(categoryRequest.applied_sort_direction);
      expect(result.categoryPageMetadata.applied_sort_option).toEqual(categoryRequest.applied_sort_option);
    });

    it('sets daffState to resolving', () => {
      expect(result.daffState).toEqual(DaffState.Resolving);
    });
  });

  describe('when CategoryPageLoadSuccessAction is triggered', () => {

    let result: DaffCategoryReducerState;
    let state: DaffCategoryReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        categoryLoading: true,
        productsLoading: true,
      };
    });

    it('sets categoryLoading to false', () => {
      categoryPageMetadata.applied_sort_option = null;
      const categoryLoadSuccess = new DaffCategoryPageLoadSuccess({ category, categoryPageMetadata, products: []});
      result = daffCategoryReducer(state, categoryLoadSuccess);

      expect(result.categoryLoading).toEqual(initialState.categoryLoading);
    });

    it('sets productsLoading to false', () => {
      categoryPageMetadata.applied_sort_option = null;
      const categoryLoadSuccess = new DaffCategoryPageLoadSuccess({ category, categoryPageMetadata, products: []});
      result = daffCategoryReducer(state, categoryLoadSuccess);

      expect(result.productsLoading).toEqual(false);
    });

    describe('when an applied_sort_option is not set in state', () => {

      it('sets categoryPageMetadata with the default sorting option', () => {
        state.categoryPageMetadata.applied_sort_option = null;
        const categoryLoadSuccess = new DaffCategoryPageLoadSuccess({ category, categoryPageMetadata, products: []});
        result = daffCategoryReducer(state, categoryLoadSuccess);

        expect(result.categoryPageMetadata).toEqual({
          ...categoryPageMetadata,
          applied_sort_option: categoryPageMetadata.sort_options.default,
        });
      });
    });

    describe('when an applied_sort_option is set in state', () => {

      afterEach(() => {
        state.categoryPageMetadata.applied_sort_option = null;
      });

      it('sets the categoryPageMetadata with the applied_sort_option', () => {
        const selectedOption = 'selectedOption';
        state.categoryPageMetadata.applied_sort_option = selectedOption;
        const categoryLoadSuccess = new DaffCategoryPageLoadSuccess({ category, categoryPageMetadata, products: []});
        result = daffCategoryReducer(state, categoryLoadSuccess);
        expect(result.categoryPageMetadata).toEqual({
          ...categoryPageMetadata,
          applied_sort_option: selectedOption,
        });
      });
    });

    it('sets daffState to stable', () => {
      const categoryLoadSuccess = new DaffCategoryPageLoadSuccess({ category, categoryPageMetadata, products: []});
      result = daffCategoryReducer(state, categoryLoadSuccess);
      expect(result.daffState).toEqual(DaffState.Stable);
    });
  });

  describe('when CategoryPageLoadFailureAction is triggered', () => {

    const error: DaffStateError = {
      code: 'error code',
      message: 'error message',
    };
    let result;
    let state: DaffCategoryReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        categoryLoading: true,
        productsLoading: true,
        errors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const categoryLoadFailure = new DaffCategoryPageLoadFailure(error);

      result = daffCategoryReducer(state, categoryLoadFailure);
    });

    it('sets categoryLoading to false', () => {
      expect(result.categoryLoading).toEqual(initialState.categoryLoading);
    });

    it('sets productsLoading to false', () => {
      expect(result.productsLoading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(1);
      expect(result.errors).toEqual([error]);
    });

    it('sets daffState to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });
  });
});
