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
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';
import {
  DaffProductFilterEqual,
  DaffProductFilterEqualOption,
  DaffProductFilterRangeNumeric,
  DaffProductFilterRangePair,
  DaffProductFilterEqualRequest,
  DaffProductFilterEqualToggleRequest,
  DaffProductFilterRangeNumericRequest,
  DaffProductFilterRangeNumericToggleRequest,
  DaffProductFilterRangeRequestOption,
  daffProductFilterArrayToDict,
  daffProductFilterEqualOptionArrayToDict,
  daffProductFilterRangePairArrayToDict,
  daffProductComputeFilterRangePairLabel,
  daffIsFilterApplied,
  daffProductFiltersToRequests,
} from '@daffodil/product';
import {
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
  DaffProductFilterRangeNumericFactory,
  DaffProductFilterRangeNumericPairFactory,
  DaffProductFilterRequestEqualFactory,
  DaffProductFilterRequestRangeNumericFactory,
  DaffProductFilterRangeNumericRequestOptionFactory,
  DaffProductFilterToggleRequestEqualFactory,
  DaffProductFilterToggleRequestRangeNumericFactory,
} from '@daffodil/product/testing';

import {
  daffCategoryReducer,
  initialState,
} from './category.reducer';

describe('Category | Category Reducer', () => {

  let categoryFactory: DaffCategoryFactory;
  let categoryPageMetadataFactory: DaffCategoryPageMetadataFactory;
  let equalFilterFactory: DaffProductFilterEqualFactory;
  let equalOptionFactory: DaffProductFilterEqualOptionFactory;
  let rangeFilterFactory: DaffProductFilterRangeNumericFactory;
  let rangePairFactory: DaffProductFilterRangeNumericPairFactory;
  let equalFilterRequestFactory: DaffProductFilterRequestEqualFactory;
  let equalFilterToggleRequestFactory: DaffProductFilterToggleRequestEqualFactory;
  let rangeFilterRequestFactory: DaffProductFilterRequestRangeNumericFactory;
  let rangeFilterToggleRequestFactory: DaffProductFilterToggleRequestRangeNumericFactory;
  let rangeFilterRequestOptionFactory: DaffProductFilterRangeNumericRequestOptionFactory;

  let categoryPageMetadata: DaffCategoryPageMetadata;
  let category: DaffCategory;
  let currentEqualFilter: DaffProductFilterEqual;
  let currentAppliedEqualFilterOption: DaffProductFilterEqualOption;
  let currentUnappliedEqualFilterOption: DaffProductFilterEqualOption;
  let currentRangeFilter: DaffProductFilterRangeNumeric;
  let currentRangeFilterPair: DaffProductFilterRangePair<number>;
  let currentRangeFilterPairLabel: string;
  let equalFilterRequest: DaffProductFilterEqualRequest;
  let equalFilterToggleRequest: DaffProductFilterEqualToggleRequest;
  let rangeFilterRequest: DaffProductFilterRangeNumericRequest;
  let rangeFilterToggleRequest: DaffProductFilterRangeNumericToggleRequest;
  let rangeFilterRequestOption: DaffProductFilterRangeRequestOption<number>;
  let rangeFilterRequestOptionLabel: string;
  let categoryId: string;

  beforeEach(() => {
    categoryFactory = TestBed.inject(DaffCategoryFactory);
    categoryPageMetadataFactory = TestBed.inject(DaffCategoryPageMetadataFactory);
    equalFilterFactory = TestBed.inject(DaffProductFilterEqualFactory);
    equalOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffProductFilterRangeNumericFactory);
    rangePairFactory = TestBed.inject(DaffProductFilterRangeNumericPairFactory);
    equalFilterRequestFactory = TestBed.inject(DaffProductFilterRequestEqualFactory);
    equalFilterToggleRequestFactory = TestBed.inject(DaffProductFilterToggleRequestEqualFactory);
    rangeFilterRequestFactory = TestBed.inject(DaffProductFilterRequestRangeNumericFactory);
    rangeFilterToggleRequestFactory = TestBed.inject(DaffProductFilterToggleRequestRangeNumericFactory);
    rangeFilterRequestOptionFactory = TestBed.inject(DaffProductFilterRangeNumericRequestOptionFactory);

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
    let stateUnderTest: DaffCategoryReducerState;

    beforeEach(() => {
      currentEqualFilter = equalFilterFactory.create();
      equalFilterToggleRequest = equalFilterToggleRequestFactory.create({
        name: currentEqualFilter.name,
      });
      stateUnderTest = {
        ...initialState,
        categoryPageMetadata: {
          ...initialState.categoryPageMetadata,
          filters: daffProductFilterArrayToDict([
            currentEqualFilter,
          ]),
        },
      };
      const toggleCategoryFilter: DaffCategoryPageToggleFilter = new DaffCategoryPageToggleFilter(equalFilterToggleRequest);
      result = daffCategoryReducer(stateUnderTest, toggleCategoryFilter);
    });

    describe('and the equal filter is already applied', () => {
      beforeEach(() => {
        currentAppliedEqualFilterOption = equalOptionFactory.create({
          applied: true,
        });
        currentEqualFilter = equalFilterFactory.create({
          options: daffProductFilterEqualOptionArrayToDict([
            currentAppliedEqualFilterOption,
          ]),
        });
        equalFilterToggleRequest = equalFilterToggleRequestFactory.create({
          name: currentEqualFilter.name,
          value: currentAppliedEqualFilterOption.value,
        });
        stateUnderTest = {
          ...initialState,
          categoryPageMetadata: {
            ...initialState.categoryPageMetadata,
            filters: daffProductFilterArrayToDict([
              currentEqualFilter,
            ]),
          },
        };
        const categoryToggleFilterAction = new DaffCategoryPageToggleFilter(equalFilterToggleRequest);
        result = daffCategoryReducer(stateUnderTest, categoryToggleFilterAction);
      });

      it('should remove the requested filters and filter options', () => {
        expect(result.categoryPageMetadata.filters[equalFilterToggleRequest.name].options[equalFilterToggleRequest.value].applied).toBeFalse();
      });
    });

    describe('and the range filter is already applied', () => {
      let categoryToggleFilterAction: DaffCategoryPageToggleFilter;

      beforeEach(() => {
        currentRangeFilterPair = rangePairFactory.create();
        currentRangeFilter = rangeFilterFactory.create({
          options: daffProductFilterRangePairArrayToDict([currentRangeFilterPair]),
        });
        rangeFilterToggleRequest = rangeFilterToggleRequestFactory.create({
          name: currentRangeFilter.name,
          value: {
            min: currentRangeFilterPair.min.value,
            max: currentRangeFilterPair.max.value,
          },
        });
        stateUnderTest = {
          ...initialState,
          categoryPageMetadata: {
            ...initialState.categoryPageMetadata,
            filters: daffProductFilterArrayToDict([
              currentRangeFilter,
            ]),
          },
        };
        categoryToggleFilterAction = new DaffCategoryPageToggleFilter(rangeFilterToggleRequest);
        result = daffCategoryReducer(stateUnderTest, categoryToggleFilterAction);
      });

      it('should remove the requested filters and filter options', () => {
        expect(result.categoryPageMetadata.filters[rangeFilterToggleRequest.name].options).toEqual({});
      });
    });

    describe('and the equal filter is not applied', () => {
      let categoryToggleFilterAction: DaffCategoryPageToggleFilter;

      beforeEach(() => {
        currentUnappliedEqualFilterOption = equalOptionFactory.create({
          applied: false,
        });
        currentEqualFilter = equalFilterFactory.create({
          options: daffProductFilterEqualOptionArrayToDict([
            currentUnappliedEqualFilterOption,
          ]),
        });
        equalFilterToggleRequest = equalFilterToggleRequestFactory.create({
          name: currentEqualFilter.name,
          value: currentUnappliedEqualFilterOption.value,
        });
        stateUnderTest = {
          ...initialState,
          categoryPageMetadata: {
            ...initialState.categoryPageMetadata,
            filters: daffProductFilterArrayToDict([
              currentEqualFilter,
            ]),
          },
        };
        categoryToggleFilterAction = new DaffCategoryPageToggleFilter(equalFilterToggleRequest);
        result = daffCategoryReducer(stateUnderTest, categoryToggleFilterAction);
      });

      it('should apply the filter', () => {
        expect(result.categoryPageMetadata.filters[equalFilterToggleRequest.name].options[equalFilterToggleRequest.value].applied).toBeTrue();
      });
    });

    describe('and the range filter is not applied', () => {
      let categoryToggleFilterAction: DaffCategoryPageToggleFilter;

      beforeEach(() => {
        currentRangeFilter = rangeFilterFactory.create();
        rangeFilterRequestOption = rangeFilterRequestOptionFactory.create();
        rangeFilterToggleRequest = rangeFilterToggleRequestFactory.create({
          value: rangeFilterRequestOption,
          name: currentRangeFilter.name,
        });
        rangeFilterRequestOptionLabel = daffProductComputeFilterRangePairLabel(rangeFilterRequestOption.min, rangeFilterRequestOption.max);
        stateUnderTest = {
          ...initialState,
          categoryPageMetadata: {
            ...initialState.categoryPageMetadata,
            filters: daffProductFilterArrayToDict([
              currentRangeFilter,
            ]),
          },
        };
        categoryToggleFilterAction = new DaffCategoryPageToggleFilter(rangeFilterToggleRequest);
        result = daffCategoryReducer(stateUnderTest, categoryToggleFilterAction);
      });

      it('should apply the filter', () => {
        expect(result.categoryPageMetadata.filters[rangeFilterToggleRequest.name].options[rangeFilterRequestOptionLabel].applied).toBeTrue();
      });
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
        options: daffProductFilterEqualOptionArrayToDict([
          currentAppliedEqualFilterOption,
          currentUnappliedEqualFilterOption,
        ]),
      });
      currentRangeFilterPair = rangePairFactory.create();
      currentRangeFilter = rangeFilterFactory.create({
        options: daffProductFilterRangePairArrayToDict([currentRangeFilterPair]),
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
      currentRangeFilterPairLabel = daffProductComputeFilterRangePairLabel(currentRangeFilterPair.min.value, currentRangeFilterPair.max.value);
      rangeFilterRequestOptionLabel = daffProductComputeFilterRangePairLabel(rangeFilterRequestOption.min, rangeFilterRequestOption.max);
      stateUnderTest = {
        ...initialState,
        categoryPageMetadata: {
          ...initialState.categoryPageMetadata,
          filters: daffProductFilterArrayToDict([
            currentEqualFilter,
            currentRangeFilter,
          ]),
        },
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

    it('should apply the requested options', () => {
      equalFilterRequest.value.forEach(option => {
        expect(result.categoryPageMetadata.filters[equalFilterRequest.name].options[option].applied).toBeTrue();
      });
      expect(result.categoryPageMetadata.filters[rangeFilterRequest.name].options[rangeFilterRequestOptionLabel].applied).toBeTrue();
    });

    it('should remove the existing options', () => {
      expect(result.categoryPageMetadata.filters[currentEqualFilter.name].options[currentAppliedEqualFilterOption.value].applied).toBeFalse();
      expect(result.categoryPageMetadata.filters[rangeFilterRequest.name].options[currentRangeFilterPairLabel]?.applied).toBeFalsy();
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
        options: daffProductFilterEqualOptionArrayToDict([
          currentAppliedEqualFilterOption,
          currentUnappliedEqualFilterOption,
        ]),
      });
      currentRangeFilterPair = rangePairFactory.create();
      currentRangeFilter = rangeFilterFactory.create({
        options: daffProductFilterRangePairArrayToDict([currentRangeFilterPair]),
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
      rangeFilterRequestOptionLabel = daffProductComputeFilterRangePairLabel(rangeFilterRequestOption.min, rangeFilterRequestOption.max);
      stateUnderTest = {
        ...initialState,
        categoryPageMetadata: {
          ...initialState.categoryPageMetadata,
          filters: daffProductFilterArrayToDict([
            currentEqualFilter,
            currentRangeFilter,
          ]),
        },
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

    it('should apply the requested options', () => {
      equalFilterRequest.value.forEach(option => {
        expect(result.categoryPageMetadata.filters[equalFilterRequest.name].options[option].applied).toBeTrue();
      });
      expect(result.categoryPageMetadata.filters[rangeFilterRequest.name].options[
        daffProductComputeFilterRangePairLabel(rangeFilterRequestOption.min, rangeFilterRequestOption.max)
      ].applied).toBeTrue();
    });

    it('should remove the existing options', () => {
      expect(result.categoryPageMetadata.filters[currentEqualFilter.name].options[currentAppliedEqualFilterOption.value].applied).toBeFalse();
      expect(result.categoryPageMetadata.filters[rangeFilterRequest.name].options[
        daffProductComputeFilterRangePairLabel(currentRangeFilterPair.min.value, currentRangeFilterPair.max.value)
      ]).toBeFalsy();
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
        categoryPageMetadata: {
          ...initialState.categoryPageMetadata,
          filters: daffProductFilterArrayToDict([
            currentEqualFilter,
          ]),
        },
      };
      const applyCategoryFilters = new DaffCategoryPageApplyFilters([equalFilterRequest]);
      result = daffCategoryReducer(stateUnderTest, applyCategoryFilters);
    });

    describe('and the equal filter is already applied', () => {
      beforeEach(() => {
        currentAppliedEqualFilterOption = equalOptionFactory.create({
          applied: true,
        });
        currentUnappliedEqualFilterOption = equalOptionFactory.create({
          applied: false,
        });
        currentEqualFilter = equalFilterFactory.create({
          options: daffProductFilterEqualOptionArrayToDict([
            currentAppliedEqualFilterOption,
            currentUnappliedEqualFilterOption,
          ]),
        });
        equalFilterRequest = equalFilterRequestFactory.create({
          name: currentEqualFilter.name,
          value: [currentUnappliedEqualFilterOption.value],
        });
        stateUnderTest = {
          ...initialState,
          categoryPageMetadata: {
            ...initialState.categoryPageMetadata,
            filters: daffProductFilterArrayToDict([
              currentEqualFilter,
            ]),
          },
        };
        const applyCategoryFilters = new DaffCategoryPageApplyFilters([equalFilterRequest]);
        result = daffCategoryReducer(stateUnderTest, applyCategoryFilters);
      });

      it('should not remove the applied filter options', () => {
        expect(result.categoryPageMetadata.filters[equalFilterRequest.name].options[currentAppliedEqualFilterOption.value].applied).toBeTrue();
      });

      it('should apply the requested filter options', () => {
        equalFilterRequest.value.forEach(option => {
          expect(result.categoryPageMetadata.filters[equalFilterRequest.name].options[option].applied).toBeTrue();
        });
      });
    });

    describe('and the range filter is already applied with a different pair', () => {
      beforeEach(() => {
        currentRangeFilterPair = rangePairFactory.create();
        currentRangeFilter = rangeFilterFactory.create({
          options: daffProductFilterRangePairArrayToDict([currentRangeFilterPair]),
        });
        rangeFilterRequestOption = rangeFilterRequestOptionFactory.create();
        rangeFilterRequest = rangeFilterRequestFactory.create({
          value: rangeFilterRequestOption,
          name: currentRangeFilter.name,
        });
        currentRangeFilterPairLabel = daffProductComputeFilterRangePairLabel(currentRangeFilterPair.min.value, currentRangeFilterPair.max.value);
        rangeFilterRequestOptionLabel = daffProductComputeFilterRangePairLabel(rangeFilterRequestOption.min, rangeFilterRequestOption.max);
        stateUnderTest = {
          ...initialState,
          categoryPageMetadata: {
            ...initialState.categoryPageMetadata,
            filters: daffProductFilterArrayToDict([
              currentRangeFilter,
            ]),
          },
        };
        const applyCategoryFilters = new DaffCategoryPageApplyFilters([rangeFilterRequest]);
        result = daffCategoryReducer(stateUnderTest, applyCategoryFilters);
      });

      it('should remove the applied range filter option', () => {
        expect(result.categoryPageMetadata.filters[currentRangeFilter.name].options[currentRangeFilterPairLabel]?.applied).toBeFalsy();
      });

      it('should apply the requested filter option', () => {
        expect(result.categoryPageMetadata.filters[rangeFilterRequest.name].options[rangeFilterRequestOptionLabel].applied).toBeTrue();
      });
    });

    describe('and the requested filters are not applied', () => {
      beforeEach(() => {
        currentUnappliedEqualFilterOption = equalOptionFactory.create({
          applied: false,
        });
        currentEqualFilter = equalFilterFactory.create({
          options: daffProductFilterEqualOptionArrayToDict([
            currentUnappliedEqualFilterOption,
          ]),
        });
        currentRangeFilter = rangeFilterFactory.create();

        equalFilterRequest = equalFilterRequestFactory.create({
          name: currentEqualFilter.name,
          value: [currentUnappliedEqualFilterOption.value],
        });
        rangeFilterRequestOption = rangeFilterRequestOptionFactory.create();
        rangeFilterRequest = rangeFilterRequestFactory.create({
          name: currentRangeFilter.name,
          value: rangeFilterRequestOption,
        });
        rangeFilterRequestOptionLabel = daffProductComputeFilterRangePairLabel(rangeFilterRequestOption.min, rangeFilterRequestOption.max);
        stateUnderTest = {
          ...initialState,
          categoryPageMetadata: {
            ...initialState.categoryPageMetadata,
            filters: daffProductFilterArrayToDict([
              currentEqualFilter,
              currentRangeFilter,
            ]),
          },
        };
        const applyCategoryFilters = new DaffCategoryPageApplyFilters([
          equalFilterRequest,
          rangeFilterRequest,
        ]);
        result = daffCategoryReducer(stateUnderTest, applyCategoryFilters);
      });

      it('should apply the requested filter options', () => {
        equalFilterRequest.value.forEach(option => {
          expect(result.categoryPageMetadata.filters[equalFilterRequest.name].options[option].applied).toBeTrue();
        });
        expect(result.categoryPageMetadata.filters[rangeFilterRequest.name].options[rangeFilterRequestOptionLabel].applied).toBeTrue();
      });
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
        options: daffProductFilterEqualOptionArrayToDict([
          currentAppliedEqualFilterOption,
          currentUnappliedEqualFilterOption,
        ]),
      });
      currentRangeFilterPair = rangePairFactory.create();
      currentRangeFilter = rangeFilterFactory.create({
        options: daffProductFilterRangePairArrayToDict([currentRangeFilterPair]),
      });
      stateUnderTest = {
        ...initialState,
        categoryPageMetadata: {
          ...initialState.categoryPageMetadata,
          filters: daffProductFilterArrayToDict([
            currentEqualFilter,
            currentRangeFilter,
          ]),
        },
      };
      const clearCategoryFilters = new DaffCategoryPageClearFilters();
      result = daffCategoryReducer(stateUnderTest, clearCategoryFilters);
    });

    it('should unapply all filters', () => {
      Object.values(result.categoryPageMetadata.filters).forEach(filter => {
        expect(daffIsFilterApplied(filter)).toBeFalse();
      });
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
        categoryPageMetadata: {
          ...initialState.categoryPageMetadata,
          filters: daffProductFilterArrayToDict([currentEqualFilter]),
        },
      };

      const removeCategoryFilters = new DaffCategoryPageRemoveFilters([equalFilterRequest]);
      result = daffCategoryReducer(stateUnderTest, removeCategoryFilters);
    });

    describe('and the equal filter is already applied', () => {
      beforeEach(() => {
        currentAppliedEqualFilterOption = equalOptionFactory.create({
          applied: true,
        });
        currentEqualFilter = equalFilterFactory.create({
          options: daffProductFilterEqualOptionArrayToDict([
            currentAppliedEqualFilterOption,
          ]),
        });
        equalFilterRequest = equalFilterRequestFactory.create({
          name: currentEqualFilter.name,
          value: [currentAppliedEqualFilterOption.value],
        });
        stateUnderTest = {
          ...initialState,
          categoryPageMetadata: {
            ...initialState.categoryPageMetadata,
            filters: daffProductFilterArrayToDict([
              currentEqualFilter,
            ]),
          },
        };
        const removeCategoryFilters = new DaffCategoryPageRemoveFilters([equalFilterRequest]);
        result = daffCategoryReducer(stateUnderTest, removeCategoryFilters);
      });

      it('should remove the requested filter option', () => {
        expect(result.categoryPageMetadata.filters[equalFilterRequest.name].options[currentAppliedEqualFilterOption.value].applied).toBeFalse();
      });
    });

    describe('and the range filter is already applied', () => {
      beforeEach(() => {
        currentRangeFilterPair = rangePairFactory.create();
        currentRangeFilter = rangeFilterFactory.create({
          options: daffProductFilterRangePairArrayToDict([currentRangeFilterPair]),
        });
        rangeFilterRequestOption = rangeFilterRequestOptionFactory.create();
        rangeFilterRequest = rangeFilterRequestFactory.create({
          name: currentRangeFilter.name,
          value: {
            min: currentRangeFilterPair.min.value,
            max: currentRangeFilterPair.max.value,
          },
        });
        currentRangeFilterPairLabel = daffProductComputeFilterRangePairLabel(currentRangeFilterPair.min.value, currentRangeFilterPair.max.value);
        stateUnderTest = {
          ...initialState,
          categoryPageMetadata: {
            ...initialState.categoryPageMetadata,
            filters: daffProductFilterArrayToDict([
              currentRangeFilter,
            ]),
          },
        };
        const removeCategoryFilters = new DaffCategoryPageRemoveFilters([rangeFilterRequest]);
        result = daffCategoryReducer(stateUnderTest, removeCategoryFilters);
      });

      it('should remove the applied range filter option', () => {
        expect(result.categoryPageMetadata.filters[currentRangeFilter.name].options[currentRangeFilterPairLabel]?.applied).toBeFalsy();
      });
    });

    describe('and the requested filters are not applied', () => {
      beforeEach(() => {
        currentUnappliedEqualFilterOption = equalOptionFactory.create({
          applied: false,
        });
        currentEqualFilter = equalFilterFactory.create({
          options: daffProductFilterEqualOptionArrayToDict([
            currentUnappliedEqualFilterOption,
          ]),
        });
        currentRangeFilter = rangeFilterFactory.create();

        equalFilterRequest = equalFilterRequestFactory.create({
          name: currentEqualFilter.name,
          value: [currentUnappliedEqualFilterOption.value],
        });
        rangeFilterRequestOption = rangeFilterRequestOptionFactory.create();
        rangeFilterRequest = rangeFilterRequestFactory.create({
          value: rangeFilterRequestOption,
          name: currentRangeFilter.name,
        });
        stateUnderTest = {
          ...initialState,
          categoryPageMetadata: {
            ...initialState.categoryPageMetadata,
            filters: daffProductFilterArrayToDict([
              currentEqualFilter,
              currentRangeFilter,
            ]),
          },
        };
        const removeCategoryFilters = new DaffCategoryPageRemoveFilters([
          equalFilterRequest,
          rangeFilterRequest,
        ]);
        result = daffCategoryReducer(stateUnderTest, removeCategoryFilters);
      });

      it('should not change filters', () => {
        expect(result.categoryPageMetadata.filters).toEqual(stateUnderTest.categoryPageMetadata.filters);
      });
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
        page_size: categoryPageMetadata.page_size,
        filter_requests: daffProductFiltersToRequests(categoryPageMetadata.filters),
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

    it('sets the included parameters on categoryPageMetadata from the request', () => {
      expect(result.categoryPageMetadata.page_size).toEqual(categoryRequest.page_size);
      expect(result.categoryPageMetadata.current_page).toEqual(categoryRequest.current_page);
      expect(result.categoryPageMetadata.applied_sort_direction).toEqual(categoryRequest.applied_sort_direction);
      expect(result.categoryPageMetadata.applied_sort_option).toEqual(categoryRequest.applied_sort_option);
    });

    it('resets categoryPageMetadata ID', () => {
      expect(result.categoryPageMetadata.id).toBeNull();
    });

    it('doesn\'t set the filter requests on categoryPageMetadata', () => {
      expect(result.categoryPageMetadata.filter_requests).not.toEqual(categoryRequest.filter_requests);
    });

    it('resets all the filters in state to an empty object', () => {
      expect(result.categoryPageMetadata.filters).toEqual({});
    });

    it('sets daffState to resolving', () => {
      expect(result.daffState).toEqual(DaffState.Resolving);
    });

    describe('when fields are missing from the request', () => {
      beforeEach(() => {
        categoryRequest = {
          kind: DaffCategoryRequestKind.ID,
          id: categoryId,
        };
        const categoryLoadAction: DaffCategoryPageLoad = new DaffCategoryPageLoad(categoryRequest);

        result = daffCategoryReducer(undefined, categoryLoadAction);
      });

      it('sets the missing parameters on categoryPageMetadata from initial state', () => {
        expect(result.categoryPageMetadata.page_size).toEqual(initialState.categoryPageMetadata.page_size);
        expect(result.categoryPageMetadata.current_page).toEqual(initialState.categoryPageMetadata.current_page);
        expect(result.categoryPageMetadata.applied_sort_direction).toEqual(initialState.categoryPageMetadata.applied_sort_direction);
        expect(result.categoryPageMetadata.applied_sort_option).toEqual(initialState.categoryPageMetadata.applied_sort_option);
      });
    });
  });

  describe('when CategoryPageLoadByUrlAction is triggered', () => {
    let result;
    let categoryRequest: DaffCategoryUrlRequest;

    beforeEach(() => {
      categoryRequest = {
        kind: DaffCategoryRequestKind.URL,
        url: category.url,
        page_size: categoryPageMetadata.page_size,
        filter_requests: daffProductFiltersToRequests(categoryPageMetadata.filters),
        applied_sort_option: categoryPageMetadata.applied_sort_option,
        applied_sort_direction: categoryPageMetadata.applied_sort_direction,
        current_page: categoryPageMetadata.current_page,
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

    it('sets the included parameters on categoryPageMetadata from the request', () => {
      expect(result.categoryPageMetadata.page_size).toEqual(categoryRequest.page_size);
      expect(result.categoryPageMetadata.current_page).toEqual(categoryRequest.current_page);
      expect(result.categoryPageMetadata.applied_sort_direction).toEqual(categoryRequest.applied_sort_direction);
      expect(result.categoryPageMetadata.applied_sort_option).toEqual(categoryRequest.applied_sort_option);
    });

    it('resets categoryPageMetadata ID', () => {
      expect(result.categoryPageMetadata.id).toBeNull();
    });

    it('doesn\'t set the filter requests on categoryPageMetadata', () => {
      expect(result.categoryPageMetadata.filter_requests).not.toEqual(categoryRequest.filter_requests);
    });

    it('resets all the filters in state to an empty object', () => {
      expect(result.categoryPageMetadata.filters).toEqual({});
    });

    it('sets daffState to resolving', () => {
      expect(result.daffState).toEqual(DaffState.Resolving);
    });

    describe('when fields are missing from the request', () => {
      beforeEach(() => {
        categoryRequest = {
          kind: DaffCategoryRequestKind.URL,
          url: category.url,
        };
        const categoryLoadAction: DaffCategoryPageLoadByUrl = new DaffCategoryPageLoadByUrl(categoryRequest);

        result = daffCategoryReducer(undefined, categoryLoadAction);
      });

      it('sets the missing parameters on categoryPageMetadata from initial state', () => {
        expect(result.categoryPageMetadata.page_size).toEqual(initialState.categoryPageMetadata.page_size);
        expect(result.categoryPageMetadata.current_page).toEqual(initialState.categoryPageMetadata.current_page);
        expect(result.categoryPageMetadata.applied_sort_direction).toEqual(initialState.categoryPageMetadata.applied_sort_direction);
        expect(result.categoryPageMetadata.applied_sort_option).toEqual(initialState.categoryPageMetadata.applied_sort_option);
      });
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
      beforeEach(() => {
        state = {
          ...state,
          categoryPageMetadata: {
            ...state.categoryPageMetadata,
            applied_sort_option: null,
          },
        };
      });

      it('sets categoryPageMetadata with the default sorting option', () => {
        const categoryLoadSuccess = new DaffCategoryPageLoadSuccess({ category, categoryPageMetadata, products: []});
        result = daffCategoryReducer(state, categoryLoadSuccess);

        expect(result.categoryPageMetadata).toEqual({
          ...categoryPageMetadata,
          applied_sort_option: categoryPageMetadata.sort_options.default,
        });
      });
    });

    describe('when an applied_sort_option is set in state', () => {
      let selectedOption;

      beforeEach(() => {
        selectedOption = 'selectedOption';
        state = {
          ...state,
          categoryPageMetadata: {
            ...state.categoryPageMetadata,
            applied_sort_option: selectedOption,
          },
        };
      });

      it('sets the categoryPageMetadata with the applied_sort_option', () => {
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
