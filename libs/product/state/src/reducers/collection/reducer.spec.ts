import { TestBed } from '@angular/core/testing';
import { Action } from '@ngrx/store';

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
  DaffProductCollectionRequest,
  DaffProductFilterRequest,
  DaffProductFilterToggleRequest,
  DaffProductCollectionResponse,
  DaffProductCollectionMetadata,
} from '@daffodil/product';
import {
  DaffProductCollectionActionKinds,
  DaffProductCollectionActions,
  DaffProductCollectionActionTypes,
  DaffProductCollectionApplyFilters,
  DaffProductCollectionChangeCurrentPage,
  DaffProductCollectionChangePageSize,
  DaffProductCollectionChangeSortingOption,
  DaffProductCollectionClearFilters,
  DaffProductCollectionReducerState,
  DaffProductCollectionRemoveFilters,
  DaffProductCollectionReplaceFilters,
  DaffProductCollectionToggleFilter,
} from '@daffodil/product/state';
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
  DaffProductCollectionMetadataFactory,
} from '@daffodil/product/testing';

import {
  daffProductCollectionReducerFactory,
  daffProductCollectionReducerInitialState as initialState,
} from './reducer';

enum TestProductCollectionActionTypes {
  TestProductReplaceFiltersAction = 'Test Product Replace Filters Action',
  TestProductApplyFiltersAction = 'Test Product Apply Filters Action',
  TestProductRemoveFiltersAction = 'Test Product Remove Filters Action',
  TestProductClearFiltersAction = 'Test Product Clear Filters Action',
  TestProductToggleFiltersAction = 'Test Product Toggle Filters Action',
  TestProductChangePageSizeAction = 'Test Product Change Page Size Action',
  TestProductChangeCurrentPageAction = 'Test Product Change Current Page Action',
  TestProductChangeSortingOptionAction = 'Test Product Change Sorting Option Action',
  TestProductSuccessAction = 'Test Product Success Action',
  TestProductFailureAction = 'Test Product Failure Action',
  TestProductLoadAction = 'Test Product Load Action',
}

const daffTestProductCollectionActionTypes: DaffProductCollectionActionTypes = {
  replaceFilters: [TestProductCollectionActionTypes.TestProductReplaceFiltersAction],
  applyFilters: [TestProductCollectionActionTypes.TestProductApplyFiltersAction],
  removeFilters: [TestProductCollectionActionTypes.TestProductRemoveFiltersAction],
  clearFilters: [TestProductCollectionActionTypes.TestProductClearFiltersAction],
  toggleFilter: [TestProductCollectionActionTypes.TestProductToggleFiltersAction],
  changeSize: [TestProductCollectionActionTypes.TestProductChangePageSizeAction],
  changePage: [TestProductCollectionActionTypes.TestProductChangeCurrentPageAction],
  changeSort: [TestProductCollectionActionTypes.TestProductChangeSortingOptionAction],
  success: [TestProductCollectionActionTypes.TestProductSuccessAction],
  failure: [TestProductCollectionActionTypes.TestProductFailureAction],
  load: [TestProductCollectionActionTypes.TestProductLoadAction],
};

class TestProductCollectionReplaceFilters implements DaffProductCollectionReplaceFilters {
  readonly type = TestProductCollectionActionTypes.TestProductReplaceFiltersAction;

  constructor(public filters: DaffProductFilterRequest[]) {}
}

class TestProductCollectionApplyFilters implements DaffProductCollectionApplyFilters {
  readonly type = TestProductCollectionActionTypes.TestProductApplyFiltersAction;

  constructor(public filters: DaffProductFilterRequest[]) {}
}

class TestProductCollectionRemoveFilters implements DaffProductCollectionRemoveFilters {
  readonly type = TestProductCollectionActionTypes.TestProductRemoveFiltersAction;

  constructor(public filters: DaffProductFilterRequest[]) {}
}

class TestProductCollectionClearFilters implements DaffProductCollectionClearFilters {
  readonly type = TestProductCollectionActionTypes.TestProductClearFiltersAction;
}

class TestProductCollectionToggleFilter implements DaffProductCollectionToggleFilter {
  readonly type = TestProductCollectionActionTypes.TestProductToggleFiltersAction;

  constructor(public filter: DaffProductFilterToggleRequest) {}
}

class TestProductCollectionChangePageSize implements DaffProductCollectionChangePageSize {
  readonly type = TestProductCollectionActionTypes.TestProductChangePageSizeAction;

  constructor(public pageSize: number) {}
}

class TestProductCollectionChangeCurrentPage implements DaffProductCollectionChangeCurrentPage {
  readonly type = TestProductCollectionActionTypes.TestProductChangeCurrentPageAction;

  constructor(public currentPage: number) {}
}

class TestProductCollectionChangeSortingOption implements DaffProductCollectionChangeSortingOption {
  readonly type = TestProductCollectionActionTypes.TestProductChangeSortingOptionAction;

  constructor(public sort: {
    option: DaffProductCollectionRequest['applied_sort_option'];
    direction: DaffProductCollectionRequest['applied_sort_direction'];
  }) {}
}

class TestProductCollectionLoad implements Action {
  readonly type = TestProductCollectionActionTypes.TestProductLoadAction;

  constructor(public request: DaffProductCollectionRequest) {}
}

class TestProductCollectionSuccess implements Action {
  readonly type = TestProductCollectionActionTypes.TestProductSuccessAction;

  constructor(public response: DaffProductCollectionResponse) {}
}

class TestProductCollectionFailure implements Action {
  readonly type = TestProductCollectionActionTypes.TestProductFailureAction;

  constructor(public error: DaffStateError) {}
}

interface TestProductCollectionActionKinds extends DaffProductCollectionActionKinds {
  replaceFilters: TestProductCollectionReplaceFilters;
  applyFilters: TestProductCollectionApplyFilters;
  removeFilters: TestProductCollectionRemoveFilters;
  clearFilters: TestProductCollectionClearFilters;
  toggleFilter: TestProductCollectionToggleFilter;
  changeSize: TestProductCollectionChangePageSize;
  changePage: TestProductCollectionChangeCurrentPage;
  changeSort: TestProductCollectionChangeSortingOption;
  success: TestProductCollectionSuccess;
  failure: TestProductCollectionFailure;
  load: TestProductCollectionLoad;
}

const reducer = daffProductCollectionReducerFactory<TestProductCollectionActionKinds>(
  daffTestProductCollectionActionTypes,
  action => action.request,
  action => action.response,
);

describe('@daffodil/product/state | daffProductCollectionReducerFactory', () => {
  let productCollectionMetadataFactory: DaffProductCollectionMetadataFactory;
  let equalFilterFactory: DaffProductFilterEqualFactory;
  let equalOptionFactory: DaffProductFilterEqualOptionFactory;
  let rangeFilterFactory: DaffProductFilterRangeNumericFactory;
  let rangePairFactory: DaffProductFilterRangeNumericPairFactory;
  let equalFilterRequestFactory: DaffProductFilterRequestEqualFactory;
  let equalFilterToggleRequestFactory: DaffProductFilterToggleRequestEqualFactory;
  let rangeFilterRequestFactory: DaffProductFilterRequestRangeNumericFactory;
  let rangeFilterToggleRequestFactory: DaffProductFilterToggleRequestRangeNumericFactory;
  let rangeFilterRequestOptionFactory: DaffProductFilterRangeNumericRequestOptionFactory;

  let productCollectionMetadata: DaffProductCollectionMetadata;
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

  beforeEach(() => {
    productCollectionMetadataFactory = TestBed.inject(DaffProductCollectionMetadataFactory);
    equalFilterFactory = TestBed.inject(DaffProductFilterEqualFactory);
    equalOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffProductFilterRangeNumericFactory);
    rangePairFactory = TestBed.inject(DaffProductFilterRangeNumericPairFactory);
    equalFilterRequestFactory = TestBed.inject(DaffProductFilterRequestEqualFactory);
    equalFilterToggleRequestFactory = TestBed.inject(DaffProductFilterToggleRequestEqualFactory);
    rangeFilterRequestFactory = TestBed.inject(DaffProductFilterRequestRangeNumericFactory);
    rangeFilterToggleRequestFactory = TestBed.inject(DaffProductFilterToggleRequestRangeNumericFactory);
    rangeFilterRequestOptionFactory = TestBed.inject(DaffProductFilterRangeNumericRequestOptionFactory);

    productCollectionMetadata = productCollectionMetadataFactory.create();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = <any>{};

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when ChangeSizeAction is triggered', () => {
    let result: DaffProductCollectionReducerState;

    beforeEach(() => {
      const changeSize = new TestProductCollectionChangePageSize(3);

      result = reducer(initialState, changeSize);
    });

    it('should set the product collection metadata page size', () => {
      expect(result.page_size).toEqual(3);
    });
  });

  describe('when ChangeCurrentPageAction is triggered', () => {
    let result: DaffProductCollectionReducerState;

    beforeEach(() => {
      const changeCurrentPage = new TestProductCollectionChangeCurrentPage(3);

      result = reducer(initialState, changeCurrentPage);
    });

    it('should set the product collection metadata current page', () => {
      expect(result.current_page).toEqual(3);
    });
  });

  describe('when ChangeSortingOptionAction is triggered', () => {
    let result: DaffProductCollectionReducerState;

    beforeEach(() => {
      const changeSortingOption: TestProductCollectionChangeSortingOption = new TestProductCollectionChangeSortingOption({
        option: 'option',
        direction: DaffSortDirectionEnum.Ascending,
      });

      result = reducer(initialState, changeSortingOption);
    });

    it('should set the product collection metadata applied sort option', () => {
      expect(result.applied_sort_option).toEqual('option');
    });

    it('should set the product collection metadata applied sort direction', () => {
      expect(result.applied_sort_direction).toEqual(DaffSortDirectionEnum.Ascending);
    });
  });

  describe('when ToggleFiltersAction is triggered', () => {
    let result: DaffProductCollectionReducerState;
    let stateUnderTest: DaffProductCollectionReducerState;

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
      const toggleFilter: TestProductCollectionToggleFilter = new TestProductCollectionToggleFilter(equalFilterToggleRequest);
      result = reducer(stateUnderTest, toggleFilter);
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
        const toggleFilterAction = new TestProductCollectionToggleFilter(equalFilterToggleRequest);
        result = reducer(stateUnderTest, toggleFilterAction);
      });

      it('should remove the requested filters and filter options', () => {
        expect(result.filters[equalFilterToggleRequest.name].options[equalFilterToggleRequest.value].applied).toBeFalse();
      });
    });

    describe('and the range filter is already applied', () => {
      let toggleFilterAction: TestProductCollectionToggleFilter;

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
        toggleFilterAction = new TestProductCollectionToggleFilter(rangeFilterToggleRequest);
        result = reducer(stateUnderTest, toggleFilterAction);
      });

      it('should remove the requested filters and filter options', () => {
        expect(result.filters[rangeFilterToggleRequest.name].options).toEqual({});
      });
    });

    describe('and the equal filter is not applied', () => {
      let toggleFilterAction: TestProductCollectionToggleFilter;

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
        toggleFilterAction = new TestProductCollectionToggleFilter(equalFilterToggleRequest);
        result = reducer(stateUnderTest, toggleFilterAction);
      });

      it('should apply the filter', () => {
        expect(result.filters[equalFilterToggleRequest.name].options[equalFilterToggleRequest.value].applied).toBeTrue();
      });
    });

    describe('and the range filter is not applied', () => {
      let toggleFilterAction: TestProductCollectionToggleFilter;

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
        toggleFilterAction = new TestProductCollectionToggleFilter(rangeFilterToggleRequest);
        result = reducer(stateUnderTest, toggleFilterAction);
      });

      it('should apply the filter', () => {
        expect(result.filters[rangeFilterToggleRequest.name].options[rangeFilterRequestOptionLabel].applied).toBeTrue();
      });
    });
  });

  describe('when ReplaceFiltersAction is triggered', () => {
    let result: DaffProductCollectionReducerState;
    let stateUnderTest: DaffProductCollectionReducerState;

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

      const replaceFilters = new TestProductCollectionReplaceFilters([
        equalFilterRequest,
        rangeFilterRequest,
      ]);

      result = reducer(stateUnderTest, replaceFilters);
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

  describe('when ApplyFiltersAction is triggered', () => {
    let result: DaffProductCollectionReducerState;
    let stateUnderTest: DaffProductCollectionReducerState;

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
      const applyFilters = new TestProductCollectionApplyFilters([equalFilterRequest]);
      result = reducer(stateUnderTest, applyFilters);
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
        const applyFilters = new TestProductCollectionApplyFilters([equalFilterRequest]);
        result = reducer(stateUnderTest, applyFilters);
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
        const applyFilters = new TestProductCollectionApplyFilters([rangeFilterRequest]);
        result = reducer(stateUnderTest, applyFilters);
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
        const applyFilters = new TestProductCollectionApplyFilters([
          equalFilterRequest,
          rangeFilterRequest,
        ]);
        result = reducer(stateUnderTest, applyFilters);
      });

      it('should apply the requested filter options', () => {
        equalFilterRequest.value.forEach(option => {
          expect(result.filters[equalFilterRequest.name].options[option].applied).toBeTrue();
        });
        expect(result.filters[rangeFilterRequest.name].options[rangeFilterRequestOptionLabel].applied).toBeTrue();
      });
    });
  });

  describe('when ClearFiltersAction is triggered', () => {
    let result: DaffProductCollectionReducerState;
    let stateUnderTest: DaffProductCollectionReducerState;

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
      const clearFilters = new TestProductCollectionClearFilters();
      result = reducer(stateUnderTest, clearFilters);
    });

    it('should unapply all filters', () => {
      Object.values(result.filters).forEach(filter => {
        expect(daffIsFilterApplied(filter)).toBeFalse();
      });
    });
  });

  describe('when RemoveFiltersAction is triggered', () => {
    let result: DaffProductCollectionReducerState;
    let stateUnderTest: DaffProductCollectionReducerState;

    beforeEach(() => {
      currentEqualFilter = equalFilterFactory.create();
      equalFilterRequest = equalFilterRequestFactory.create({
        name: currentEqualFilter.name,
      });

      stateUnderTest = {
        ...initialState,
        filters: daffProductFilterArrayToDict([currentEqualFilter]),
      };

      const removeFilters = new TestProductCollectionRemoveFilters([equalFilterRequest]);
      result = reducer(stateUnderTest, removeFilters);
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
        const removeFilters = new TestProductCollectionRemoveFilters([equalFilterRequest]);
        result = reducer(stateUnderTest, removeFilters);
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
        const removeFilters = new TestProductCollectionRemoveFilters([rangeFilterRequest]);
        result = reducer(stateUnderTest, removeFilters);
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
        const removeFilters = new TestProductCollectionRemoveFilters([
          equalFilterRequest,
          rangeFilterRequest,
        ]);
        result = reducer(stateUnderTest, removeFilters);
      });

      it('should not change filters', () => {
        expect(result.filters).toEqual(stateUnderTest.filters);
      });
    });
  });

  describe('when LoadAction is triggered', () => {
    let result: DaffProductCollectionReducerState;
    let productCollectionRequest: DaffProductCollectionRequest;

    beforeEach(() => {
      productCollectionRequest = {
        page_size: productCollectionMetadata.page_size,
        filter_requests: daffProductFiltersToRequests(productCollectionMetadata.filters),
        applied_sort_option: productCollectionMetadata.applied_sort_option,
        applied_sort_direction: productCollectionMetadata.applied_sort_direction,
        current_page: productCollectionMetadata.current_page,
      };
      const loadAction: TestProductCollectionLoad = new TestProductCollectionLoad(productCollectionRequest);

      result = reducer(initialState, loadAction);
    });

    it('sets the included parameters on productCollectionMetadata from the request', () => {
      expect(result.page_size).toEqual(productCollectionRequest.page_size);
      expect(result.current_page).toEqual(productCollectionRequest.current_page);
      expect(result.applied_sort_direction).toEqual(productCollectionRequest.applied_sort_direction);
      expect(result.applied_sort_option).toEqual(productCollectionRequest.applied_sort_option);
    });

    it('resets all the filters in state to an empty object', () => {
      expect(result.filters).toEqual({});
    });

    describe('when fields are missing from the request', () => {
      beforeEach(() => {
        productCollectionRequest = {};
        const loadAction: TestProductCollectionLoad = new TestProductCollectionLoad(productCollectionRequest);

        result = reducer(undefined, loadAction);
      });

      it('sets the missing parameters on productCollectionMetadata from initial state', () => {
        expect(result.page_size).toEqual(initialState.page_size);
        expect(result.current_page).toEqual(initialState.current_page);
        expect(result.applied_sort_direction).toEqual(initialState.applied_sort_direction);
        expect(result.applied_sort_option).toEqual(initialState.applied_sort_option);
      });
    });
  });

  describe('when LoadSuccessAction is triggered', () => {
    let result: DaffProductCollectionReducerState;
    let state: DaffProductCollectionReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
      };
    });

    describe('when an applied_sort_option is not set in state', () => {
      beforeEach(() => {
        state = {
          ...state,
          applied_sort_option: null,
        };
      });

      it('sets productCollectionMetadata with the default sorting option', () => {
        const loadSuccess = new TestProductCollectionSuccess({ productCollectionMetadata });
        result = reducer(state, loadSuccess);

        expect(result.applied_sort_option).toEqual(productCollectionMetadata.sort_options.default);
      });
    });

    describe('when an applied_sort_option is set in state', () => {
      let selectedOption;

      beforeEach(() => {
        selectedOption = 'selectedOption';
        state = {
          ...state,
          applied_sort_option: selectedOption,
        };
      });

      it('sets the product collection metadata with the applied_sort_option', () => {
        const loadSuccess = new TestProductCollectionSuccess({ productCollectionMetadata });
        result = reducer(state, loadSuccess);
        expect(result.applied_sort_option).toEqual(selectedOption);
      });
    });
  });
});
