import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { daffTransformErrorToStateError } from '@daffodil/core/state';
import {
  DaffOrder,
  DaffOrderCollection,
} from '@daffodil/order';
import {
  DaffOrderServiceInterface,
  DaffOrderDriver,
  DaffOrderNotFoundError,
} from '@daffodil/order/driver';
import { DaffOrderTestingDriverModule } from '@daffodil/order/driver/testing';
import {
  DaffOrderLoad,
  DaffOrderLoadSuccess,
  DaffOrderLoadFailure,
  DaffOrderList,
  DaffOrderListSuccess,
  DaffOrderListFailure,
} from '@daffodil/order/state';
import { DaffOrderCollectionFactory } from '@daffodil/order/testing';

import { DaffOrderEffects } from './order.effects';

describe('@daffodil/order/state | DaffOrderEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffOrderEffects<DaffOrder>;

  let mockOrderCollection: DaffOrderCollection;
  let mockOrder: DaffOrder;
  let orderId: DaffOrder['id'];

  let orderCollectionFactory: DaffOrderCollectionFactory;

  let daffDriver: DaffOrderServiceInterface;
  let driverGetSpy: jasmine.Spy;
  let driverListSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffOrderTestingDriverModule.forRoot(),
      ],
      providers: [
        DaffOrderEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffOrderEffects);
    daffDriver = TestBed.inject<DaffOrderServiceInterface>(DaffOrderDriver);
    orderCollectionFactory = TestBed.inject(DaffOrderCollectionFactory);

    mockOrderCollection = orderCollectionFactory.create();
    mockOrder = Object.values(mockOrderCollection.data)[0];
    orderId = mockOrder.id;

    driverGetSpy = spyOn(daffDriver, 'get');
    driverListSpy = spyOn(daffDriver, 'list');
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when DaffOrderLoadAction is triggered', () => {
    const orderLoadAction = new DaffOrderLoad(orderId, 'cartId');

    describe('and the call to OrderService is successful', () => {
      it('should dispatch a DaffOrderLoadSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverGetSpy.and.returnValue(of(mockOrder));
          const orderLoadSuccessAction = new DaffOrderLoadSuccess(mockOrder);
          actions$ = helpers.hot('--a', { a: orderLoadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: orderLoadSuccessAction });
        });
      });
    });

    describe('and the call to OrderService fails', () => {
      it('should dispatch a DaffOrderLoadFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error = new DaffOrderNotFoundError('Failed to load order');
          const response = helpers.cold<any>('#', {}, error);
          driverGetSpy.and.returnValue(response);
          const orderLoadFailureAction = new DaffOrderLoadFailure(daffTransformErrorToStateError(error));
          actions$ = helpers.hot('--a', { a: orderLoadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: orderLoadFailureAction });
        });
      });
    });
  });

  describe('when DaffOrderListAction is triggered', () => {
    const orderListAction = new DaffOrderList('cartId');

    describe('and the call to OrderService is successful', () => {
      it('should return a DaffOrderListSucess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverListSpy.and.returnValue(of(mockOrderCollection));
          const orderListSuccessAction = new DaffOrderListSuccess(mockOrderCollection);
          actions$ = helpers.hot('--a', { a: orderListAction });
          helpers.expectObservable(effects.list$).toBe('--b', { b: orderListSuccessAction });
        });
      });
    });

    describe('and the call to OrderService fails', () => {
      it('should return a DaffOrderListFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error = new DaffOrderNotFoundError('Failed to list the orders');
          const response = helpers.cold<any>('#', {}, error);
          driverListSpy.and.returnValue(response);
          const orderListFailureAction = new DaffOrderListFailure(daffTransformErrorToStateError(error));
          actions$ = helpers.hot('--a', { a: orderListAction });
          helpers.expectObservable(effects.list$).toBe('--b', { b: orderListFailureAction });
        });
      });
    });
  });
});
