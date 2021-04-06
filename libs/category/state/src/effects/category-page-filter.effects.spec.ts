import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import {
  hot,
  cold,
  getTestScheduler,
} from 'jasmine-marbles';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffCategory,
  DaffGetCategoryResponse,
  daffCategoryFilterArrayToDict,
  daffCategoryFiltersToRequests,
  DaffCategoryFilterRequest,
  DaffToggleCategoryFilterRequest,
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
  DaffCategoryFilterFactory,
  DaffCategoryFilterRequestFactory,
  DaffCategoryFilterToggleRequestFactory,
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

  let categoryFactory: DaffCategoryFactory;
  let categoryPageMetadataFactory: DaffCategoryPageMetadataFactory;
  let productFactory: DaffProductFactory;
  let filterFactory: DaffCategoryFilterFactory;
  let filterRequestFactory: DaffCategoryFilterRequestFactory;
  let filterToggleRequestFactory: DaffCategoryFilterToggleRequestFactory;

  const testDriverSuccess = (cb: () => Action) => {
    describe('and the driver call succeeds', () => {
      it('should call get category with filter requests merged with state', () => {
        const stubCategoryPageMetadata = categoryPageMetadataFactory.create({
          filters: daffCategoryFilterArrayToDict(filterFactory.createMany(3)),
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

        actions$ = hot('--a', { a: cb() });

        const expected = cold('--(ab)', {
          a: new DaffProductGridLoadSuccess(response.products),
          b: new DaffCategoryPageLoadSuccess(response),
        });
        expect(effects.updateFilters$(0, getTestScheduler())).toBeObservable(expected);
        expect(daffCategoryDriver.get).toHaveBeenCalledWith({
          ...stubCategoryPageMetadata,
          filter_requests: daffCategoryFiltersToRequests(stubCategoryPageMetadata.filters),
        });
      });
    });
  };

  const testDriverFailure = (cb: () => Action) => {
    describe('and the driver call fails', () => {
      it('should emit DaffCategoryPageLoadFailure with the transformed error', () => {
        const stubCategoryPageMetadata = categoryPageMetadataFactory.create({
          filters: daffCategoryFilterArrayToDict(filterFactory.createMany(3)),
        });

        const error = new MockError();
        const spy = spyOn(daffCategoryDriver, 'get');
        spy.and.returnValue(hot('#', {}, error));

        facade.metadata$.next(stubCategoryPageMetadata);

        actions$ = hot('--a', { a: cb() });

        const expected = cold('--a', { a: new DaffCategoryPageLoadFailure(daffTransformErrorToStateError(error)) });
        expect(effects.updateFilters$(0, getTestScheduler())).toBeObservable(expected);
        expect(daffCategoryDriver.get).toHaveBeenCalledWith({
          ...stubCategoryPageMetadata,
          filter_requests: daffCategoryFiltersToRequests(stubCategoryPageMetadata.filters),
        });
      });
    });
  };

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
    filterFactory = TestBed.inject(DaffCategoryFilterFactory);
    filterRequestFactory = TestBed.inject(DaffCategoryFilterRequestFactory);
    filterToggleRequestFactory = TestBed.inject(DaffCategoryFilterToggleRequestFactory);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when ChangeCategoryFiltersAction is triggered', () => {
    let filterRequest: DaffCategoryFilterRequest;
    let action: Action;

    beforeEach(() => {
      filterRequest = filterRequestFactory.create();
      action = new DaffCategoryPageChangeFilters([filterRequest]);
    });

    testDriverSuccess(() => action);
    testDriverFailure(() => action);
  });

  describe('when CategoryPageReplaceFiltersAction is triggered', () => {
    let filterRequest: DaffCategoryFilterRequest;
    let action: Action;

    beforeEach(() => {
      filterRequest = filterRequestFactory.create();
      action = new DaffCategoryPageReplaceFilters([filterRequest]);
    });

    testDriverSuccess(() => action);
    testDriverFailure(() => action);
  });

  describe('when CategoryPageApplyFiltersAction is triggered', () => {
    let filterRequest: DaffCategoryFilterRequest;
    let action: Action;


    beforeEach(() => {
      filterRequest = filterRequestFactory.create();
      action = new DaffCategoryPageApplyFilters([filterRequest]);
    });

    testDriverSuccess(() => action);
    testDriverFailure(() => action);
  });

  describe('when CategoryPageClearFiltersAction is triggered', () => {
    let filterRequest: DaffCategoryFilterRequest;
    let action: Action;


    beforeEach(() => {
      filterRequest = filterRequestFactory.create();
      action = new DaffCategoryPageClearFilters();
    });

    testDriverSuccess(() => action);
    testDriverFailure(() => action);
  });

  describe('when CategoryPageRemoveFiltersAction is triggered', () => {
    let filterRequest: DaffCategoryFilterRequest;
    let action: Action;


    beforeEach(() => {
      filterRequest = filterRequestFactory.create();
      action = new DaffCategoryPageRemoveFilters([filterRequest]);
    });

    testDriverSuccess(() => action);
    testDriverFailure(() => action);
  });

  describe('when CategoryPageToggleFilterAction is triggered', () => {
    let toggleRequest: DaffToggleCategoryFilterRequest;
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
});
