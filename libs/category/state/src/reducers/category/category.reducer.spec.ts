import { TestBed } from '@angular/core/testing';

import {
  DaffCategory,
  DaffCategoryPageMetadata,
  DaffCategoryIdRequest,
  DaffCategoryRequestKind,
  DaffCategoryUrlRequest,
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
  DaffCategoryPageLoadByUrl,
} from '@daffodil/category/state';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';
import { DaffSortDirectionEnum } from '@daffodil/core';
import {
  DaffFilterEqual,
  DaffFilterEqualOption,
  DaffFilterRangeNumeric,
  DaffFilterRangePair,
  DaffFilterEqualRequest,
  DaffFilterEqualToggleRequest,
  DaffFilterRangeNumericRequest,
  DaffFilterRangeNumericToggleRequest,
  DaffFilterRangeRequestOption,
  daffFilterEqualOptionArrayToDict,
  daffFilterRangePairArrayToDict,
  daffFilterComputeRangePairLabel,
  daffFiltersToRequests,
} from '@daffodil/core';
import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';
import {
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
  DaffFilterRangeNumericFactory,
  DaffFilterRangeNumericPairFactory,
  DaffFilterRequestEqualFactory,
  DaffFilterRequestRangeNumericFactory,
  DaffFilterRangeNumericRequestOptionFactory,
  DaffFilterToggleRequestEqualFactory,
  DaffFilterToggleRequestRangeNumericFactory,
} from '@daffodil/core/testing';

import {
  daffCategoryReducer,
  initialState,
} from './category.reducer';

describe('@daffodil/category/state | daffCategoryReducer', () => {
  let categoryFactory: DaffCategoryFactory;
  let categoryPageMetadataFactory: DaffCategoryPageMetadataFactory;
  let equalFilterFactory: DaffFilterEqualFactory;
  let equalOptionFactory: DaffFilterEqualOptionFactory;
  let rangeFilterFactory: DaffFilterRangeNumericFactory;
  let rangePairFactory: DaffFilterRangeNumericPairFactory;
  let equalFilterRequestFactory: DaffFilterRequestEqualFactory;
  let equalFilterToggleRequestFactory: DaffFilterToggleRequestEqualFactory;
  let rangeFilterRequestFactory: DaffFilterRequestRangeNumericFactory;
  let rangeFilterToggleRequestFactory: DaffFilterToggleRequestRangeNumericFactory;
  let rangeFilterRequestOptionFactory: DaffFilterRangeNumericRequestOptionFactory;

  let categoryPageMetadata: DaffCategoryPageMetadata;
  let category: DaffCategory;
  let currentEqualFilter: DaffFilterEqual;
  let currentAppliedEqualFilterOption: DaffFilterEqualOption;
  let currentUnappliedEqualFilterOption: DaffFilterEqualOption;
  let currentRangeFilter: DaffFilterRangeNumeric;
  let currentRangeFilterPair: DaffFilterRangePair<number>;
  let currentRangeFilterPairLabel: string;
  let equalFilterRequest: DaffFilterEqualRequest;
  let equalFilterToggleRequest: DaffFilterEqualToggleRequest;
  let rangeFilterRequest: DaffFilterRangeNumericRequest;
  let rangeFilterToggleRequest: DaffFilterRangeNumericToggleRequest;
  let rangeFilterRequestOption: DaffFilterRangeRequestOption<number>;
  let rangeFilterRequestOptionLabel: string;
  let categoryId: string;

  beforeEach(() => {
    categoryFactory = TestBed.inject(DaffCategoryFactory);
    categoryPageMetadataFactory = TestBed.inject(DaffCategoryPageMetadataFactory);
    equalFilterFactory = TestBed.inject(DaffFilterEqualFactory);
    equalOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffFilterRangeNumericFactory);
    rangePairFactory = TestBed.inject(DaffFilterRangeNumericPairFactory);
    equalFilterRequestFactory = TestBed.inject(DaffFilterRequestEqualFactory);
    equalFilterToggleRequestFactory = TestBed.inject(DaffFilterToggleRequestEqualFactory);
    rangeFilterRequestFactory = TestBed.inject(DaffFilterRequestRangeNumericFactory);
    rangeFilterToggleRequestFactory = TestBed.inject(DaffFilterToggleRequestRangeNumericFactory);
    rangeFilterRequestOptionFactory = TestBed.inject(DaffFilterRangeNumericRequestOptionFactory);

    category = categoryFactory.create();
    categoryPageMetadata = categoryPageMetadataFactory.create();
    categoryId = category.id;
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

    it('sets daffState to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Mutating);
    });
  });

  describe('when CategoryPageToggleFiltersAction is triggered', () => {
    let result: DaffCategoryReducerState;
    let stateUnderTest: DaffCategoryReducerState;

    beforeEach(() => {
      currentEqualFilter = equalFilterFactory.create();
      equalFilterToggleRequest = equalFilterToggleRequestFactory.create({
        name: currentEqualFilter.name,
      });
      stateUnderTest = {
        ...initialState,
      };
      const toggleCategoryFilter: DaffCategoryPageToggleFilter = new DaffCategoryPageToggleFilter(equalFilterToggleRequest);
      result = daffCategoryReducer(stateUnderTest, toggleCategoryFilter);
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
    let stateUnderTest: DaffCategoryReducerState;

    beforeEach(() => {
      currentAppliedEqualFilterOption = equalOptionFactory.create({
        applied: true,
      });
      currentUnappliedEqualFilterOption = equalOptionFactory.create({
        applied: false,
      });
      currentEqualFilter = equalFilterFactory.create({
        options: daffFilterEqualOptionArrayToDict([
          currentAppliedEqualFilterOption,
          currentUnappliedEqualFilterOption,
        ]),
      });
      currentRangeFilterPair = rangePairFactory.create();
      currentRangeFilter = rangeFilterFactory.create({
        options: daffFilterRangePairArrayToDict([currentRangeFilterPair]),
      });

      equalFilterRequest = equalFilterRequestFactory.create({
        name: currentEqualFilter.name,
        value: [currentUnappliedEqualFilterOption.value],
      });
      rangeFilterRequestOption = rangeFilterRequestOptionFactory.create();
      rangeFilterRequest = rangeFilterRequestFactory.create({
        value: rangeFilterRequestOption,
        name: currentRangeFilter.name,
      });
      currentRangeFilterPairLabel = daffFilterComputeRangePairLabel(currentRangeFilterPair.min.value, currentRangeFilterPair.max.value);
      rangeFilterRequestOptionLabel = daffFilterComputeRangePairLabel(rangeFilterRequestOption.min, rangeFilterRequestOption.max);
      stateUnderTest = {
        ...initialState,
      };

      const changeCategoryFilters = new DaffCategoryPageChangeFilters([
        equalFilterRequest,
        rangeFilterRequest,
      ]);

      result = daffCategoryReducer(stateUnderTest, changeCategoryFilters);
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
    let stateUnderTest: DaffCategoryReducerState;

    beforeEach(() => {
      currentAppliedEqualFilterOption = equalOptionFactory.create({
        applied: true,
      });
      currentUnappliedEqualFilterOption = equalOptionFactory.create({
        applied: false,
      });
      currentEqualFilter = equalFilterFactory.create({
        options: daffFilterEqualOptionArrayToDict([
          currentAppliedEqualFilterOption,
          currentUnappliedEqualFilterOption,
        ]),
      });
      currentRangeFilterPair = rangePairFactory.create();
      currentRangeFilter = rangeFilterFactory.create({
        options: daffFilterRangePairArrayToDict([currentRangeFilterPair]),
      });

      equalFilterRequest = equalFilterRequestFactory.create({
        name: currentEqualFilter.name,
        value: [currentUnappliedEqualFilterOption.value],
      });
      rangeFilterRequestOption = rangeFilterRequestOptionFactory.create();
      rangeFilterRequest = rangeFilterRequestFactory.create({
        value: rangeFilterRequestOption,
        name: currentRangeFilter.name,
      });
      rangeFilterRequestOptionLabel = daffFilterComputeRangePairLabel(rangeFilterRequestOption.min, rangeFilterRequestOption.max);
      stateUnderTest = {
        ...initialState,
      };

      const replaceCategoryFilters = new DaffCategoryPageReplaceFilters([
        equalFilterRequest,
        rangeFilterRequest,
      ]);

      result = daffCategoryReducer(stateUnderTest, replaceCategoryFilters);
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
    let stateUnderTest: DaffCategoryReducerState;

    beforeEach(() => {
      currentEqualFilter = equalFilterFactory.create();
      equalFilterRequest = equalFilterRequestFactory.create({
        name: currentEqualFilter.name,
      });
      stateUnderTest = {
        ...initialState,
      };
      const applyCategoryFilters = new DaffCategoryPageApplyFilters([equalFilterRequest]);
      result = daffCategoryReducer(stateUnderTest, applyCategoryFilters);
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
    let stateUnderTest: DaffCategoryReducerState;

    beforeEach(() => {
      currentAppliedEqualFilterOption = equalOptionFactory.create({
        applied: true,
      });
      currentUnappliedEqualFilterOption = equalOptionFactory.create({
        applied: false,
      });
      currentEqualFilter = equalFilterFactory.create({
        options: daffFilterEqualOptionArrayToDict([
          currentAppliedEqualFilterOption,
          currentUnappliedEqualFilterOption,
        ]),
      });
      currentRangeFilterPair = rangePairFactory.create();
      currentRangeFilter = rangeFilterFactory.create({
        options: daffFilterRangePairArrayToDict([currentRangeFilterPair]),
      });
      stateUnderTest = {
        ...initialState,
      };
      const clearCategoryFilters = new DaffCategoryPageClearFilters();
      result = daffCategoryReducer(stateUnderTest, clearCategoryFilters);
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
    let stateUnderTest: DaffCategoryReducerState;

    beforeEach(() => {
      currentEqualFilter = equalFilterFactory.create();
      equalFilterRequest = equalFilterRequestFactory.create({
        name: currentEqualFilter.name,
      });

      stateUnderTest = {
        ...initialState,
      };

      const removeCategoryFilters = new DaffCategoryPageRemoveFilters([equalFilterRequest]);
      result = daffCategoryReducer(stateUnderTest, removeCategoryFilters);
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

  describe('when CategoryPageLoadAction is triggered', () => {
    let result;
    let categoryRequest: DaffCategoryIdRequest;

    beforeEach(() => {
      categoryRequest = {
        kind: DaffCategoryRequestKind.ID,
        id: categoryId,
        pageSize: categoryPageMetadata.pageSize,
        filterRequests: daffFiltersToRequests(categoryPageMetadata.filters),
        appliedSortOption: categoryPageMetadata.appliedSortOption,
        appliedSortDirection: categoryPageMetadata.appliedSortDirection,
        currentPage: categoryPageMetadata.currentPage,
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

    it('sets daffState to resolving', () => {
      expect(result.daffState).toEqual(DaffState.Resolving);
    });
  });

  describe('when CategoryPageLoadByUrlAction is triggered', () => {
    let result;
    let categoryRequest: DaffCategoryUrlRequest;

    beforeEach(() => {
      categoryRequest = {
        kind: DaffCategoryRequestKind.URL,
        url: category.url,
        pageSize: categoryPageMetadata.pageSize,
        filterRequests: daffFiltersToRequests(categoryPageMetadata.filters),
        appliedSortOption: categoryPageMetadata.appliedSortOption,
        appliedSortDirection: categoryPageMetadata.appliedSortDirection,
        currentPage: categoryPageMetadata.currentPage,
      };
      const categoryLoadAction: DaffCategoryPageLoadByUrl = new DaffCategoryPageLoadByUrl(categoryRequest);

      result = daffCategoryReducer(initialState, categoryLoadAction);
    });

    it('sets categoryLoading state to true', () => {
      expect(result.categoryLoading).toBeTrue();
    });

    it('sets productsLoading state to true', () => {
      expect(result.productsLoading).toBeTrue();
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
      categoryPageMetadata.appliedSortOption = null;
      const categoryLoadSuccess = new DaffCategoryPageLoadSuccess({ category, categoryPageMetadata, products: []});
      result = daffCategoryReducer(state, categoryLoadSuccess);

      expect(result.categoryLoading).toEqual(initialState.categoryLoading);
    });

    it('sets productsLoading to false', () => {
      categoryPageMetadata.appliedSortOption = null;
      const categoryLoadSuccess = new DaffCategoryPageLoadSuccess({ category, categoryPageMetadata, products: []});
      result = daffCategoryReducer(state, categoryLoadSuccess);

      expect(result.productsLoading).toEqual(false);
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
