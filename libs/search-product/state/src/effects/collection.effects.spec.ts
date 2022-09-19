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

import {
  DaffError,
  DaffInheritableError,
  DaffSortDirectionEnum,
  daffFilterArrayToDict,
  DaffFilterRequest,
  daffFiltersToRequests,
  DaffFilterToggleRequest,
} from '@daffodil/core';
import {
  DaffCollectionChangeCurrentPage,
  DaffCollectionChangePageSize,
  DaffCollectionChangeSortingOption,
  daffTransformErrorToStateError,
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
import { DaffProductStateTestingModule } from '@daffodil/product/state/testing';
import { DaffSearchProductDriverResponse } from '@daffodil/search-product/driver';
import { DaffSearchProductDriverInterface } from '@daffodil/search-product/driver';
import { DaffSearchProductTestingDriverModule } from '@daffodil/search-product/driver/testing';
import { DaffSearchProductCollectionActionTypes } from '@daffodil/search-product/state';
import { DaffSearchProductStateTestingModule } from '@daffodil/search-product/state/testing';
import { DaffSearchDriver } from '@daffodil/search/driver';
import { DaffSearchTestingDriverModule } from '@daffodil/search/driver/testing';
import {
  DaffSearchLoadFailure,
  DaffSearchLoadSuccess,
} from '@daffodil/search/state';
import {
  DaffSearchStateTestingModule,
  MockDaffSearchFacade,
} from '@daffodil/search/state/testing';

import { DaffSearchProductCollectionEffects } from './collection.effects';

class MockError extends DaffInheritableError implements DaffError {
  code = 'code';

  constructor() {
    super('message');
  }
}

describe('@daffodil/product/state | DaffProductCollectionEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffSearchProductCollectionEffects;
  let collectionFacade: MockDaffCollectionFacade;
  let facade: MockDaffSearchFacade;
  let driverSpy: jasmine.Spy<DaffSearchProductDriverInterface['search']>;

  let productCollectionMetadataFactory: DaffCollectionMetadataFactory;
  let filterFactory: DaffFilterFactory;
  let filterRequestFactory: DaffFilterRequestFactory;
  let filterToggleRequestFactory: DaffFilterToggleRequestFactory;
  let query: string;

  const testDriverSuccess = (cb: () => Action) => {
    describe('throttling the request', () => {
      it('should call immediately, but throttle subsequent events within a specified timeframe, firing off the last event after throttle', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });

        const stubCollectionMetadata = productCollectionMetadataFactory.create({
          filters: daffFilterArrayToDict(filterFactory.createMany(3)),
        });
        const response: DaffSearchProductDriverResponse = {
          metadata: stubCollectionMetadata,
          collection: {},
        };

        driverSpy.and.returnValue(of(response));

        collectionFacade.metadata$.next(stubCollectionMetadata);

        testScheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a-a-a-a-a', { a: cb() });

          const expectedMarble = '--a 299ms a';
          const expectedValue = {
            a: new DaffSearchLoadSuccess(response),
          };

          expectObservable(
            effects.update$(300, testScheduler),
          ).toBe(expectedMarble, expectedValue);
        });

        expect(driverSpy).toHaveBeenCalledWith(query, {
          appliedSortOption: stubCollectionMetadata.appliedSortOption,
          appliedSortDirection: stubCollectionMetadata.appliedSortDirection,
          currentPage: stubCollectionMetadata.currentPage,
          pageSize: stubCollectionMetadata.pageSize,
          filterRequests: daffFiltersToRequests(stubCollectionMetadata.filters),
        });
      });
    });

    describe('and the driver call succeeds', () => {
      it('should call the driver with filter requests merged with state', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });

        const stubCollectionMetadata = productCollectionMetadataFactory.create({
          filters: daffFilterArrayToDict(filterFactory.createMany(3)),
        });
        const response: DaffSearchProductDriverResponse = {
          metadata: stubCollectionMetadata,
          collection: {},
        };

        driverSpy.and.returnValue(of(response));

        collectionFacade.metadata$.next(stubCollectionMetadata);

        testScheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a', { a: cb() });

          const expectedMarble = '--a';
          const expectedValue = {
            a: new DaffSearchLoadSuccess(response),
          };

          expectObservable(
            effects.update$(0, testScheduler),
          ).toBe(expectedMarble, expectedValue);
        });

        expect(driverSpy).toHaveBeenCalledWith(query, {
          appliedSortOption: stubCollectionMetadata.appliedSortOption,
          appliedSortDirection: stubCollectionMetadata.appliedSortDirection,
          currentPage: stubCollectionMetadata.currentPage,
          pageSize: stubCollectionMetadata.pageSize,
          filterRequests: daffFiltersToRequests(stubCollectionMetadata.filters),
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

        const stubCollectionMetadata = productCollectionMetadataFactory.create({
          filters: daffFilterArrayToDict(filterFactory.createMany(3)),
        });

        collectionFacade.metadata$.next(stubCollectionMetadata);

        testScheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a', { a: cb() });

          const error = new MockError();
          driverSpy.and.returnValue(hot('#', {}, error));

          const expectedMarble = '--(a)';
          const expectedValue = {
            a: new DaffSearchLoadFailure(daffTransformErrorToStateError(error)),
          };

          expectObservable(
            effects.update$(0, testScheduler),
          ).toBe(expectedMarble, expectedValue);
        });

        expect(driverSpy).toHaveBeenCalledWith(query, {
          appliedSortOption: stubCollectionMetadata.appliedSortOption,
          appliedSortDirection: stubCollectionMetadata.appliedSortDirection,
          currentPage: stubCollectionMetadata.currentPage,
          pageSize: stubCollectionMetadata.pageSize,
          filterRequests: daffFiltersToRequests(stubCollectionMetadata.filters),
        });
      });
    });
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffSearchStateTestingModule,
        DaffProductStateTestingModule,
        DaffSearchProductStateTestingModule,
        DaffSearchTestingDriverModule.forRoot(),
        DaffSearchProductTestingDriverModule.forRoot(),
      ],
      providers: [
        DaffSearchProductCollectionEffects,
        provideMockActions(() => actions$),
      ],
    });

    collectionFacade = TestBed.inject(MockDaffCollectionFacade);
    facade = TestBed.inject(MockDaffSearchFacade);
    effects = TestBed.inject(DaffSearchProductCollectionEffects);

    driverSpy = spyOn(TestBed.inject(DaffSearchDriver), 'search');

    productCollectionMetadataFactory = TestBed.inject(DaffCollectionMetadataFactory);
    filterFactory = TestBed.inject(DaffFilterFactory);
    filterRequestFactory = TestBed.inject(DaffFilterRequestFactory);
    filterToggleRequestFactory = TestBed.inject(DaffFilterToggleRequestFactory);

    query = 'query';
    facade.recent$.next([query]);
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
        type: DaffSearchProductCollectionActionTypes.SearchProductReplaceFiltersAction,
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
        type: DaffSearchProductCollectionActionTypes.SearchProductReplaceFiltersAction,
        filters: [filterRequest],
      };
    });

    testDriverSuccess(() => action);
  });

  describe('when clearFilters is triggered', () => {
    let action: DaffCollectionClearFilters;


    beforeEach(() => {
      action = {
        type: DaffSearchProductCollectionActionTypes.SearchProductClearFiltersAction,
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
        type: DaffSearchProductCollectionActionTypes.SearchProductRemoveFiltersAction,
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
        type: DaffSearchProductCollectionActionTypes.SearchProductReplaceFiltersAction,
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
        type: DaffSearchProductCollectionActionTypes.SearchProductReplaceFiltersAction,
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
        type: DaffSearchProductCollectionActionTypes.SearchProductReplaceFiltersAction,
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
        type: DaffSearchProductCollectionActionTypes.SearchProductReplaceFiltersAction,
        sort: {
          option: 'option',
          direction: DaffSortDirectionEnum.Ascending,
        },
      };
    });

    testDriverSuccess(() => action);
  });
});
