import {
  Inject,
  Injectable,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { DaffSortDirectionEnum } from '@daffodil/core';
import {
  DaffProductCollectionResponse,
  daffProductFilterArrayToDict,
  DaffProductFilterRequest,
  daffProductFiltersToRequests,
  DaffProductFilterToggleRequest,
} from '@daffodil/product';
import {
  DaffProductCollectionApplyFilters,
  DaffProductCollectionChangeCurrentPage,
  DaffProductCollectionChangePageSize,
  DaffProductCollectionChangeSortingOption,
  DaffProductCollectionClearFilters,
  DaffProductCollectionRemoveFilters,
  DaffProductCollectionReplaceFilters,
  DaffProductCollectionToggleFilter,
} from '@daffodil/product/state';
import {
  DaffProductStateTestingModule,
  MockDaffProductCollectionFacade,
} from '@daffodil/product/state/testing';
import {
  DaffProductCollectionMetadataFactory,
  DaffProductFilterFactory,
  DaffProductFilterRequestFactory,
  DaffProductFilterToggleRequestFactory,
} from '@daffodil/product/testing';

import {
  DaffProductCollectionDriverCall,
  DaffProductCollectionEffects,
} from './collection.effects';

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

  constructor(public response: DaffProductCollectionResponse) {}
}

@Injectable()
class TestEffects extends DaffProductCollectionEffects {
  constructor(
    actions$: Actions,
    facade: MockDaffProductCollectionFacade,
    @Inject('testDriverCall') public testDriverCall: jasmine.Spy<DaffProductCollectionDriverCall>,
  ) {
    super(
      actions$,
      testDriverCall,
      daffTestProductCollectionActionTypes,
      facade,
    );
  }
}

describe('@daffodil/product/state | DaffProductCollectionEffects', () => {
  let actions$: Observable<any>;
  let effects: TestEffects;
  let facade: MockDaffProductCollectionFacade;

  let productCollectionMetadataFactory: DaffProductCollectionMetadataFactory;
  let filterFactory: DaffProductFilterFactory;
  let filterRequestFactory: DaffProductFilterRequestFactory;
  let filterToggleRequestFactory: DaffProductFilterToggleRequestFactory;

  const testDriverSuccess = (cb: () => Action) => {
    describe('throttling the request', () => {
      it('should call immediately, but throttle subsequent events within a specified timeframe, firing off the last event after throttle', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });

        const stubProductCollectionMetadata = productCollectionMetadataFactory.create({
          filters: daffProductFilterArrayToDict(filterFactory.createMany(3)),
        });
        const response: DaffProductCollectionResponse = {
          productCollectionMetadata: stubProductCollectionMetadata,
        };

        effects.testDriverCall.and.returnValue(of(new TestProductSuccess(response)));

        facade.metadata$.next(stubProductCollectionMetadata);

        testScheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a-a-a-a-a', { a: cb() });

          const expectedMarble = '--a 299ms a';
          const expectedValue = {
            a: new TestProductSuccess(response),
          };

          expectObservable(
            effects.update$(300, testScheduler),
          ).toBe(expectedMarble, expectedValue);
        });

        expect(effects.testDriverCall).toHaveBeenCalledWith(cb(), {
          applied_sort_option: stubProductCollectionMetadata.applied_sort_option,
          applied_sort_direction: stubProductCollectionMetadata.applied_sort_direction,
          current_page: stubProductCollectionMetadata.current_page,
          page_size: stubProductCollectionMetadata.page_size,
          filter_requests: daffProductFiltersToRequests(stubProductCollectionMetadata.filters),
        });
      });
    });

    describe('and the driver call succeeds', () => {
      it('should call the driver with filter requests merged with state', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });

        const stubProductCollectionMetadata = productCollectionMetadataFactory.create({
          filters: daffProductFilterArrayToDict(filterFactory.createMany(3)),
        });
        const response: DaffProductCollectionResponse = {
          productCollectionMetadata: stubProductCollectionMetadata,
        };

        effects.testDriverCall.and.returnValue(of(new TestProductSuccess(response)));

        facade.metadata$.next(stubProductCollectionMetadata);

        testScheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a', { a: cb() });

          const expectedMarble = '--a';
          const expectedValue = {
            a: new TestProductSuccess(response),
          };

          expectObservable(
            effects.update$(0, testScheduler),
          ).toBe(expectedMarble, expectedValue);
        });

        expect(effects.testDriverCall).toHaveBeenCalledWith(cb(), {
          applied_sort_option: stubProductCollectionMetadata.applied_sort_option,
          applied_sort_direction: stubProductCollectionMetadata.applied_sort_direction,
          current_page: stubProductCollectionMetadata.current_page,
          page_size: stubProductCollectionMetadata.page_size,
          filter_requests: daffProductFiltersToRequests(stubProductCollectionMetadata.filters),
        });
      });
    });
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductStateTestingModule,
      ],
      providers: [
        TestEffects,
        provideMockActions(() => actions$),
        {
          provide: 'testDriverCall',
          useValue: jasmine.createSpy(),
        },
      ],
    });

    facade = TestBed.inject(MockDaffProductCollectionFacade);
    effects = TestBed.inject(TestEffects);

    productCollectionMetadataFactory = TestBed.inject(DaffProductCollectionMetadataFactory);
    filterFactory = TestBed.inject(DaffProductFilterFactory);
    filterRequestFactory = TestBed.inject(DaffProductFilterRequestFactory);
    filterToggleRequestFactory = TestBed.inject(DaffProductFilterToggleRequestFactory);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when replaceFilters is triggered', () => {
    let filterRequest: DaffProductFilterRequest;
    let action: DaffProductCollectionReplaceFilters;

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
    let filterRequest: DaffProductFilterRequest;
    let action: DaffProductCollectionApplyFilters;


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
    let action: DaffProductCollectionClearFilters;


    beforeEach(() => {
      action = {
        type: TestProductCollectionActionTypes.TestProductClearFiltersAction,
      };
    });

    testDriverSuccess(() => action);
  });

  describe('when removeFilters is triggered', () => {
    let filterRequest: DaffProductFilterRequest;
    let action: DaffProductCollectionRemoveFilters;


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
    let toggleRequest: DaffProductFilterToggleRequest;
    let action: DaffProductCollectionToggleFilter;

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
    let toggleRequest: DaffProductFilterToggleRequest;
    let action: DaffProductCollectionChangePageSize;

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
    let toggleRequest: DaffProductFilterToggleRequest;
    let action: DaffProductCollectionChangeCurrentPage;

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
    let toggleRequest: DaffProductFilterToggleRequest;
    let action: DaffProductCollectionChangeSortingOption;

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
