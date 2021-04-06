import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffCategory,
  DaffCategoryFilterEqualRequest,
  DaffCategoryPageMetadata,
  DaffGetCategoryResponse,
  DaffCategoryEqualFilter,
  DaffCategoryFilterEqualOption,
  DaffCategoryFilterRangeNumeric,
  DaffCategoryFilterRangePair,
  DaffToggleCategoryFilterEqualRequest,
  daffCategoryFilterEqualOptionArrayToDict,
  daffCategoryFilterRangePairArrayToDict,
  daffCategoryFilterArrayToDict,
  daffCategoryFiltersToRequests,
} from '@daffodil/category';
import {
  DaffCategoryServiceInterface,
  DaffCategoryDriver,
} from '@daffodil/category/driver';
import { DaffCategoryTestingDriverModule } from '@daffodil/category/driver/testing';
import {
  DaffCategoryPageLoadSuccess,
  DaffCategoryPageLoadFailure,
  DaffCategoryPageChangeFilters,
  DaffCategoryPageToggleFilter,
  DaffCategoryPageReplaceFilters,
  DaffCategoryPageApplyFilters,
  DaffCategoryPageClearFilters,
  DaffCategoryPageRemoveFilters,
} from '@daffodil/category/state';
import {
  DaffCategoryTestingModule,
  MockDaffCategoryFacade,
} from '@daffodil/category/state/testing';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
  DaffCategoryFilterRequestEqualFactory,
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterRangeNumericFactory,
  DaffCategoryFilterEqualOptionFactory,
  DaffCategoryFilterRangeNumericPairFactory,
  DaffCategoryFilterToggleRequestEqualFactory,
} from '@daffodil/category/testing';
import {
  DaffInheritableError,
  DaffError,
} from '@daffodil/core';
import { daffTransformErrorToStateError } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';
import { DaffProductGridLoadSuccess } from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffCategoryPageFilterEffects } from './category-page-filter.effects';

class MockError extends DaffInheritableError implements DaffError {
  code = 'code';

  constructor() {
    super('message');
  }
}

describe('DaffCategoryPageFilterEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCategoryPageFilterEffects<DaffCategory, DaffProduct>;
  let daffCategoryDriver: DaffCategoryServiceInterface;
  let facade: MockDaffCategoryFacade;
  let driverGetSpy: jasmine.Spy;

  let categoryFactory: DaffCategoryFactory;
  let categoryPageMetadataFactory: DaffCategoryPageMetadataFactory;
  let productFactory: DaffProductFactory;
  let equalFilterFactory: DaffCategoryFilterEqualFactory;
  let equalOptionFactory: DaffCategoryFilterEqualOptionFactory;
  let rangeFilterFactory: DaffCategoryFilterRangeNumericFactory;
  let rangePairFactory: DaffCategoryFilterRangeNumericPairFactory;
  let equalFilterRequestFactory: DaffCategoryFilterRequestEqualFactory;
  let equalFilterToggleRequestFactory: DaffCategoryFilterToggleRequestEqualFactory;

  let categoryLoadSuccessAction: DaffCategoryPageLoadSuccess<DaffCategory, DaffProduct>;
  let productGridLoadSuccessAction: DaffProductGridLoadSuccess<DaffProduct>;
  let categoryPageLoadFailureAction: DaffCategoryPageLoadFailure;

  let stubCategory: DaffCategory;
  let stubCategoryPageMetadata: DaffCategoryPageMetadata;
  let stubProducts: DaffProduct[];
  let stubCategoryResponse: DaffGetCategoryResponse;
  let currentEqualFilter: DaffCategoryEqualFilter;
  let currentAppliedEqualFilterOption: DaffCategoryFilterEqualOption;
  let currentUnappliedEqualFilterOption: DaffCategoryFilterEqualOption;
  let currentRangeFilter: DaffCategoryFilterRangeNumeric;
  let currentRangeFilterPair: DaffCategoryFilterRangePair<number>;
  let equalFilterRequest: DaffCategoryFilterEqualRequest;
  let equalFilterToggleRequest: DaffToggleCategoryFilterEqualRequest;
  let error: DaffError;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        DaffCategoryTestingDriverModule.forRoot(),
        DaffCategoryTestingModule,
      ],
      providers: [
        DaffCategoryPageFilterEffects,
        provideMockActions(() => actions$),
      ],
    });

    facade = TestBed.inject(MockDaffCategoryFacade);
    daffCategoryDriver = TestBed.inject<DaffCategoryServiceInterface>(DaffCategoryDriver);
    effects = TestBed.inject(DaffCategoryPageFilterEffects);

    categoryFactory = TestBed.inject(DaffCategoryFactory);
    categoryPageMetadataFactory = TestBed.inject(DaffCategoryPageMetadataFactory);
    productFactory = TestBed.inject(DaffProductFactory);
    equalFilterFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
    equalOptionFactory = TestBed.inject(DaffCategoryFilterEqualOptionFactory);
    rangeFilterFactory = TestBed.inject(DaffCategoryFilterRangeNumericFactory);
    rangePairFactory = TestBed.inject(DaffCategoryFilterRangeNumericPairFactory);
    equalFilterRequestFactory = TestBed.inject(DaffCategoryFilterRequestEqualFactory);
    equalFilterToggleRequestFactory = TestBed.inject(DaffCategoryFilterToggleRequestEqualFactory);

    currentAppliedEqualFilterOption = equalOptionFactory.create({
      applied: true,
    });
    currentUnappliedEqualFilterOption = equalOptionFactory.create({
      applied: false,
    });
    currentEqualFilter = equalFilterFactory.create({
      options: daffCategoryFilterEqualOptionArrayToDict([
        currentAppliedEqualFilterOption,
        currentUnappliedEqualFilterOption,
      ]),
    });
    equalFilterRequest = equalFilterRequestFactory.create();
    equalFilterToggleRequest = equalFilterToggleRequestFactory.create();

    currentRangeFilterPair = rangePairFactory.create();
    currentRangeFilter = rangeFilterFactory.create({
      options: daffCategoryFilterRangePairArrayToDict([currentRangeFilterPair]),
    });

    stubCategoryPageMetadata = categoryPageMetadataFactory.create({
      filters: daffCategoryFilterArrayToDict([
        currentEqualFilter,
        currentRangeFilter,
      ]),
    });
    stubCategory = categoryFactory.create({
      id: stubCategoryPageMetadata.id,
    });
    stubProducts = productFactory.createMany(3);
    stubCategoryResponse = {
      category: stubCategory,
      categoryPageMetadata: stubCategoryPageMetadata,
      products: stubProducts,
    };
    error = new MockError();
    driverGetSpy = spyOn(daffCategoryDriver, 'get');

    categoryLoadSuccessAction = new DaffCategoryPageLoadSuccess(stubCategoryResponse);
    productGridLoadSuccessAction = new DaffProductGridLoadSuccess(stubProducts);
    categoryPageLoadFailureAction = new DaffCategoryPageLoadFailure(daffTransformErrorToStateError(error));

    facade.metadata$.next(stubCategoryPageMetadata);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when ChangeCategoryFiltersAction is triggered', () => {
    let expected;

    beforeEach(() => {
      const changeCategoryFiltersAction = new DaffCategoryPageChangeFilters([equalFilterRequest]);
      actions$ = hot('--a', { a: changeCategoryFiltersAction });
    });

    describe('and the driver call succeeds', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(of(stubCategoryResponse));
      });

      it('should call get category with filter requests transformed from state', () => {
        expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
        expect(effects.updateFilters$()).toBeObservable(expected);
        expect(daffCategoryDriver.get).toHaveBeenCalledWith({
          ...stubCategoryPageMetadata,
          filter_requests: daffCategoryFiltersToRequests(stubCategoryPageMetadata.filters),
        });
      });
    });

    describe('and the driver call fails', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(hot('#', {}, error));
      });

      it('should emit DaffCategoryPageLoadFailure with the transformed error', () => {
        expected = cold('--a', { a: categoryPageLoadFailureAction });
        expect(effects.updateFilters$()).toBeObservable(expected);
        expect(daffCategoryDriver.get).toHaveBeenCalledWith({
          ...stubCategoryPageMetadata,
          filter_requests: daffCategoryFiltersToRequests(stubCategoryPageMetadata.filters),
        });
      });
    });
  });

  describe('when CategoryPageReplaceFiltersAction is triggered', () => {
    let expected;

    beforeEach(() => {
      const replaceCategoryFiltersAction = new DaffCategoryPageReplaceFilters([equalFilterRequest]);
      actions$ = hot('--a', { a: replaceCategoryFiltersAction });
    });

    describe('and the driver call succeeds', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(of(stubCategoryResponse));
      });

      it('should call get category with filter requests transformed from state', () => {
        expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
        expect(effects.updateFilters$()).toBeObservable(expected);
        expect(daffCategoryDriver.get).toHaveBeenCalledWith({
          ...stubCategoryPageMetadata,
          filter_requests: daffCategoryFiltersToRequests(stubCategoryPageMetadata.filters),
        });
      });
    });

    describe('and the driver call fails', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(hot('#', {}, error));
      });

      it('should emit DaffCategoryPageLoadFailure with the transformed error', () => {
        expected = cold('--a', { a: categoryPageLoadFailureAction });
        expect(effects.updateFilters$()).toBeObservable(expected);
        expect(daffCategoryDriver.get).toHaveBeenCalledWith({
          ...stubCategoryPageMetadata,
          filter_requests: daffCategoryFiltersToRequests(stubCategoryPageMetadata.filters),
        });
      });
    });
  });

  describe('when CategoryPageApplyFiltersAction is triggered', () => {
    let expected;

    beforeEach(() => {
      const applyCategoryFiltersAction = new DaffCategoryPageApplyFilters([equalFilterRequest]);
      actions$ = hot('--a', { a: applyCategoryFiltersAction });
    });

    describe('and the driver call succeeds', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(of(stubCategoryResponse));
      });

      it('should call get category with filter requests transformed from state', () => {
        expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
        expect(effects.updateFilters$()).toBeObservable(expected);
        expect(daffCategoryDriver.get).toHaveBeenCalledWith({
          ...stubCategoryPageMetadata,
          filter_requests: daffCategoryFiltersToRequests(stubCategoryPageMetadata.filters),
        });
      });
    });

    describe('and the driver call fails', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(hot('#', {}, error));
      });

      it('should emit DaffCategoryPageLoadFailure with the transformed error', () => {
        expected = cold('--a', { a: categoryPageLoadFailureAction });
        expect(effects.updateFilters$()).toBeObservable(expected);
        expect(daffCategoryDriver.get).toHaveBeenCalledWith({
          ...stubCategoryPageMetadata,
          filter_requests: daffCategoryFiltersToRequests(stubCategoryPageMetadata.filters),
        });
      });
    });
  });

  describe('when CategoryPageClearFiltersAction is triggered', () => {
    let expected;

    beforeEach(() => {
      const clearCategoryFiltersAction = new DaffCategoryPageClearFilters();
      actions$ = hot('--a', { a: clearCategoryFiltersAction });
    });

    describe('and the driver call succeeds', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(of(stubCategoryResponse));
      });

      it('should call get category with filter requests transformed from state', () => {
        expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
        expect(effects.updateFilters$()).toBeObservable(expected);
        expect(daffCategoryDriver.get).toHaveBeenCalledWith({
          ...stubCategoryPageMetadata,
          filter_requests: daffCategoryFiltersToRequests(stubCategoryPageMetadata.filters),
        });
      });
    });

    describe('and the driver call fails', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(hot('#', {}, error));
      });

      it('should emit DaffCategoryPageLoadFailure with the transformed error', () => {
        expected = cold('--a', { a: categoryPageLoadFailureAction });
        expect(effects.updateFilters$()).toBeObservable(expected);
        expect(daffCategoryDriver.get).toHaveBeenCalledWith({
          ...stubCategoryPageMetadata,
          filter_requests: daffCategoryFiltersToRequests(stubCategoryPageMetadata.filters),
        });
      });
    });
  });

  describe('when CategoryPageRemoveFiltersAction is triggered', () => {
    let expected;

    beforeEach(() => {
      const removeCategoryFiltersAction = new DaffCategoryPageRemoveFilters([equalFilterRequest]);
      actions$ = hot('--a', { a: removeCategoryFiltersAction });
    });

    describe('and the driver call succeeds', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(of(stubCategoryResponse));
      });

      it('should call get category with filter requests transformed from state', () => {
        expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
        expect(effects.updateFilters$()).toBeObservable(expected);
        expect(daffCategoryDriver.get).toHaveBeenCalledWith({
          ...stubCategoryPageMetadata,
          filter_requests: daffCategoryFiltersToRequests(stubCategoryPageMetadata.filters),
        });
      });
    });

    describe('and the driver call fails', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(hot('#', {}, error));
      });

      it('should emit DaffCategoryPageLoadFailure with the transformed error', () => {
        expected = cold('--a', { a: categoryPageLoadFailureAction });
        expect(effects.updateFilters$()).toBeObservable(expected);
        expect(daffCategoryDriver.get).toHaveBeenCalledWith({
          ...stubCategoryPageMetadata,
          filter_requests: daffCategoryFiltersToRequests(stubCategoryPageMetadata.filters),
        });
      });
    });
  });

  describe('when CategoryPageToggleFilterAction is triggered', () => {
    let expected;

    beforeEach(() => {
      const toggleCategoryFiltersAction = new DaffCategoryPageToggleFilter(equalFilterToggleRequest);
      actions$ = hot('--a', { a: toggleCategoryFiltersAction });
    });

    describe('and the driver call succeeds', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(of(stubCategoryResponse));
      });

      it('should call get category with filter requests transformed from state', () => {
        expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
        expect(effects.updateFilters$()).toBeObservable(expected);
        expect(daffCategoryDriver.get).toHaveBeenCalledWith({
          ...stubCategoryPageMetadata,
          filter_requests: daffCategoryFiltersToRequests(stubCategoryPageMetadata.filters),
        });
      });
    });

    describe('and the driver call fails', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(hot('#', {}, error));
      });

      it('should emit DaffCategoryPageLoadFailure with the transformed error', () => {
        expected = cold('--a', { a: categoryPageLoadFailureAction });
        expect(effects.updateFilters$()).toBeObservable(expected);
        expect(daffCategoryDriver.get).toHaveBeenCalledWith({
          ...stubCategoryPageMetadata,
          filter_requests: daffCategoryFiltersToRequests(stubCategoryPageMetadata.filters),
        });
      });
    });
  });
});
