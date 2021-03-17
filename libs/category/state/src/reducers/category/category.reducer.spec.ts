import {
  DaffCategory,
  DaffCategoryRequest,
  DaffCategoryFilterMatchRequest,
  DaffCategoryFilterType,
  DaffCategoryFilterRequest,
  DaffCategoryFilterEqualRequest,
  DaffToggleCategoryFilterRequest,
  DaffCategoryFilterRangeRequest,
} from '@daffodil/category';
import {
  DaffCategoryReducerState,
  DaffCategoryLoad,
  DaffCategoryPageChangePageSize,
  DaffCategoryPageChangeCurrentPage,
  DaffCategoryPageChangeSortingOption,
  DaffCategoryPageToggleFilter,
  DaffCategoryPageChangeFilters,
  DaffCategoryLoadFailure,
  DaffCategoryPageLoad,
  DaffCategoryLoadSuccess,
  DaffCategoryPageLoadSuccess,
  DaffCategoryPageLoadFailure,
  DaffStatefulCategoryPageConfigurationState,
} from '@daffodil/category/state';
import { DaffStatefulCategoryPageConfigurationStateFactory } from '@daffodil/category/state/testing';
import { DaffCategoryFactory } from '@daffodil/category/testing';
import {
  DaffSortDirectionEnum,
  DaffState,
} from '@daffodil/core/state';

import { daffCategoryReducer } from './category.reducer';

describe('Category | Category Reducer', () => {

  let categoryFactory: DaffCategoryFactory;
  let categoryPageConfigurationStateFactory: DaffStatefulCategoryPageConfigurationStateFactory;
  let category: DaffCategory;
  let categoryPageConfigurationState: DaffStatefulCategoryPageConfigurationState;
  let categoryId: string;
  const initialState: DaffCategoryReducerState = {
    categoryPageConfigurationState: {
      id: null,
      filter_requests: [],
      applied_sort_option: null,
      applied_sort_direction: null,
      current_page: null,
      page_size: null,
      total_pages: null,
      filters: [],
      sort_options: {
        default: null,
        options: [],
      },
      total_products: null,
      product_ids: [],
      daffState: DaffState.Stable,
    },
    categoryLoading: false,
    productsLoading: false,
    errors: [],
  };

  beforeEach(() => {
    categoryFactory = new DaffCategoryFactory();
    categoryPageConfigurationStateFactory = new DaffStatefulCategoryPageConfigurationStateFactory();

    category = categoryFactory.create();
    categoryPageConfigurationState = categoryPageConfigurationStateFactory.create();
    categoryId = category.id;
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = <any>{};

      const result = daffCategoryReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CategoryLoadAction is triggered', () => {
    let result;
    let categoryRequest: DaffCategoryRequest;

    beforeEach(() => {
      categoryRequest = {
        id: categoryId,
      };
      const categoryLoadAction: DaffCategoryLoad = new DaffCategoryLoad(categoryRequest);

      result = daffCategoryReducer(initialState, categoryLoadAction);
    });

    it('sets categoryLoading state to true', () => {
      expect(result.categoryLoading).toEqual(true);
    });

    it('sets productsLoading state to true', () => {
      expect(result.productsLoading).toEqual(true);
    });

    it('sets daffState of categoryPageConfigurationState state to resolving', () => {
      expect(result.categoryPageConfigurationState.daffState).toEqual(DaffState.Resolving);
    });
  });

  describe('when ChangeCategoryPageSizeAction is triggered', () => {
    let result;

    beforeEach(() => {
      const changeCategoryPageSize: DaffCategoryPageChangePageSize = new DaffCategoryPageChangePageSize(3);

      result = daffCategoryReducer(initialState, changeCategoryPageSize);
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

    it('sets daffState of categoryPageConfigurationState state to mutating', () => {
      expect(result.categoryPageConfigurationState.daffState).toEqual(DaffState.Mutating);
    });
  });

  describe('when ChangeCategoryCurrentPageAction is triggered', () => {
    let result;

    beforeEach(() => {
      const changeCategoryCurrentPage: DaffCategoryPageChangeCurrentPage = new DaffCategoryPageChangeCurrentPage(3);

      result = daffCategoryReducer(initialState, changeCategoryCurrentPage);
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

    it('sets daffState of categoryPageConfigurationState state to mutating', () => {
      expect(result.categoryPageConfigurationState.daffState).toEqual(DaffState.Mutating);
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

    it('sets daffState of categoryPageConfigurationState state to mutating', () => {
      expect(result.categoryPageConfigurationState.daffState).toEqual(DaffState.Mutating);
    });
  });

  describe('when ToggleCategoryFilterAction is triggered', () => {
    let result;

    describe('and the filter is already applied', () => {

      it('should remove a match type filter', () => {
        const existingMatchFilter: DaffCategoryFilterMatchRequest = {
          type: DaffCategoryFilterType.Match,
          name: 'name',
          value: 'value',
        };
        const initialStateWithFilter = {
          ...initialState,
          categoryPageConfigurationState: {
            ...initialState.categoryPageConfigurationState,
            filter_requests: [existingMatchFilter],
          },
        };
        const toggledFilter: DaffCategoryFilterRequest = {
          ...existingMatchFilter,
        };

        const toggleCategoryFilter: DaffCategoryPageToggleFilter = new DaffCategoryPageToggleFilter(toggledFilter);
        result = daffCategoryReducer(initialStateWithFilter, toggleCategoryFilter);

        expect(result.categoryPageConfigurationState.filter_requests).toEqual([]);
      });

      it('should remove an equal/range type filter - one existing applied filter value', () => {
        const existingEqualFilter: DaffCategoryFilterEqualRequest = {
          type: DaffCategoryFilterType.Equal,
          name: 'name',
          value: ['value'],
        };
        const initialStateWithFilter = {
          ...initialState,
          categoryPageConfigurationState: {
            ...initialState.categoryPageConfigurationState,
            filter_requests: [existingEqualFilter],
          },
        };
        const toggledFilter: DaffToggleCategoryFilterRequest = {
          name: existingEqualFilter.name,
          value: existingEqualFilter.value[0],
          type: existingEqualFilter.type,
        };

        const toggleCategoryFilter: DaffCategoryPageToggleFilter = new DaffCategoryPageToggleFilter(toggledFilter);
        result = daffCategoryReducer(initialStateWithFilter, toggleCategoryFilter);
        expect(result.categoryPageConfigurationState.filter_requests).toEqual([]);
      });

      it('should remove an equal/range type filter - multiple existing applied filter values', () => {
        const existingEqualFilter: DaffCategoryFilterEqualRequest = {
          type: DaffCategoryFilterType.Equal,
          name: 'name',
          value: ['value', 'value2'],
        };
        const initialStateWithFilter = {
          ...initialState,
          categoryPageConfigurationState: {
            ...initialState.categoryPageConfigurationState,
            filter_requests: [existingEqualFilter],
          },
        };
        const toggledFilter: DaffToggleCategoryFilterRequest = {
          name: existingEqualFilter.name,
          value: existingEqualFilter.value[0],
          type: existingEqualFilter.type,
        };
        const expectedFilters: DaffCategoryFilterRequest[] = [
          {
            ...existingEqualFilter,
            value: ['value2'],
          },
        ];

        const toggleCategoryFilter: DaffCategoryPageToggleFilter = new DaffCategoryPageToggleFilter(toggledFilter);
        result = daffCategoryReducer(initialStateWithFilter, toggleCategoryFilter);
        expect(result.categoryPageConfigurationState.filter_requests).toEqual(expectedFilters);
      });
    });

    describe('and the filter has not been applied yet', () => {

      it('should add a match type filter', () => {
        const initialStateWithFilter = {
          ...initialState,
          categoryPageConfigurationState: {
            ...initialState.categoryPageConfigurationState,
            filter_requests: [],
          },
        };
        const toggledFilter: DaffCategoryFilterRequest = {
          name: 'name',
          value: 'value',
          type: DaffCategoryFilterType.Match,
        };
        const expectedFilters: DaffCategoryFilterRequest[] = [
          {
            ...toggledFilter,
            type: DaffCategoryFilterType.Match,
          },
        ];

        const toggleCategoryFilter: DaffCategoryPageToggleFilter = new DaffCategoryPageToggleFilter(toggledFilter);
        result = daffCategoryReducer(initialStateWithFilter, toggleCategoryFilter);
        expect(result.categoryPageConfigurationState.filter_requests).toEqual(expectedFilters);
      });

      it('should add an equal type filter - no matched filter name', () => {
        const initialStateWithFilter = {
          ...initialState,
          categoryPageConfigurationState: {
            ...initialState.categoryPageConfigurationState,
            filter_requests: [],
          },
        };
        const toggledFilter: DaffToggleCategoryFilterRequest = {
          name: 'name',
          value: 'value',
          type: DaffCategoryFilterType.Equal,
        };
        const expectedFilters: DaffCategoryFilterRequest[] = [
          {
            ...toggledFilter,
            type: DaffCategoryFilterType.Equal,
            value: [toggledFilter.value],
          },
        ];

        const toggleCategoryFilter: DaffCategoryPageToggleFilter = new DaffCategoryPageToggleFilter(toggledFilter);
        result = daffCategoryReducer(initialStateWithFilter, toggleCategoryFilter);
        expect(result.categoryPageConfigurationState.filter_requests).toEqual(expectedFilters);
      });

      it('should add an equal type filter - with existing matched filter name', () => {
        const existingEqualFilter: DaffCategoryFilterEqualRequest = {
          type: DaffCategoryFilterType.Equal,
          name: 'name',
          value: ['value2'],
        };
        const initialStateWithFilter = {
          ...initialState,
          categoryPageConfigurationState: {
            ...initialState.categoryPageConfigurationState,
            filter_requests: [existingEqualFilter],
          },
        };
        const toggledFilter: DaffToggleCategoryFilterRequest = {
          name: 'name',
          value: 'value',
          type: DaffCategoryFilterType.Equal,
        };
        const expectedFilters: DaffCategoryFilterRequest[] = [
          {
            ...toggledFilter,
            type: DaffCategoryFilterType.Equal,
            value: [existingEqualFilter.value[0], toggledFilter.value],
          },
        ];

        const toggleCategoryFilter: DaffCategoryPageToggleFilter = new DaffCategoryPageToggleFilter(toggledFilter);
        result = daffCategoryReducer(initialStateWithFilter, toggleCategoryFilter);
        expect(result.categoryPageConfigurationState.filter_requests).toEqual(expectedFilters);
      });

      it('should add a range type filter - no matched filter name', () => {
        const initialStateWithFilter = {
          ...initialState,
          categoryPageConfigurationState: {
            ...initialState.categoryPageConfigurationState,
            filter_requests: [],
          },
        };
        const toggledFilter: DaffToggleCategoryFilterRequest = {
          name: 'name',
          value: 'value',
          type: DaffCategoryFilterType.Range,
        };
        const expectedFilters: DaffCategoryFilterRequest[] = [
          {
            ...toggledFilter,
            type: DaffCategoryFilterType.Range,
            value: [toggledFilter.value],
          },
        ];

        const toggleCategoryFilter: DaffCategoryPageToggleFilter = new DaffCategoryPageToggleFilter(toggledFilter);
        result = daffCategoryReducer(initialStateWithFilter, toggleCategoryFilter);
        expect(result.categoryPageConfigurationState.filter_requests).toEqual(expectedFilters);
      });

      it('should add a range type filter - with existing matched filter name', () => {
        const existingRangeFilter: DaffCategoryFilterRangeRequest = {
          type: DaffCategoryFilterType.Range,
          name: 'name',
          value: ['80-90'],
        };
        const initialStateWithFilter = {
          ...initialState,
          categoryPageConfigurationState: {
            ...initialState.categoryPageConfigurationState,
            filter_requests: [existingRangeFilter],
          },
        };
        const toggledFilter: DaffToggleCategoryFilterRequest = {
          type: DaffCategoryFilterType.Range,
          name: 'name',
          value: '70-90',
        };
        const expectedFilters: DaffCategoryFilterRequest[] = [
          {
            ...toggledFilter,
            type: DaffCategoryFilterType.Range,
            value: [existingRangeFilter.value[0], toggledFilter.value],
          },
        ];

        const toggleCategoryFilter: DaffCategoryPageToggleFilter = new DaffCategoryPageToggleFilter(toggledFilter);
        result = daffCategoryReducer(initialStateWithFilter, toggleCategoryFilter);
        expect(result.categoryPageConfigurationState.filter_requests).toEqual(expectedFilters);
      });
    });

    it('does not change the categoryLoading state', () => {
      const matchFilter: DaffCategoryFilterMatchRequest = {
        type: DaffCategoryFilterType.Match,
        name: 'name',
        value: 'value',
      };
      const initialStateWithFilter = {
        ...initialState,
        filter_requests: [matchFilter],
      };
      const toggledFilter: DaffCategoryFilterRequest = {
        ...matchFilter,
      };

      const toggleCategoryFilter: DaffCategoryPageToggleFilter = new DaffCategoryPageToggleFilter(toggledFilter);
      result = daffCategoryReducer(initialStateWithFilter, toggleCategoryFilter);

      expect(result.categoryLoading).toEqual(false);
    });

    it('sets productsLoading state to true', () => {
      const matchFilter: DaffCategoryFilterMatchRequest = {
        type: DaffCategoryFilterType.Match,
        name: 'name',
        value: 'value',
      };
      const initialStateWithFilter = {
        ...initialState,
        filter_requests: [matchFilter],
      };
      const toggledFilter: DaffCategoryFilterRequest = {
        ...matchFilter,
      };

      const toggleCategoryFilter: DaffCategoryPageToggleFilter = new DaffCategoryPageToggleFilter(toggledFilter);
      result = daffCategoryReducer(initialStateWithFilter, toggleCategoryFilter);

      expect(result.productsLoading).toEqual(true);
    });

    it('sets daffState of categoryPageConfigurationState state to mutating', () => {
      const matchFilter: DaffCategoryFilterMatchRequest = {
        type: DaffCategoryFilterType.Match,
        name: 'name',
        value: 'value',
      };
      const initialStateWithFilter = {
        ...initialState,
        filter_requests: [matchFilter],
      };
      const toggledFilter: DaffCategoryFilterRequest = {
        ...matchFilter,
      };

      const toggleCategoryFilter: DaffCategoryPageToggleFilter = new DaffCategoryPageToggleFilter(toggledFilter);
      result = daffCategoryReducer(initialStateWithFilter, toggleCategoryFilter);

      expect(result.categoryPageConfigurationState.daffState).toEqual(DaffState.Mutating);
    });
  });

  describe('when ChangeCategoryFiltersAction is triggered', () => {
    let result;
    let expectedFilters: DaffCategoryFilterRequest[];

    beforeEach(() => {
      expectedFilters = [{
        type: DaffCategoryFilterType.Equal,
        name: 'name',
        value: ['value'],
      }];
      const changeCategoryFilters: DaffCategoryPageChangeFilters = new DaffCategoryPageChangeFilters(expectedFilters);

      result = daffCategoryReducer(initialState, changeCategoryFilters);
    });

    it('does not change the categoryLoading state', () => {
      expect(result.categoryLoading).toEqual(false);
    });

    it('sets productsLoading state to true', () => {
      expect(result.productsLoading).toEqual(true);
    });

    it('should set the categoryPageConfigurationState applied filters', () => {
      expect(result.categoryPageConfigurationState.filter_requests).toEqual(expectedFilters);
    });

    it('sets daffState of categoryPageConfigurationState state to mutating', () => {
      expect(result.categoryPageConfigurationState.daffState).toEqual(DaffState.Mutating);
    });
  });

  describe('when CategoryLoadFailureAction is triggered', () => {

    const error = 'error message';
    let result;
    let state: DaffCategoryReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        categoryLoading: true,
        productsLoading: true,
        errors: new Array('firstError'),
      };

      const categoryLoadFailure = new DaffCategoryLoadFailure(error);

      result = daffCategoryReducer(state, categoryLoadFailure);
    });

    it('sets categoryLoading to false', () => {
      expect(result.categoryLoading).toEqual(false);
    });

    it('sets productsLoading to false', () => {
      expect(result.productsLoading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(1);
      expect(result.errors).toEqual([error]);
    });

    it('sets daffState of categoryPageConfigurationState state to stable', () => {
      expect(result.categoryPageConfigurationState.daffState).toEqual(DaffState.Stable);
    });
  });

  describe('when CategoryPageLoadAction is triggered', () => {
    let result;
    let categoryRequest: DaffCategoryRequest;

    beforeEach(() => {
      categoryRequest = {
        id: categoryId,
        page_size: categoryPageConfigurationState.page_size,
        filter_requests: categoryPageConfigurationState.filter_requests,
        applied_sort_option: categoryPageConfigurationState.applied_sort_option,
        applied_sort_direction: categoryPageConfigurationState.applied_sort_direction,
        current_page: categoryPageConfigurationState.current_page,
      };
      const categoryLoadAction: DaffCategoryPageLoad = new DaffCategoryPageLoad(categoryRequest);

      result = daffCategoryReducer(initialState, categoryLoadAction);
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
      expect(result.categoryPageConfigurationState.filter_requests).toEqual(categoryRequest.filter_requests);
      expect(result.categoryPageConfigurationState.applied_sort_direction).toEqual(categoryRequest.applied_sort_direction);
      expect(result.categoryPageConfigurationState.applied_sort_option).toEqual(categoryRequest.applied_sort_option);
    });

    it('sets daffState of categoryPageConfigurationState state to resolving', () => {
      expect(result.categoryPageConfigurationState.daffState).toEqual(DaffState.Resolving);
    });
  });

  describe('when CategoryLoadSuccessAction is triggered', () => {

    let result: DaffCategoryReducerState;
    let state: DaffCategoryReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        categoryLoading: true,
        productsLoading: true,
      };

      const categoryLoadSuccess = new DaffCategoryLoadSuccess({ category, categoryPageConfigurationState, products: null });
      result = daffCategoryReducer(state, categoryLoadSuccess);
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

    it('sets daffState of categoryPageConfigurationState state to stable', () => {
      expect(result.categoryPageConfigurationState.daffState).toEqual(DaffState.Stable);
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
      categoryPageConfigurationState.applied_sort_option = null;
      const categoryLoadSuccess = new DaffCategoryPageLoadSuccess({ category, categoryPageConfigurationState, products: null });
      result = daffCategoryReducer(state, categoryLoadSuccess);

      expect(result.categoryLoading).toEqual(false);
    });

    it('sets productsLoading to false', () => {
      categoryPageConfigurationState.applied_sort_option = null;
      const categoryLoadSuccess = new DaffCategoryPageLoadSuccess({ category, categoryPageConfigurationState, products: null });
      result = daffCategoryReducer(state, categoryLoadSuccess);

      expect(result.productsLoading).toEqual(false);
    });

    describe('when an applied_sort_option is not set in state', () => {

      it('sets categoryPageConfigurationState with the default sorting option', () => {
        state.categoryPageConfigurationState.applied_sort_option = null;
        const categoryLoadSuccess = new DaffCategoryPageLoadSuccess({ category, categoryPageConfigurationState, products: null });
        result = daffCategoryReducer(state, categoryLoadSuccess);

        expect(result.categoryPageConfigurationState).toEqual({
          ...categoryPageConfigurationState,
          applied_sort_option: categoryPageConfigurationState.sort_options.default,
        });
      });
    });

    describe('when an applied_sort_option is set in state', () => {

      afterEach(() => {
        state.categoryPageConfigurationState.applied_sort_option = null;
      });

      it('sets the categoryPageConfigurationState with the applied_sort_option', () => {
        const selectedOption = 'selectedOption';
        state.categoryPageConfigurationState.applied_sort_option = selectedOption;
        const categoryLoadSuccess = new DaffCategoryPageLoadSuccess({ category, categoryPageConfigurationState, products: null });
        result = daffCategoryReducer(state, categoryLoadSuccess);
        expect(result.categoryPageConfigurationState).toEqual({
          ...categoryPageConfigurationState,
          applied_sort_option: selectedOption,
        });
      });
    });

    it('sets daffState of categoryPageConfigurationState state to stable', () => {
      expect(result.categoryPageConfigurationState.daffState).toEqual(DaffState.Stable);
    });
  });

  describe('when CategoryPageLoadFailureAction is triggered', () => {

    const error = 'error message';
    let result;
    let state: DaffCategoryReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        categoryLoading: true,
        productsLoading: true,
        errors: new Array('firstError'),
      };

      const categoryLoadFailure = new DaffCategoryPageLoadFailure(error);

      result = daffCategoryReducer(state, categoryLoadFailure);
    });

    it('sets categoryLoading to false', () => {
      expect(result.categoryLoading).toEqual(false);
    });

    it('sets productsLoading to false', () => {
      expect(result.productsLoading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(1);
      expect(result.errors).toEqual([error]);
    });

    it('sets daffState of categoryPageConfigurationState state to stable', () => {
      expect(result.categoryPageConfigurationState.daffState).toEqual(DaffState.Stable);
    });
  });
});
