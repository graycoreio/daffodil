import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCategory,
  DaffGetCategoryResponse,
  DaffCategoryRequestKind,
} from '@daffodil/category';
import {
  DaffCategoryServiceInterface,
  DaffCategoryDriver,
} from '@daffodil/category/driver';
import { DaffCategoryTestingDriverModule } from '@daffodil/category/driver/testing';
import {
  DaffCategoryPageLoadSuccess,
  DaffCategoryPageLoadFailure,
  DaffCategoryPageToggleFilter,
  DaffCategoryPageReplaceFilters,
  DaffCategoryPageApplyFilters,
  DaffCategoryPageClearFilters,
  DaffCategoryPageRemoveFilters,
  DaffCategoryPageChangePageSize,
  DaffCategoryPageChangeCurrentPage,
  DaffCategoryPageChangeSortingOption,
} from '@daffodil/category/state';
import {
  DaffCategoryStateTestingModule,
  MockDaffCategoryFacade,
} from '@daffodil/category/state/testing';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';
import {
  DaffInheritableError,
  DaffError,
  daffFilterArrayToDict,
  DaffFilterRequest,
  daffFiltersToRequests,
  DaffFilterToggleRequest,
  DaffSortDirectionEnum,
} from '@daffodil/core';
import { daffTransformErrorToStateError } from '@daffodil/core/state';
import { MockDaffCollectionFacade } from '@daffodil/core/state/testing';
import {
  DaffFilterFactory,
  DaffFilterRequestFactory,
  DaffFilterToggleRequestFactory,
} from '@daffodil/core/testing';
import { DaffProduct } from '@daffodil/product';
import { DaffProductGridLoadSuccess } from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffCategoryPageMetadataEffects } from './category-page-metadata.effects';

class MockError extends DaffInheritableError implements DaffError {
  code = 'code';

  constructor() {
    super('message');
  }
}

describe('DaffCategoryPageMetadataEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCategoryPageMetadataEffects<DaffCategory, DaffProduct>;
  let daffCategoryDriver: DaffCategoryServiceInterface;
  let facade: MockDaffCollectionFacade;

  let categoryFactory: DaffCategoryFactory;
  let categoryPageMetadataFactory: DaffCategoryPageMetadataFactory;
  let productFactory: DaffProductFactory;
  let filterFactory: DaffFilterFactory;
  let filterRequestFactory: DaffFilterRequestFactory;
  let filterToggleRequestFactory: DaffFilterToggleRequestFactory;

  const testDriverSuccess = (cb: () => Action) => {
    describe('throttling the request', () => {
      it('should call immediately, but throttle subsequent events within a specified timeframe, firing off the last event after throttle', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });

        const stubCategoryPageMetadata = categoryPageMetadataFactory.create({
          filters: daffFilterArrayToDict(filterFactory.createMany(3)),
        });
        const stubCategory = categoryFactory.create({
          id: stubCategoryPageMetadata.id,
        });
        const stubProducts = productFactory.createMany(3);
        const response: DaffGetCategoryResponse = {
          category: stubCategory,
          products: stubProducts,
          categoryPageMetadata: stubCategoryPageMetadata,
        };

        const spy = spyOn(daffCategoryDriver, 'get');
        spy.and.returnValue(of(response));

        facade.metadata$.next(stubCategoryPageMetadata);

        testScheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a-a-a-a-a', { a: cb() });

          const expectedMarble = '--(ab) 296ms (ab)';
          const expectedValue = {
            a: new DaffProductGridLoadSuccess(response.products),
            b: new DaffCategoryPageLoadSuccess(response),
          };

          expectObservable(
            effects.update$(300, testScheduler),
          ).toBe(expectedMarble, expectedValue);
        });

        expect(daffCategoryDriver.get).toHaveBeenCalledWith({
          kind: DaffCategoryRequestKind.ID,
          id: stubCategoryPageMetadata.id,
          appliedSortOption: stubCategoryPageMetadata.appliedSortOption,
          appliedSortDirection: stubCategoryPageMetadata.appliedSortDirection,
          currentPage: stubCategoryPageMetadata.currentPage,
          pageSize: stubCategoryPageMetadata.pageSize,
          filterRequests: daffFiltersToRequests(stubCategoryPageMetadata.filters),
        });
      });
    });

    describe('and the driver call succeeds', () => {
      it('should call get category with filter requests merged with state', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });

        const stubCategoryPageMetadata = categoryPageMetadataFactory.create({
          filters: daffFilterArrayToDict(filterFactory.createMany(3)),
        });
        const stubCategory = categoryFactory.create({
          id: stubCategoryPageMetadata.id,
        });
        const stubProducts = productFactory.createMany(3);
        const response: DaffGetCategoryResponse = {
          category: stubCategory,
          products: stubProducts,
          categoryPageMetadata: stubCategoryPageMetadata,
        };

        const spy = spyOn(daffCategoryDriver, 'get');
        spy.and.returnValue(of(response));

        facade.metadata$.next(stubCategoryPageMetadata);

        testScheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a', { a: cb() });

          const expectedMarble = '--(ab)';
          const expectedValue = {
            a: new DaffProductGridLoadSuccess(response.products),
            b: new DaffCategoryPageLoadSuccess(response),
          };

          expectObservable(
            effects.update$(0, testScheduler),
          ).toBe(expectedMarble, expectedValue);
        });

        expect(daffCategoryDriver.get).toHaveBeenCalledWith({
          kind: DaffCategoryRequestKind.ID,
          id: stubCategoryPageMetadata.id,
          appliedSortOption: stubCategoryPageMetadata.appliedSortOption,
          appliedSortDirection: stubCategoryPageMetadata.appliedSortDirection,
          currentPage: stubCategoryPageMetadata.currentPage,
          pageSize: stubCategoryPageMetadata.pageSize,
          filterRequests: daffFiltersToRequests(stubCategoryPageMetadata.filters),
        });
      });
    });
  };

  const testDriverFailure = (cb: () => Action) => {
    describe('and the driver call fails', () => {
      it('should emit DaffCategoryPageLoadFailure with the transformed error', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });

        const stubCategoryPageMetadata = categoryPageMetadataFactory.create({
          filters: daffFilterArrayToDict(filterFactory.createMany(3)),
        });

        facade.metadata$.next(stubCategoryPageMetadata);
        const spy = spyOn(daffCategoryDriver, 'get');

        testScheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a', { a: cb() });

          const error = new MockError();
          spy.and.returnValue(hot('#', {}, error));

          const expectedMarble = '--(a)';
          const expectedValue = {
            a: new DaffCategoryPageLoadFailure(daffTransformErrorToStateError(error)),
          };

          expectObservable(
            effects.update$(0, testScheduler),
          ).toBe(expectedMarble, expectedValue);
        });

        expect(daffCategoryDriver.get).toHaveBeenCalledWith({
          kind: DaffCategoryRequestKind.ID,
          id: stubCategoryPageMetadata.id,
          appliedSortOption: stubCategoryPageMetadata.appliedSortOption,
          appliedSortDirection: stubCategoryPageMetadata.appliedSortDirection,
          currentPage: stubCategoryPageMetadata.currentPage,
          pageSize: stubCategoryPageMetadata.pageSize,
          filterRequests: daffFiltersToRequests(stubCategoryPageMetadata.filters),
        });
      });
    });
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffCategoryTestingDriverModule.forRoot(),
        DaffCategoryStateTestingModule,
      ],
      providers: [
        DaffCategoryPageMetadataEffects,
        provideMockActions(() => actions$),
      ],
    });

    facade = TestBed.inject(MockDaffCollectionFacade);
    daffCategoryDriver = TestBed.inject<DaffCategoryServiceInterface>(DaffCategoryDriver);
    effects = TestBed.inject(DaffCategoryPageMetadataEffects);

    categoryFactory = TestBed.inject(DaffCategoryFactory);
    categoryPageMetadataFactory = TestBed.inject(DaffCategoryPageMetadataFactory);
    productFactory = TestBed.inject(DaffProductFactory);
    filterFactory = TestBed.inject(DaffFilterFactory);
    filterRequestFactory = TestBed.inject(DaffFilterRequestFactory);
    filterToggleRequestFactory = TestBed.inject(DaffFilterToggleRequestFactory);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CategoryPageReplaceFiltersAction is triggered', () => {
    let filterRequest: DaffFilterRequest;
    let action: Action;

    beforeEach(() => {
      filterRequest = filterRequestFactory.create();
      action = new DaffCategoryPageReplaceFilters([filterRequest]);
    });

    testDriverSuccess(() => action);
    testDriverFailure(() => action);
  });

  describe('when CategoryPageApplyFiltersAction is triggered', () => {
    let filterRequest: DaffFilterRequest;
    let action: Action;


    beforeEach(() => {
      filterRequest = filterRequestFactory.create();
      action = new DaffCategoryPageApplyFilters([filterRequest]);
    });

    testDriverSuccess(() => action);
    testDriverFailure(() => action);
  });

  describe('when CategoryPageClearFiltersAction is triggered', () => {
    let filterRequest: DaffFilterRequest;
    let action: Action;


    beforeEach(() => {
      filterRequest = filterRequestFactory.create();
      action = new DaffCategoryPageClearFilters();
    });

    testDriverSuccess(() => action);
    testDriverFailure(() => action);
  });

  describe('when CategoryPageRemoveFiltersAction is triggered', () => {
    let filterRequest: DaffFilterRequest;
    let action: Action;


    beforeEach(() => {
      filterRequest = filterRequestFactory.create();
      action = new DaffCategoryPageRemoveFilters([filterRequest]);
    });

    testDriverSuccess(() => action);
    testDriverFailure(() => action);
  });

  describe('when CategoryPageToggleFilterAction is triggered', () => {
    let toggleRequest: DaffFilterToggleRequest;
    let action: Action;

    beforeEach(() => {
      toggleRequest = filterToggleRequestFactory.create();
      action = new DaffCategoryPageToggleFilter(toggleRequest);
    });

    describe('driver behavior', () => {
      testDriverSuccess(() => action);
      testDriverFailure(() => action);
    });
  });

  describe('when CategoryPageChangePageSizeAction is triggered', () => {
    let action: Action;

    beforeEach(() => {
      action = new DaffCategoryPageChangePageSize(5);
    });

    describe('driver behavior', () => {
      testDriverSuccess(() => action);
      testDriverFailure(() => action);
    });
  });

  describe('when CategoryPageChangeCurrentPageAction is triggered', () => {
    let toggleRequest: DaffFilterToggleRequest;
    let action: Action;

    beforeEach(() => {
      toggleRequest = filterToggleRequestFactory.create();
      action = new DaffCategoryPageChangeCurrentPage(2);
    });

    describe('driver behavior', () => {
      testDriverSuccess(() => action);
      testDriverFailure(() => action);
    });
  });

  describe('when CategoryPageChangeSortingOptionAction is triggered', () => {
    let toggleRequest: DaffFilterToggleRequest;
    let action: Action;

    beforeEach(() => {
      toggleRequest = filterToggleRequestFactory.create();
      action = new DaffCategoryPageChangeSortingOption({
        option: 'option',
        direction: DaffSortDirectionEnum.Ascending,
      });
    });

    describe('driver behavior', () => {
      testDriverSuccess(() => action);
      testDriverFailure(() => action);
    });
  });
});
