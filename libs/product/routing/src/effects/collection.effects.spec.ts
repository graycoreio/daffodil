import { Injectable } from '@angular/core';
import {
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { DaffSortDirectionEnum } from '@daffodil/core';
import {
  DaffCollectionRequest,
  daffFilterArrayToDict,
  DaffFilterRequest,
  daffFiltersToRequests,
  DaffFilterToggleRequest,
} from '@daffodil/core';
import {
  DaffCollectionChangePageSize,
  DaffCollectionChangeCurrentPage,
  DaffCollectionChangeSortingOption,
} from '@daffodil/core/state';
import {
  DaffCollectionApplyFilters,
  DaffCollectionClearFilters,
  DaffCollectionRemoveFilters,
  DaffCollectionReplaceFilters,
  DaffCollectionToggleFilter,
} from '@daffodil/core/state';
import { MockDaffCollectionFacade } from '@daffodil/core/state/testing';
import {
  DaffCollectionMetadataFactory,
  DaffFilterFactory,
  DaffFilterRequestFactory,
  DaffFilterToggleRequestFactory,
} from '@daffodil/core/testing';
import { DaffProductCollection } from '@daffodil/product';
import { DaffProductGetQueryParamsFromRequest } from '@daffodil/product/routing';
import { DaffProductStateTestingModule } from '@daffodil/product/state/testing';

import { DaffProductRoutingCollectionEffects } from './collection.effects';

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

const daffTestProductCollectionActionTypes = [
  TestProductCollectionActionTypes.TestProductReplaceFiltersAction,
  TestProductCollectionActionTypes.TestProductApplyFiltersAction,
  TestProductCollectionActionTypes.TestProductRemoveFiltersAction,
  TestProductCollectionActionTypes.TestProductClearFiltersAction,
  TestProductCollectionActionTypes.TestProductToggleFiltersAction,
  TestProductCollectionActionTypes.TestProductChangePageSizeAction,
  TestProductCollectionActionTypes.TestProductChangeCurrentPageAction,
  TestProductCollectionActionTypes.TestProductChangeSortingOptionAction,
  TestProductCollectionActionTypes.TestProductSuccessAction,
  TestProductCollectionActionTypes.TestProductFailureAction,
  TestProductCollectionActionTypes.TestProductLoadAction,
];

class TestProductSuccess implements Action {
  public type = TestProductCollectionActionTypes.TestProductSuccessAction;

  constructor(public response: DaffProductCollection) {}
}

@Injectable()
class TestEffects extends DaffProductRoutingCollectionEffects {
  constructor(
    actions$: Actions,
    router: Router,
    collectionFacade: MockDaffCollectionFacade,
    getQueryParams: DaffProductGetQueryParamsFromRequest,
    route: ActivatedRoute,
  ) {
    super(
      actions$,
      router,
      daffTestProductCollectionActionTypes,
      collectionFacade,
      getQueryParams,
      route,
    );
  }
}

describe('@daffodil/product/routing | DaffProductRoutingCollectionEffects', () => {
  let actions$: Observable<any>;
  let effects: TestEffects;
  let facade: MockDaffCollectionFacade;

  let productCollectionMetadataFactory: DaffCollectionMetadataFactory;
  let filterFactory: DaffFilterFactory;
  let filterRequestFactory: DaffFilterRequestFactory;
  let filterToggleRequestFactory: DaffFilterToggleRequestFactory;
  let getQueryParamsSpy: jasmine.SpyObj<DaffProductGetQueryParamsFromRequest>;

  const testDriverSuccess = (cb: () => Action) => {
    it('should set the query params to the product collection request', fakeAsync(() => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      const stubCollectionMetadata = productCollectionMetadataFactory.create({
        filters: daffFilterArrayToDict(filterFactory.createMany(3)),
      });
      const request: DaffCollectionRequest = {
        appliedSortOption: stubCollectionMetadata.appliedSortOption,
        appliedSortDirection: stubCollectionMetadata.appliedSortDirection,
        currentPage: stubCollectionMetadata.currentPage,
        pageSize: stubCollectionMetadata.pageSize,
        filterRequests: daffFiltersToRequests(stubCollectionMetadata.filters),
      };

      getQueryParamsSpy.getQueryParams.and.returnValue(request);

      facade.metadata$.next(stubCollectionMetadata);

      testScheduler.run(({ hot, expectObservable }) => {
        actions$ = hot('--a', { a: cb() });

        const expectedMarble = '---';

        expectObservable(effects.update$).toBe(expectedMarble);
      });

      tick();

      expect(TestBed.inject(ActivatedRoute).snapshot.queryParams).toEqual(jasmine.objectContaining({
        ...request,
        currentPage: String(request.currentPage),
        pageSize: String(request.pageSize),
      }));
    }));
  };

  beforeEach(() => {
    getQueryParamsSpy = jasmine.createSpyObj<DaffProductGetQueryParamsFromRequest>(['getQueryParams']);

    TestBed.configureTestingModule({
      imports: [
        DaffProductStateTestingModule,
        RouterTestingModule,
      ],
      providers: [
        TestEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffProductGetQueryParamsFromRequest,
          useValue: getQueryParamsSpy,
        },
      ],
    });

    facade = TestBed.inject(MockDaffCollectionFacade);
    effects = TestBed.inject(TestEffects);

    productCollectionMetadataFactory = TestBed.inject(DaffCollectionMetadataFactory);
    filterFactory = TestBed.inject(DaffFilterFactory);
    filterRequestFactory = TestBed.inject(DaffFilterRequestFactory);
    filterToggleRequestFactory = TestBed.inject(DaffFilterToggleRequestFactory);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when replaceFilters is triggered', () => {
    let filterRequest: DaffFilterRequest;
    let action: DaffCollectionReplaceFilters;

    beforeEach(() => {
      filterRequest = filterRequestFactory.create();
      action = {
        type: TestProductCollectionActionTypes.TestProductReplaceFiltersAction,
        filters: [filterRequest],
      };
    });

    testDriverSuccess(() => action);
  });

  describe('when applyFilters is triggered', () => {
    let filterRequest: DaffFilterRequest;
    let action: DaffCollectionApplyFilters;


    beforeEach(() => {
      filterRequest = filterRequestFactory.create();
      action = {
        type: TestProductCollectionActionTypes.TestProductReplaceFiltersAction,
        filters: [filterRequest],
      };
    });

    testDriverSuccess(() => action);
  });

  describe('when clearFilters is triggered', () => {
    let action: DaffCollectionClearFilters;


    beforeEach(() => {
      action = {
        type: TestProductCollectionActionTypes.TestProductClearFiltersAction,
      };
    });

    testDriverSuccess(() => action);
  });

  describe('when removeFilters is triggered', () => {
    let filterRequest: DaffFilterRequest;
    let action: DaffCollectionRemoveFilters;


    beforeEach(() => {
      filterRequest = filterRequestFactory.create();
      action = {
        type: TestProductCollectionActionTypes.TestProductRemoveFiltersAction,
        filters: [filterRequest],
      };;
    });

    testDriverSuccess(() => action);
  });

  describe('when toggleFilter is triggered', () => {
    let toggleRequest: DaffFilterToggleRequest;
    let action: DaffCollectionToggleFilter;

    beforeEach(() => {
      toggleRequest = filterToggleRequestFactory.create();
      action = {
        type: TestProductCollectionActionTypes.TestProductReplaceFiltersAction,
        filter: toggleRequest,
      };
    });

    testDriverSuccess(() => action);
  });

  describe('when changePageSize is triggered', () => {
    let toggleRequest: DaffFilterToggleRequest;
    let action: DaffCollectionChangePageSize;

    beforeEach(() => {
      toggleRequest = filterToggleRequestFactory.create();
      action = {
        type: TestProductCollectionActionTypes.TestProductReplaceFiltersAction,
        pageSize: 5,
      };
    });

    testDriverSuccess(() => action);
  });

  describe('when changeCurrentPage is triggered', () => {
    let toggleRequest: DaffFilterToggleRequest;
    let action: DaffCollectionChangeCurrentPage;

    beforeEach(() => {
      toggleRequest = filterToggleRequestFactory.create();
      action = {
        type: TestProductCollectionActionTypes.TestProductReplaceFiltersAction,
        currentPage: 5,
      };
    });

    testDriverSuccess(() => action);
  });

  describe('when changeSorting is triggered', () => {
    let toggleRequest: DaffFilterToggleRequest;
    let action: DaffCollectionChangeSortingOption;

    beforeEach(() => {
      toggleRequest = filterToggleRequestFactory.create();
      action = {
        type: TestProductCollectionActionTypes.TestProductReplaceFiltersAction,
        sort: {
          option: 'option',
          direction: DaffSortDirectionEnum.Ascending,
        },
      };
    });

    testDriverSuccess(() => action);
  });
});
