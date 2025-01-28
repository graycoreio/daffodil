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
  daffCategoryInitialState,
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

      const result = daffCategoryReducer(daffCategoryInitialState, action);

      expect(result).toBe(daffCategoryInitialState);
    });
  });

  describe('when ChangeCategoryPageSizeAction is triggered', () => {
    let result: DaffCategoryReducerState;

    beforeEach(() => {
      const changeCategoryPageSize: DaffCategoryPageChangePageSize = new DaffCategoryPageChangePageSize(3);

      result = daffCategoryReducer(daffCategoryInitialState, changeCategoryPageSize);
    });

    it('sets daffState to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Updating);
    });
  });

  describe('when ChangeCategoryCurrentPageAction is triggered', () => {
    let result: DaffCategoryReducerState;

    beforeEach(() => {
      const changeCategoryCurrentPage: DaffCategoryPageChangeCurrentPage = new DaffCategoryPageChangeCurrentPage(3);

      result = daffCategoryReducer(daffCategoryInitialState, changeCategoryCurrentPage);
    });

    it('sets daffState to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Updating);
    });
  });

  describe('when ChangeCategorySortingOptionAction is triggered', () => {
    let result: DaffCategoryReducerState;

    beforeEach(() => {
      const changeCategorySortingOption: DaffCategoryPageChangeSortingOption = new DaffCategoryPageChangeSortingOption({
        option: 'option',
        direction: DaffSortDirectionEnum.Ascending,
      });

      result = daffCategoryReducer(daffCategoryInitialState, changeCategorySortingOption);
    });

    it('sets daffState to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Updating);
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
        ...daffCategoryInitialState,
      };
      const toggleCategoryFilter: DaffCategoryPageToggleFilter = new DaffCategoryPageToggleFilter(equalFilterToggleRequest);
      result = daffCategoryReducer(stateUnderTest, toggleCategoryFilter);
    });

    it('sets daffState to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Updating);
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
        ...daffCategoryInitialState,
      };

      const replaceCategoryFilters = new DaffCategoryPageReplaceFilters([
        equalFilterRequest,
        rangeFilterRequest,
      ]);

      result = daffCategoryReducer(stateUnderTest, replaceCategoryFilters);
    });

    it('sets daffState to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Updating);
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
        ...daffCategoryInitialState,
      };
      const applyCategoryFilters = new DaffCategoryPageApplyFilters([equalFilterRequest]);
      result = daffCategoryReducer(stateUnderTest, applyCategoryFilters);
    });

    it('sets daffState to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Updating);
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
        ...daffCategoryInitialState,
      };
      const clearCategoryFilters = new DaffCategoryPageClearFilters();
      result = daffCategoryReducer(stateUnderTest, clearCategoryFilters);
    });

    it('sets daffState to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Updating);
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
        ...daffCategoryInitialState,
      };

      const removeCategoryFilters = new DaffCategoryPageRemoveFilters([equalFilterRequest]);
      result = daffCategoryReducer(stateUnderTest, removeCategoryFilters);
    });

    it('sets daffState to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Updating);
    });
  });

  describe('when CategoryPageLoadAction is triggered', () => {
    let result: DaffCategoryReducerState;
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

      result = daffCategoryReducer(daffCategoryInitialState, categoryLoadAction);
    });

    it('sets daffState to resolving', () => {
      expect(result.daffState).toEqual(DaffState.Resolving);
    });

    it('clears ID', () => {
      expect(result.id).toBeFalsy();
    });
  });

  describe('when CategoryPageLoadByUrlAction is triggered', () => {
    let result: DaffCategoryReducerState;
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

      result = daffCategoryReducer(daffCategoryInitialState, categoryLoadAction);
    });

    it('sets daffState to resolving', () => {
      expect(result.daffState).toEqual(DaffState.Resolving);
    });

    it('clears ID', () => {
      expect(result.id).toBeFalsy();
    });
  });

  describe('when CategoryPageLoadSuccessAction is triggered', () => {
    let result: DaffCategoryReducerState;
    let state: DaffCategoryReducerState;

    beforeEach(() => {
      state = {
        ...daffCategoryInitialState,
      };
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
    let result: DaffCategoryReducerState;
    let state: DaffCategoryReducerState;

    beforeEach(() => {
      state = {
        ...daffCategoryInitialState,
        daffErrors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const categoryLoadFailure = new DaffCategoryPageLoadFailure(error);

      result = daffCategoryReducer(state, categoryLoadFailure);
    });

    it('adds an error to errors', () => {
      expect(result.daffErrors.length).toEqual(1);
      expect(result.daffErrors).toEqual([error]);
    });

    it('sets daffState to error', () => {
      expect(result.daffState).toEqual(DaffState.Error);
    });
  });
});
