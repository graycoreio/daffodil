import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { DaffCart } from '@daffodil/cart';
import {
  daffCollectionBuildRequestFromMetadata,
  DaffError,
  DaffInheritableError,
  DaffSortDirectionEnum,
} from '@daffodil/core';
import { daffTransformErrorToStateError } from '@daffodil/core/state';
import { MockDaffCollectionFacade } from '@daffodil/core/state/testing';
import { DaffOrderCollection } from '@daffodil/order';
import {
  DaffOrderServiceInterface,
  DaffOrderDriver,
} from '@daffodil/order/driver';
import { DaffOrderTestingDriverModule } from '@daffodil/order/driver/testing';
import {
  DaffOrderCollectionChangeCurrentPage,
  DaffOrderCollectionChangePageSize,
  DaffOrderCollectionChangeSortingOption,
  DaffOrderListFailure,
  DaffOrderListSuccess,
} from '@daffodil/order/state';
import { DaffOrderStateTestingModule } from '@daffodil/order/state/testing';
import { DaffOrderCollectionFactory } from '@daffodil/order/testing';

import { DaffOrderCollectionEffects } from './order-collection.effects';

class MockError extends DaffInheritableError implements DaffError {
  code = 'code';

  constructor() {
    super('message');
  }
}

describe('@daffodil/order/state | DaffOrderCollectionEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffOrderCollectionEffects;
  let collectionFacade: MockDaffCollectionFacade;
  let driverSpy: jasmine.Spy<DaffOrderServiceInterface['list']>;

  let orderCollectionFactory: DaffOrderCollectionFactory;

  let mockOrderCollection: DaffOrderCollection;
  let cartId: DaffCart['id'];

  const testDriverSuccess = (cb: () => Action) => {
    describe('throttling the request', () => {
      it('should call immediately, but throttle subsequent events within a specified timeframe, firing off the last event after throttle', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        const request = daffCollectionBuildRequestFromMetadata(mockOrderCollection.metadata);

        driverSpy.and.returnValue(of(mockOrderCollection));

        collectionFacade.metadata$.next(mockOrderCollection.metadata);

        testScheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a-a-a-a-a', { a: cb() });

          const expectedMarble = '--a 299ms a';
          const expectedValue = {
            a: new DaffOrderListSuccess(mockOrderCollection),
          };

          expectObservable(
            effects.update$(300, testScheduler),
          ).toBe(expectedMarble, expectedValue);
        });

        expect(driverSpy).toHaveBeenCalledWith(cartId, request);
      });
    });

    describe('and the driver call succeeds', () => {
      it('should call the driver with filter requests merged with state', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        const request = daffCollectionBuildRequestFromMetadata(mockOrderCollection.metadata);

        driverSpy.and.returnValue(of(mockOrderCollection));

        collectionFacade.metadata$.next(mockOrderCollection.metadata);

        testScheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a', { a: cb() });

          const expectedMarble = '--a';
          const expectedValue = {
            a: new DaffOrderListSuccess(mockOrderCollection),
          };

          expectObservable(
            effects.update$(0, testScheduler),
          ).toBe(expectedMarble, expectedValue);
        });

        expect(driverSpy).toHaveBeenCalledWith(cartId, request);
      });
    });
  };

  const testDriverFailure = (cb: () => Action) => {
    describe('and the driver call fails', () => {
      it('should emit DaffCategoryPageLoadFailure with the transformed error', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        const request = daffCollectionBuildRequestFromMetadata(mockOrderCollection.metadata);

        collectionFacade.metadata$.next(mockOrderCollection.metadata);

        testScheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a', { a: cb() });

          const error = new MockError();
          driverSpy.and.returnValue(hot('#', {}, error));

          const expectedMarble = '--(a)';
          const expectedValue = {
            a: new DaffOrderListFailure(daffTransformErrorToStateError(error)),
          };

          expectObservable(
            effects.update$(0, testScheduler),
          ).toBe(expectedMarble, expectedValue);
        });

        expect(driverSpy).toHaveBeenCalledWith(cartId, request);
      });
    });
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffOrderStateTestingModule,
        DaffOrderTestingDriverModule.forRoot(),
      ],
      providers: [
        DaffOrderCollectionEffects,
        provideMockActions(() => actions$),
      ],
    });

    collectionFacade = TestBed.inject(MockDaffCollectionFacade);
    effects = TestBed.inject(DaffOrderCollectionEffects);

    driverSpy = spyOn(TestBed.inject(DaffOrderDriver), 'list');

    orderCollectionFactory = TestBed.inject(DaffOrderCollectionFactory);

    mockOrderCollection = orderCollectionFactory.create();
    cartId = 'cartId';
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when changePageSize is triggered', () => {
    let action: DaffOrderCollectionChangePageSize;

    beforeEach(() => {
      action = new DaffOrderCollectionChangePageSize(5, cartId);
    });

    testDriverSuccess(() => action);
    testDriverFailure(() => action);
  });

  describe('when changeCurrentPage is triggered', () => {
    let action: DaffOrderCollectionChangeCurrentPage;

    beforeEach(() => {
      action = new DaffOrderCollectionChangeCurrentPage(5, cartId);
    });

    testDriverSuccess(() => action);
    testDriverFailure(() => action);
  });

  describe('when changeSorting is triggered', () => {
    let action: DaffOrderCollectionChangeSortingOption;

    beforeEach(() => {
      action = new DaffOrderCollectionChangeSortingOption({
        option: 'option',
        direction: DaffSortDirectionEnum.Ascending,
      }, cartId);
    });

    testDriverSuccess(() => action);
    testDriverFailure(() => action);
  });
});
