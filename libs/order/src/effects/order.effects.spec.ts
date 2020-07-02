import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import {
  DaffOrder,
} from '@daffodil/order';
import { DaffOrderFactory } from '@daffodil/order/testing';
import { DaffStorageServiceError } from '@daffodil/core';
import { DaffCartStorageService, DaffCartStorageFailure } from '@daffodil/cart';

import { DaffOrderEffects } from './order.effects';
import { DaffOrderServiceInterface, DaffOrderDriver } from '../drivers/interfaces/order-service.interface';
import {
  DaffOrderLoad,
  DaffOrderLoadSuccess,
  DaffOrderLoadFailure,
  DaffOrderList,
  DaffOrderListSuccess,
  DaffOrderListFailure
} from '../actions/order.actions';

describe('Daffodil | Order | OrderEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffOrderEffects<DaffOrder>;

  let mockOrder: DaffOrder;
  let orderId: DaffOrder['id'];

  let orderFactory: DaffOrderFactory;

  let daffDriverSpy: jasmine.SpyObj<DaffOrderServiceInterface<DaffOrder>>;
  let daffCartStorageSpy: jasmine.SpyObj<DaffCartStorageService>;

  const cartStorageFailureAction = new DaffCartStorageFailure();
  const throwStorageError = () => { throw new DaffStorageServiceError() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffOrderEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffOrderDriver,
          useValue: jasmine.createSpyObj('DaffOrderDriver', ['get', 'list'])
        },
        {
          provide: DaffCartStorageService,
          useValue: jasmine.createSpyObj('DaffCartStorageService', ['getCartId'])
        }
      ]
    });

    effects = TestBed.get<DaffOrderEffects<DaffOrder>>(DaffOrderEffects);
    daffDriverSpy = TestBed.get<DaffOrderServiceInterface<DaffOrder>>(DaffOrderDriver);
    daffCartStorageSpy = TestBed.get(DaffCartStorageService);
    orderFactory = TestBed.get<DaffOrderFactory>(DaffOrderFactory);

    mockOrder = orderFactory.create();
    orderId = mockOrder.id;

    daffCartStorageSpy.getCartId.and.returnValue('cartId');
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when DaffOrderLoadAction is triggered', () => {
    let expected;
    const orderLoadAction = new DaffOrderLoad(orderId);

    describe('and the call to OrderService is successful', () => {
      beforeEach(() => {
        daffDriverSpy.get.and.returnValue(of(mockOrder));
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
        daffDriverSpy.get.and.returnValue(response);
        const orderLoadFailureAction = new DaffOrderLoadFailure(error);
        actions$ = hot('--a', { a: orderLoadAction });
        expected = cold('--(b|)', { b: orderLoadFailureAction });
      });

      it('should dispatch a DaffOrderLoadFailure action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        daffCartStorageSpy.getCartId.and.callFake(throwStorageError)

        actions$ = hot('--a', { a: orderLoadAction });
        expected = cold('--(b|)', { b: cartStorageFailureAction });
      });

      it('should return a DaffCartStorageFailure', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });
  });

  describe('when DaffOrderListAction is triggered', () => {
    let expected;
    const orderListAction = new DaffOrderList();

    describe('and the call to OrderService is successful', () => {
      beforeEach(() => {
        daffDriverSpy.list.and.returnValue(of([mockOrder]));
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
        daffDriverSpy.list.and.returnValue(response);
        const orderListFailureAction = new DaffOrderListFailure(error);
        actions$ = hot('--a', { a: orderListAction });
        expected = cold('--(b|)', { b: orderListFailureAction });
      });

      it('should return a DaffOrderListFailure action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        daffCartStorageSpy.getCartId.and.callFake(throwStorageError)

        actions$ = hot('--a', { a: orderListAction });
        expected = cold('--(b|)', { b: cartStorageFailureAction });
      });

      it('should return a DaffCartStorageFailure', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });
  });
});
