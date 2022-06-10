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
} from '@daffodil/core';
import {
  DaffCollectionChangeCurrentPage,
  DaffCollectionChangePageSize,
  DaffCollectionChangeSortingOption,
  daffTransformErrorToStateError,
} from '@daffodil/core/state';
import {
  daffProductFilterArrayToDict,
  DaffProductFilterRequest,
  daffProductFiltersToRequests,
  DaffProductFilterToggleRequest,
} from '@daffodil/product';
import {
  DaffProductCollectionApplyFilters,
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
  let collectionFacade: MockDaffProductCollectionFacade;
  let facade: MockDaffSearchFacade;
  let driverSpy: jasmine.Spy<DaffSearchProductDriverInterface['search']>;

  let productCollectionMetadataFactory: DaffProductCollectionMetadataFactory;
  let filterFactory: DaffProductFilterFactory;
  let filterRequestFactory: DaffProductFilterRequestFactory;
  let filterToggleRequestFactory: DaffProductFilterToggleRequestFactory;
  let query: string;

  const testDriverSuccess = (cb: () => Action) => {
    describe('throttling the request', () => {
      it('should call immediately, but throttle subsequent events within a specified timeframe, firing off the last event after throttle', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });

        const stubProductCollectionMetadata = productCollectionMetadataFactory.create({
          filters: daffProductFilterArrayToDict(filterFactory.createMany(3)),
        });
        const response: DaffSearchProductDriverResponse = {
          metadata: stubProductCollectionMetadata,
          collection: {},
        };

        driverSpy.and.returnValue(of(response));

        collectionFacade.metadata$.next(stubProductCollectionMetadata);

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
          appliedSortOption: stubProductCollectionMetadata.appliedSortOption,
          appliedSortDirection: stubProductCollectionMetadata.appliedSortDirection,
          currentPage: stubProductCollectionMetadata.currentPage,
          pageSize: stubProductCollectionMetadata.pageSize,
          filterRequests: daffProductFiltersToRequests(stubProductCollectionMetadata.filters),
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
        const response: DaffSearchProductDriverResponse = {
          metadata: stubProductCollectionMetadata,
          collection: {},
        };

        driverSpy.and.returnValue(of(response));

        collectionFacade.metadata$.next(stubProductCollectionMetadata);

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
          appliedSortOption: stubProductCollectionMetadata.appliedSortOption,
          appliedSortDirection: stubProductCollectionMetadata.appliedSortDirection,
          currentPage: stubProductCollectionMetadata.currentPage,
          pageSize: stubProductCollectionMetadata.pageSize,
          filterRequests: daffProductFiltersToRequests(stubProductCollectionMetadata.filters),
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

        const stubProductCollectionMetadata = productCollectionMetadataFactory.create({
          filters: daffProductFilterArrayToDict(filterFactory.createMany(3)),
        });

        collectionFacade.metadata$.next(stubProductCollectionMetadata);

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
          appliedSortOption: stubProductCollectionMetadata.appliedSortOption,
          appliedSortDirection: stubProductCollectionMetadata.appliedSortDirection,
          currentPage: stubProductCollectionMetadata.currentPage,
          pageSize: stubProductCollectionMetadata.pageSize,
          filterRequests: daffProductFiltersToRequests(stubProductCollectionMetadata.filters),
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

    collectionFacade = TestBed.inject(MockDaffProductCollectionFacade);
    facade = TestBed.inject(MockDaffSearchFacade);
    effects = TestBed.inject(DaffSearchProductCollectionEffects);

    driverSpy = spyOn(TestBed.inject(DaffSearchDriver), 'search');

    productCollectionMetadataFactory = TestBed.inject(DaffProductCollectionMetadataFactory);
    filterFactory = TestBed.inject(DaffProductFilterFactory);
    filterRequestFactory = TestBed.inject(DaffProductFilterRequestFactory);
    filterToggleRequestFactory = TestBed.inject(DaffProductFilterToggleRequestFactory);

    query = 'query';
    facade.recent$.next([query]);
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
        type: DaffSearchProductCollectionActionTypes.SearchProductReplaceFiltersAction,
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
        type: DaffSearchProductCollectionActionTypes.SearchProductReplaceFiltersAction,
        filters: [filterRequest],
      };
    });

    testDriverSuccess(() => action);
  });

  describe('when clearFilters is triggered', () => {
    let action: DaffProductCollectionClearFilters;


    beforeEach(() => {
      action = {
        type: DaffSearchProductCollectionActionTypes.SearchProductClearFiltersAction,
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
        type: DaffSearchProductCollectionActionTypes.SearchProductRemoveFiltersAction,
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
        type: DaffSearchProductCollectionActionTypes.SearchProductReplaceFiltersAction,
        filter: toggleRequest,
      };
    });

    testDriverSuccess(() => action);
  });

  describe('when changePageSize is triggered', () => {
    let toggleRequest: DaffProductFilterToggleRequest;
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
    let toggleRequest: DaffProductFilterToggleRequest;
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
    let toggleRequest: DaffProductFilterToggleRequest;
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
