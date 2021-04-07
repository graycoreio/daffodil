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
  DaffCategoryFilter,
  DaffCategoryEqualFilter,
  DaffCategoryFilterEqualRequest,
  DaffToggleCategoryFilterEqualRequest,
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
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterRequestEqualFactory,
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

import { DaffCategoryPagePreapplyFilters } from '../actions/category-page-filter.actions';
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
  let equalFilterFactory: DaffCategoryFilterEqualFactory;
  let equalFilterRequestFactory: DaffCategoryFilterRequestEqualFactory;
  let equalFilterToggleRequestFactory: DaffCategoryFilterToggleRequestEqualFactory;

  const testDriverSuccess = (cb: () => {action: Action; filters: DaffCategoryFilter[]}) => {
    describe('and the driver call succeeds', () => {
      it('should call get category with filter requests merged with state', () => {
        const { action, filters } = cb();
        const stubCategoryPageMetadata = categoryPageMetadataFactory.create({
          filters: daffCategoryFilterArrayToDict(filters),
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

        actions$ = hot('--a', { a: action });

        const expected = cold('--(abc)', {
          a: jasmine.anything(),
          b: new DaffProductGridLoadSuccess(response.products),
          c: new DaffCategoryPageLoadSuccess(response),
        });
        expect(effects.updateFilters$(0, getTestScheduler())).toBeObservable(expected);
        expect(daffCategoryDriver.get).toHaveBeenCalledWith({
          ...stubCategoryPageMetadata,
          filter_requests: daffCategoryFiltersToRequests(stubCategoryPageMetadata.filters),
        });
      });
    });
  };

  const testDriverFailure = (cb: () => {action: Action; filters: DaffCategoryFilter[]}) => {
    describe('and the driver call fails', () => {
      it('should emit DaffCategoryPageLoadFailure with the transformed error', () => {
        const { action, filters } = cb();
        const stubCategoryPageMetadata = categoryPageMetadataFactory.create({
          filters: daffCategoryFilterArrayToDict(filters),
        });

        const error = new MockError();
        const spy = spyOn(daffCategoryDriver, 'get');
        spy.and.returnValue(hot('#', {}, error));

        facade.metadata$.next(stubCategoryPageMetadata);

        actions$ = hot('--a', { a: action });

        const expected = cold('--(ab)', { a: jasmine.anything(), b: new DaffCategoryPageLoadFailure(daffTransformErrorToStateError(error)) });
        expect(effects.updateFilters$(0, getTestScheduler())).toBeObservable(expected);
        expect(daffCategoryDriver.get).toHaveBeenCalledWith({
          ...stubCategoryPageMetadata,
          filter_requests: daffCategoryFiltersToRequests(stubCategoryPageMetadata.filters),
        });
      });
    });
  };

  const testFilterPreapplyEmission = (cb: () => {action: Action; filters: DaffCategoryFilter[]}) => {
    it('should emit DaffCategoryPagePreapplyFilters', () => {
      const { action, filters } = cb();
      const stubCategoryPageMetadata = categoryPageMetadataFactory.create({
        filters: daffCategoryFilterArrayToDict(filters),
      });

      const spy = spyOn(daffCategoryDriver, 'get');
      spy.and.returnValue(hot('|'));
      facade.metadata$.next(stubCategoryPageMetadata);

      actions$ = hot('--a', { a: action });

      const expected = cold('--a', { a: jasmine.any(DaffCategoryPagePreapplyFilters) });
      expect(effects.updateFilters$(0, getTestScheduler())).toBeObservable(expected);
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
    equalFilterFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
    equalFilterRequestFactory = TestBed.inject(DaffCategoryFilterRequestEqualFactory);
    equalFilterToggleRequestFactory = TestBed.inject(DaffCategoryFilterToggleRequestEqualFactory);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when ChangeCategoryFiltersAction is triggered', () => {
    let filterRequest: DaffCategoryFilterEqualRequest;
    let filter: DaffCategoryEqualFilter;
    let action: Action;

    beforeEach(() => {
      filterRequest = equalFilterRequestFactory.create();
      filter = equalFilterFactory.create({
        name: filterRequest.name,
      });
      action = new DaffCategoryPageChangeFilters([filterRequest]);
    });

    testDriverSuccess(() => ({ action, filters: [filter]}));
    testDriverFailure(() => ({ action, filters: [filter]}));
    testFilterPreapplyEmission(() => ({ action, filters: [filter]}));
  });

  describe('when CategoryPageReplaceFiltersAction is triggered', () => {
    let filterRequest: DaffCategoryFilterEqualRequest;
    let filter: DaffCategoryEqualFilter;
    let action: Action;

    beforeEach(() => {
      filterRequest = equalFilterRequestFactory.create();
      filter = equalFilterFactory.create({
        name: filterRequest.name,
      });
      action = new DaffCategoryPageReplaceFilters([filterRequest]);
    });

    testDriverSuccess(() => ({ action, filters: [filter]}));
    testDriverFailure(() => ({ action, filters: [filter]}));
    testFilterPreapplyEmission(() => ({ action, filters: [filter]}));
  });

  describe('when CategoryPageApplyFiltersAction is triggered', () => {
    let filterRequest: DaffCategoryFilterEqualRequest;
    let filter: DaffCategoryEqualFilter;
    let action: Action;


    beforeEach(() => {
      filterRequest = equalFilterRequestFactory.create();
      filter = equalFilterFactory.create({
        name: filterRequest.name,
      });
      action = new DaffCategoryPageApplyFilters([filterRequest]);
    });

    testDriverSuccess(() => ({ action, filters: [filter]}));
    testDriverFailure(() => ({ action, filters: [filter]}));
    testFilterPreapplyEmission(() => ({ action, filters: [filter]}));
  });

  describe('when CategoryPageClearFiltersAction is triggered', () => {
    let filterRequest: DaffCategoryFilterEqualRequest;
    let filter: DaffCategoryEqualFilter;
    let action: Action;


    beforeEach(() => {
      filterRequest = equalFilterRequestFactory.create();
      filter = equalFilterFactory.create({
        name: filterRequest.name,
      });
      action = new DaffCategoryPageClearFilters();
    });

    testDriverSuccess(() => ({ action, filters: [filter]}));
    testDriverFailure(() => ({ action, filters: [filter]}));
    testFilterPreapplyEmission(() => ({ action, filters: [filter]}));
  });

  describe('when CategoryPageRemoveFiltersAction is triggered', () => {
    let filterRequest: DaffCategoryFilterEqualRequest;
    let filter: DaffCategoryEqualFilter;
    let action: Action;


    beforeEach(() => {
      filterRequest = equalFilterRequestFactory.create();
      filter = equalFilterFactory.create({
        name: filterRequest.name,
      });
      action = new DaffCategoryPageRemoveFilters([filterRequest]);
    });

    testDriverSuccess(() => ({ action, filters: [filter]}));
    testDriverFailure(() => ({ action, filters: [filter]}));
    testFilterPreapplyEmission(() => ({ action, filters: [filter]}));
  });

  describe('when CategoryPageToggleFilterAction is triggered', () => {
    let toggleRequest: DaffToggleCategoryFilterEqualRequest;
    let filter: DaffCategoryEqualFilter;
    let action: Action;

    beforeEach(() => {
      toggleRequest = equalFilterToggleRequestFactory.create();
      filter = equalFilterFactory.create({
        name: toggleRequest.name,
      });
      action = new DaffCategoryPageToggleFilter(toggleRequest);
    });

    testDriverSuccess(() => ({ action, filters: [filter]}));
    testDriverFailure(() => ({ action, filters: [filter]}));
    testFilterPreapplyEmission(() => ({ action, filters: [filter]}));
  });
});
