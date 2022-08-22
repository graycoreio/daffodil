import { TestBed } from '@angular/core/testing';

import {
  DaffCategory,
  DaffCategoryPageMetadata,
  DaffCategoryIdRequest,
  DaffCategoryRequestKind,
  DaffCategoryUrlRequest,
} from '@daffodil/category';
import {
  DaffCategoryPageMetadataReducerState,
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
  daffCategoryPageMetadataReducer,
  initialState,
} from './reducer';

describe('@daffodil/category/state | daffCategoryPageMetadataReducer', () => {
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

      const result = daffCategoryPageMetadataReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when ChangeCategoryPageSizeAction is triggered', () => {
    let result;

    beforeEach(() => {
      const changeCategoryPageSize: DaffCategoryPageChangePageSize = new DaffCategoryPageChangePageSize(3);

      result = daffCategoryPageMetadataReducer(initialState, changeCategoryPageSize);
    });

    it('should set the categoryPageMetadata page size', () => {
      expect(result.pageSize).toEqual(3);
    });
  });

  describe('when ChangeCategoryCurrentPageAction is triggered', () => {
    let result;

    beforeEach(() => {
      const changeCategoryCurrentPage: DaffCategoryPageChangeCurrentPage = new DaffCategoryPageChangeCurrentPage(3);

      result = daffCategoryPageMetadataReducer(initialState, changeCategoryCurrentPage);
    });

    it('should set the categoryPageMetadata current page', () => {
      expect(result.currentPage).toEqual(3);
    });
  });

  describe('when ChangeCategorySortingOptionAction is triggered', () => {
    let result;

    beforeEach(() => {
      const changeCategorySortingOption: DaffCategoryPageChangeSortingOption = new DaffCategoryPageChangeSortingOption({
        option: 'option',
        direction: DaffSortDirectionEnum.Ascending,
      });

      result = daffCategoryPageMetadataReducer(initialState, changeCategorySortingOption);
    });

    it('should set the categoryPageMetadata applied sort option', () => {
      expect(result.appliedSortOption).toEqual('option');
    });

    it('should set the categoryPageMetadata applied sort direction', () => {
      expect(result.appliedSortDirection).toEqual(DaffSortDirectionEnum.Ascending);
    });
  });

  describe('when CategoryPageToggleFiltersAction is triggered', () => {
    let result: DaffCategoryPageMetadataReducerState;
    let stateUnderTest: DaffCategoryPageMetadataReducerState;

    beforeEach(() => {
      currentEqualFilter = equalFilterFactory.create();
      equalFilterToggleRequest = equalFilterToggleRequestFactory.create({
        name: currentEqualFilter.name,
      });
      stateUnderTest = {
        ...initialState,
        filters: daffProductFilterArrayToDict([
          currentEqualFilter,
        ]),
      };
      const toggleCategoryFilter: DaffCategoryPageToggleFilter = new DaffCategoryPageToggleFilter(equalFilterToggleRequest);
      result = daffCategoryPageMetadataReducer(stateUnderTest, toggleCategoryFilter);
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
          filters: daffProductFilterArrayToDict([
            currentEqualFilter,
          ]),
        };
        const categoryToggleFilterAction = new DaffCategoryPageToggleFilter(equalFilterToggleRequest);
        result = daffCategoryPageMetadataReducer(stateUnderTest, categoryToggleFilterAction);
      });

      it('should remove the requested filters and filter options', () => {
        expect(result.filters[equalFilterToggleRequest.name].options[equalFilterToggleRequest.value].applied).toBeFalse();
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
          filters: daffProductFilterArrayToDict([
            currentRangeFilter,
          ]),
        };
        categoryToggleFilterAction = new DaffCategoryPageToggleFilter(rangeFilterToggleRequest);
        result = daffCategoryPageMetadataReducer(stateUnderTest, categoryToggleFilterAction);
      });

      it('should remove the requested filters and filter options', () => {
        expect(result.filters[rangeFilterToggleRequest.name].options).toEqual({});
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
          filters: daffProductFilterArrayToDict([
            currentEqualFilter,
          ]),
        };
        categoryToggleFilterAction = new DaffCategoryPageToggleFilter(equalFilterToggleRequest);
        result = daffCategoryPageMetadataReducer(stateUnderTest, categoryToggleFilterAction);
      });

      it('should apply the filter', () => {
        expect(result.filters[equalFilterToggleRequest.name].options[equalFilterToggleRequest.value].applied).toBeTrue();
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
          filters: daffProductFilterArrayToDict([
            currentRangeFilter,
          ]),
        };
        categoryToggleFilterAction = new DaffCategoryPageToggleFilter(rangeFilterToggleRequest);
        result = daffCategoryPageMetadataReducer(stateUnderTest, categoryToggleFilterAction);
      });

      it('should apply the filter', () => {
        expect(result.filters[rangeFilterToggleRequest.name].options[rangeFilterRequestOptionLabel].applied).toBeTrue();
      });
    });
  });

  describe('when CategoryPageChangeFiltersAction is triggered', () => {
    let result: DaffCategoryPageMetadataReducerState;
    let stateUnderTest: DaffCategoryPageMetadataReducerState;

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
        filters: daffProductFilterArrayToDict([
          currentEqualFilter,
          currentRangeFilter,
        ]),
      };

      const changeCategoryFilters = new DaffCategoryPageChangeFilters([
        equalFilterRequest,
        rangeFilterRequest,
      ]);

      result = daffCategoryPageMetadataReducer(stateUnderTest, changeCategoryFilters);
    });

    it('should apply the requested options', () => {
      equalFilterRequest.value.forEach(option => {
        expect(result.filters[equalFilterRequest.name].options[option].applied).toBeTrue();
      });
      expect(result.filters[rangeFilterRequest.name].options[rangeFilterRequestOptionLabel].applied).toBeTrue();
    });

    it('should remove the existing options', () => {
      expect(result.filters[currentEqualFilter.name].options[currentAppliedEqualFilterOption.value].applied).toBeFalse();
      expect(result.filters[rangeFilterRequest.name].options[currentRangeFilterPairLabel]?.applied).toBeFalsy();
    });
  });

  describe('when CategoryPageReplaceFiltersAction is triggered', () => {
    let result: DaffCategoryPageMetadataReducerState;
    let stateUnderTest: DaffCategoryPageMetadataReducerState;

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
        filters: daffProductFilterArrayToDict([
          currentEqualFilter,
          currentRangeFilter,
        ]),
      };

      const replaceCategoryFilters = new DaffCategoryPageReplaceFilters([
        equalFilterRequest,
        rangeFilterRequest,
      ]);

      result = daffCategoryPageMetadataReducer(stateUnderTest, replaceCategoryFilters);
    });

    it('should apply the requested options', () => {
      equalFilterRequest.value.forEach(option => {
        expect(result.filters[equalFilterRequest.name].options[option].applied).toBeTrue();
      });
      expect(result.filters[rangeFilterRequest.name].options[
        daffProductComputeFilterRangePairLabel(rangeFilterRequestOption.min, rangeFilterRequestOption.max)
      ].applied).toBeTrue();
    });

    it('should remove the existing options', () => {
      expect(result.filters[currentEqualFilter.name].options[currentAppliedEqualFilterOption.value].applied).toBeFalse();
      expect(result.filters[rangeFilterRequest.name].options[
        daffProductComputeFilterRangePairLabel(currentRangeFilterPair.min.value, currentRangeFilterPair.max.value)
      ]).toBeFalsy();
    });
  });

  describe('when CategoryPageApplyFiltersAction is triggered', () => {
    let result: DaffCategoryPageMetadataReducerState;
    let stateUnderTest: DaffCategoryPageMetadataReducerState;

    beforeEach(() => {
      currentEqualFilter = equalFilterFactory.create();
      equalFilterRequest = equalFilterRequestFactory.create({
        name: currentEqualFilter.name,
      });
      stateUnderTest = {
        ...initialState,
        filters: daffProductFilterArrayToDict([
          currentEqualFilter,
        ]),
      };
      const applyCategoryFilters = new DaffCategoryPageApplyFilters([equalFilterRequest]);
      result = daffCategoryPageMetadataReducer(stateUnderTest, applyCategoryFilters);
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
          filters: daffProductFilterArrayToDict([
            currentEqualFilter,
          ]),
        };
        const applyCategoryFilters = new DaffCategoryPageApplyFilters([equalFilterRequest]);
        result = daffCategoryPageMetadataReducer(stateUnderTest, applyCategoryFilters);
      });

      it('should not remove the applied filter options', () => {
        expect(result.filters[equalFilterRequest.name].options[currentAppliedEqualFilterOption.value].applied).toBeTrue();
      });

      it('should apply the requested filter options', () => {
        equalFilterRequest.value.forEach(option => {
          expect(result.filters[equalFilterRequest.name].options[option].applied).toBeTrue();
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
          filters: daffProductFilterArrayToDict([
            currentRangeFilter,
          ]),
        };
        const applyCategoryFilters = new DaffCategoryPageApplyFilters([rangeFilterRequest]);
        result = daffCategoryPageMetadataReducer(stateUnderTest, applyCategoryFilters);
      });

      it('should remove the applied range filter option', () => {
        expect(result.filters[currentRangeFilter.name].options[currentRangeFilterPairLabel]?.applied).toBeFalsy();
      });

      it('should apply the requested filter option', () => {
        expect(result.filters[rangeFilterRequest.name].options[rangeFilterRequestOptionLabel].applied).toBeTrue();
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
          filters: daffProductFilterArrayToDict([
            currentEqualFilter,
            currentRangeFilter,
          ]),
        };
        const applyCategoryFilters = new DaffCategoryPageApplyFilters([
          equalFilterRequest,
          rangeFilterRequest,
        ]);
        result = daffCategoryPageMetadataReducer(stateUnderTest, applyCategoryFilters);
      });

      it('should apply the requested filter options', () => {
        equalFilterRequest.value.forEach(option => {
          expect(result.filters[equalFilterRequest.name].options[option].applied).toBeTrue();
        });
        expect(result.filters[rangeFilterRequest.name].options[rangeFilterRequestOptionLabel].applied).toBeTrue();
      });
    });
  });

  describe('when CategoryPageClearFiltersAction is triggered', () => {
    let result: DaffCategoryPageMetadataReducerState;
    let stateUnderTest: DaffCategoryPageMetadataReducerState;

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
        filters: daffProductFilterArrayToDict([
          currentEqualFilter,
          currentRangeFilter,
        ]),
      };
      const clearCategoryFilters = new DaffCategoryPageClearFilters();
      result = daffCategoryPageMetadataReducer(stateUnderTest, clearCategoryFilters);
    });

    it('should unapply all filters', () => {
      Object.values(result.filters).forEach(filter => {
        expect(daffIsFilterApplied(filter)).toBeFalse();
      });
    });
  });

  describe('when CategoryPageRemoveFiltersAction is triggered', () => {
    let result: DaffCategoryPageMetadataReducerState;
    let stateUnderTest: DaffCategoryPageMetadataReducerState;

    beforeEach(() => {
      currentEqualFilter = equalFilterFactory.create();
      equalFilterRequest = equalFilterRequestFactory.create({
        name: currentEqualFilter.name,
      });

      stateUnderTest = {
        ...initialState,
        filters: daffProductFilterArrayToDict([currentEqualFilter]),
      };

      const removeCategoryFilters = new DaffCategoryPageRemoveFilters([equalFilterRequest]);
      result = daffCategoryPageMetadataReducer(stateUnderTest, removeCategoryFilters);
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
          filters: daffProductFilterArrayToDict([
            currentEqualFilter,
          ]),
        };
        const removeCategoryFilters = new DaffCategoryPageRemoveFilters([equalFilterRequest]);
        result = daffCategoryPageMetadataReducer(stateUnderTest, removeCategoryFilters);
      });

      it('should remove the requested filter option', () => {
        expect(result.filters[equalFilterRequest.name].options[currentAppliedEqualFilterOption.value].applied).toBeFalse();
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
          filters: daffProductFilterArrayToDict([
            currentRangeFilter,
          ]),
        };
        const removeCategoryFilters = new DaffCategoryPageRemoveFilters([rangeFilterRequest]);
        result = daffCategoryPageMetadataReducer(stateUnderTest, removeCategoryFilters);
      });

      it('should remove the applied range filter option', () => {
        expect(result.filters[currentRangeFilter.name].options[currentRangeFilterPairLabel]?.applied).toBeFalsy();
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
          filters: daffProductFilterArrayToDict([
            currentEqualFilter,
            currentRangeFilter,
          ]),
        };
        const removeCategoryFilters = new DaffCategoryPageRemoveFilters([
          equalFilterRequest,
          rangeFilterRequest,
        ]);
        result = daffCategoryPageMetadataReducer(stateUnderTest, removeCategoryFilters);
      });

      it('should not change filters', () => {
        expect(result.filters).toEqual(stateUnderTest.filters);
      });
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
        filterRequests: daffProductFiltersToRequests(categoryPageMetadata.filters),
        appliedSortOption: categoryPageMetadata.appliedSortOption,
        appliedSortDirection: categoryPageMetadata.appliedSortDirection,
        currentPage: categoryPageMetadata.currentPage,
      };
      const categoryLoadAction: DaffCategoryPageLoad = new DaffCategoryPageLoad(categoryRequest);

      result = daffCategoryPageMetadataReducer(initialState, categoryLoadAction);
    });

    it('sets the included parameters on categoryPageMetadata from the request', () => {
      expect(result.pageSize).toEqual(categoryRequest.pageSize);
      expect(result.currentPage).toEqual(categoryRequest.currentPage);
      expect(result.appliedSortDirection).toEqual(categoryRequest.appliedSortDirection);
      expect(result.appliedSortOption).toEqual(categoryRequest.appliedSortOption);
    });

    it('resets categoryPageMetadata ID', () => {
      expect(result.id).toBeNull();
    });

    it('doesn\'t set the filter requests on categoryPageMetadata', () => {
      expect(result.filterRequests).not.toEqual(categoryRequest.filterRequests);
    });

    it('resets all the filters in state to an empty object', () => {
      expect(result.filters).toEqual({});
    });

    describe('when fields are missing from the request', () => {
      beforeEach(() => {
        categoryRequest = {
          kind: DaffCategoryRequestKind.ID,
          id: categoryId,
        };
        const categoryLoadAction: DaffCategoryPageLoad = new DaffCategoryPageLoad(categoryRequest);

        result = daffCategoryPageMetadataReducer(undefined, categoryLoadAction);
      });

      it('sets the missing parameters on categoryPageMetadata from initial state', () => {
        expect(result.pageSize).toEqual(initialState.pageSize);
        expect(result.currentPage).toEqual(initialState.currentPage);
        expect(result.appliedSortDirection).toEqual(initialState.appliedSortDirection);
        expect(result.appliedSortOption).toEqual(initialState.appliedSortOption);
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
        pageSize: categoryPageMetadata.pageSize,
        filterRequests: daffProductFiltersToRequests(categoryPageMetadata.filters),
        appliedSortOption: categoryPageMetadata.appliedSortOption,
        appliedSortDirection: categoryPageMetadata.appliedSortDirection,
        currentPage: categoryPageMetadata.currentPage,
      };
      const categoryLoadAction: DaffCategoryPageLoadByUrl = new DaffCategoryPageLoadByUrl(categoryRequest);

      result = daffCategoryPageMetadataReducer(initialState, categoryLoadAction);
    });

    it('sets the included parameters on categoryPageMetadata from the request', () => {
      expect(result.pageSize).toEqual(categoryRequest.pageSize);
      expect(result.currentPage).toEqual(categoryRequest.currentPage);
      expect(result.appliedSortDirection).toEqual(categoryRequest.appliedSortDirection);
      expect(result.appliedSortOption).toEqual(categoryRequest.appliedSortOption);
    });

    it('resets categoryPageMetadata ID', () => {
      expect(result.id).toBeNull();
    });

    it('doesn\'t set the filter requests on categoryPageMetadata', () => {
      expect(result.filterRequests).not.toEqual(categoryRequest.filterRequests);
    });

    it('resets all the filters in state to an empty object', () => {
      expect(result.filters).toEqual({});
    });

    describe('when fields are missing from the request', () => {
      beforeEach(() => {
        categoryRequest = {
          kind: DaffCategoryRequestKind.URL,
          url: category.url,
        };
        const categoryLoadAction: DaffCategoryPageLoadByUrl = new DaffCategoryPageLoadByUrl(categoryRequest);

        result = daffCategoryPageMetadataReducer(undefined, categoryLoadAction);
      });

      it('sets the missing parameters on categoryPageMetadata from initial state', () => {
        expect(result.pageSize).toEqual(initialState.pageSize);
        expect(result.currentPage).toEqual(initialState.currentPage);
        expect(result.appliedSortDirection).toEqual(initialState.appliedSortDirection);
        expect(result.appliedSortOption).toEqual(initialState.appliedSortOption);
      });
    });
  });

  describe('when CategoryPageLoadSuccessAction is triggered', () => {

    let result: DaffCategoryPageMetadataReducerState;
    let state: DaffCategoryPageMetadataReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
      };
    });

    describe('when an appliedSortOption is not set in the response', () => {
      it('sets categoryPageMetadata with the default sorting option', () => {
        const categoryLoadSuccess = new DaffCategoryPageLoadSuccess({ category, categoryPageMetadata: {
          ...categoryPageMetadata,
          id: category.id,
          appliedSortOption: null,
        }, products: []});
        result = daffCategoryPageMetadataReducer(state, categoryLoadSuccess);

        expect(result).toEqual({
          ...categoryPageMetadata,
          id: category.id,
          appliedSortOption: categoryPageMetadata.sortOptions.default,
        });
      });
    });

    describe('when an appliedSortOption is set in the response', () => {
      let selectedOption;

      beforeEach(() => {
        selectedOption = 'selectedOption';
      });

      it('sets the categoryPageMetadata with the appliedSortOption', () => {
        const categoryLoadSuccess = new DaffCategoryPageLoadSuccess({ category, categoryPageMetadata: {
          ...categoryPageMetadata,
          id: category.id,
          appliedSortOption: selectedOption,
        }, products: []});
        result = daffCategoryPageMetadataReducer(state, categoryLoadSuccess);
        expect(result).toEqual({
          ...categoryPageMetadata,
          id: category.id,
          appliedSortOption: selectedOption,
        });
      });
    });
  });
});
