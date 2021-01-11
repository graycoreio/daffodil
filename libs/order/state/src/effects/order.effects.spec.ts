import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import {
  DaffOrder,
} from '@daffodil/order';
import {
  DaffOrderServiceInterface,
  DaffOrderDriver
} from '@daffodil/order/driver';
import {
  DaffOrderLoad,
  DaffOrderLoadSuccess,
  DaffOrderLoadFailure,
  DaffOrderList,
  DaffOrderListSuccess,
  DaffOrderListFailure
} from '@daffodil/order/state';
import { DaffOrderFactory } from '@daffodil/order/testing';
import { DaffOrderTestingDriverModule } from '@daffodil/order/driver/testing';

import { DaffOrderEffects } from './order.effects';

describe('Daffodil | Order | OrderEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffOrderEffects<DaffOrder>;

  let mockOrder: DaffOrder;
  let orderId: DaffOrder['id'];

  let orderFactory: DaffOrderFactory;

  let daffDriver: DaffOrderServiceInterface;
  let driverGetSpy: jasmine.Spy;
  let driverListSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffOrderTestingDriverModule.forRoot()
      ],
      providers: [
        DaffOrderEffects,
        provideMockActions(() => actions$),
      ]
    });

    effects = TestBed.inject<DaffOrderEffects<DaffOrder>>(DaffOrderEffects);
    daffDriver = TestBed.inject<DaffOrderServiceInterface>(DaffOrderDriver);
    orderFactory = TestBed.inject<DaffOrderFactory>(DaffOrderFactory);

    mockOrder = orderFactory.create();
    orderId = mockOrder.id;

    driverGetSpy = spyOn(daffDriver, 'get');
    driverListSpy = spyOn(daffDriver, 'list');
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when DaffOrderLoadAction is triggered', () => {
    let expected;
    const orderLoadAction = new DaffOrderLoad(orderId, 'cartId');

    describe('and the call to OrderService is successful', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(of(mockOrder));
        const orderLoadSuccessAction = new DaffOrderLoadSuccess(mockOrder);
        actions$ = hot('--a', { a: orderLoadAction });
        expected = cold('--b', { b: orderLoadSuccessAction });
      });

      it('should dispatch a DaffOrderLoadSuccess action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });

    describe('and the call to OrderService fails', () => {
      beforeEach(() => {
        const error = 'Failed to load order';
        const response = cold('#', {}, error);
        driverGetSpy.and.returnValue(response);
        const orderLoadFailureAction = new DaffOrderLoadFailure(error);
        actions$ = hot('--a', { a: orderLoadAction });
        expected = cold('--b', { b: orderLoadFailureAction });
      });

      it('should dispatch a DaffOrderLoadFailure action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });
  });

  describe('when DaffOrderListAction is triggered', () => {
    let expected;
    const orderListAction = new DaffOrderList('cartId');

    describe('and the call to OrderService is successful', () => {
      beforeEach(() => {
        driverListSpy.and.returnValue(of([mockOrder]));
        const orderListSuccessAction = new DaffOrderListSuccess([mockOrder]);
        actions$ = hot('--a', { a: orderListAction });
        expected = cold('--b', { b: orderListSuccessAction });
      });

      it('should return a DaffOrderListSucess action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });

    describe('and the call to OrderService fails', () => {
      beforeEach(() => {
        const error = 'Failed to list the orders';
        const response = cold('#', {}, error);
        driverListSpy.and.returnValue(response);
        const orderListFailureAction = new DaffOrderListFailure(error);
        actions$ = hot('--a', { a: orderListAction });
        expected = cold('--b', { b: orderListFailureAction });
      });

      it('should return a DaffOrderListFailure action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });
  });
});
