import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import {
  DaffCart,
  DaffCartPaymentMethod,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartPaymentFactory
} from '@daffodil/cart/testing';

import { DaffCartPaymentEffects } from './cart-payment.effects';
import {
  DaffCartPaymentLoad,
  DaffCartPaymentLoadSuccess,
  DaffCartPaymentLoadFailure,
  DaffCartPaymentRemove,
  DaffCartPaymentRemoveSuccess,
  DaffCartPaymentRemoveFailure,
  DaffCartPaymentUpdate,
  DaffCartPaymentUpdateSuccess,
  DaffCartPaymentUpdateFailure
} from '../actions/public_api';
import { DaffCartStorageService } from '../storage/cart-storage.service';
import { DaffCartPaymentServiceInterface, DaffCartPaymentDriver } from '../drivers/interfaces/cart-payment-service.interface';

describe('Daffodil | Cart | CartPaymentEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartPaymentEffects<DaffCartPaymentMethod, DaffCart>;

  let mockCart: DaffCart;
  let mockCartPayment: DaffCartPaymentMethod;

  let cartFactory: DaffCartFactory;
  let cartPaymentFactory: DaffCartPaymentFactory;

  let daffPaymentDriverSpy: jasmine.SpyObj<DaffCartPaymentServiceInterface>;

  let daffCartStorageSpy: jasmine.SpyObj<DaffCartStorageService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCartPaymentEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCartPaymentDriver,
          useValue: jasmine.createSpyObj('DaffCartPaymentDriver', ['get', 'update', 'remove'])
        },
        {
          provide: DaffCartStorageService,
          useValue: jasmine.createSpyObj('DaffCartStorageService', ['getCartId'])
        }
      ]
    });

    effects = TestBed.get<DaffCartPaymentEffects<DaffCartPaymentMethod, DaffCart>>(DaffCartPaymentEffects);

    daffPaymentDriverSpy = TestBed.get<DaffCartPaymentServiceInterface>(DaffCartPaymentDriver);
    daffCartStorageSpy = TestBed.get(DaffCartStorageService);

    cartFactory = TestBed.get<DaffCartFactory>(DaffCartFactory);
    cartPaymentFactory = TestBed.get<DaffCartPaymentFactory>(DaffCartPaymentFactory);

    mockCart = cartFactory.create();
    mockCartPayment = cartPaymentFactory.create();

    daffCartStorageSpy.getCartId.and.returnValue(String(mockCart.id));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartPaymentLoadAction is triggered', () => {
    let expected;
    const cartPaymentLoadAction = new DaffCartPaymentLoad();

    describe('and the call to CartPaymentService is successful', () => {
      beforeEach(() => {
        daffPaymentDriverSpy.get.and.returnValue(of(mockCartPayment));
        const cartPaymentLoadSuccessAction = new DaffCartPaymentLoadSuccess(mockCartPayment);
        actions$ = hot('--a', { a: cartPaymentLoadAction });
        expected = cold('--b', { b: cartPaymentLoadSuccessAction });
      });

      it('should dispatch a CartPaymentLoadSuccess action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });

    describe('and the call to CartPaymentService fails', () => {
      beforeEach(() => {
        const error = 'Failed to load cart payment';
        const response = cold('#', {}, error);
        daffPaymentDriverSpy.get.and.returnValue(response);
        const cartPaymentLoadFailureAction = new DaffCartPaymentLoadFailure(error);
        actions$ = hot('--a', { a: cartPaymentLoadAction });
        expected = cold('--b', { b: cartPaymentLoadFailureAction });
      });

      it('should dispatch a CartPaymentLoadFailure action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });
  });

  describe('when CartPaymentUpdateAction is triggered', () => {
    let expected;
    let cartCreateAction;
    const method = 'updatedMethod';

    beforeEach(() => {
      mockCartPayment.method = method;
      cartCreateAction = new DaffCartPaymentUpdate(mockCartPayment);
    });

    describe('and the call to CartPaymentService is successful', () => {
      beforeEach(() => {
        daffPaymentDriverSpy.update.and.returnValue(of(mockCart));
        const cartCreateSuccessAction = new DaffCartPaymentUpdateSuccess(mockCart);
        actions$ = hot('--a', { a: cartCreateAction });
        expected = cold('--b', { b: cartCreateSuccessAction });
      });

      it('should dispatch a CartPaymentUpdateSuccess action', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });

    describe('and the call to CartPaymentService fails', () => {
      beforeEach(() => {
        const error = 'Failed to update cart payment';
        const response = cold('#', {}, error);
        daffPaymentDriverSpy.update.and.returnValue(response);
        const cartCreateFailureAction = new DaffCartPaymentUpdateFailure(error);
        actions$ = hot('--a', { a: cartCreateAction });
        expected = cold('--b', { b: cartCreateFailureAction });
      });

      it('should dispatch a CartPaymentUpdateFailure action', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });
  });

  describe('when CartPaymentRemoveAction is triggered', () => {
    let expected;
    const cartPaymentRemoveAction = new DaffCartPaymentRemove();

    describe('and the clear call to driver is successful', () => {
      beforeEach(() => {
        daffPaymentDriverSpy.remove.and.returnValue(of(undefined));
        const cartPaymentRemoveSuccessAction = new DaffCartPaymentRemoveSuccess();
        actions$ = hot('--a', { a: cartPaymentRemoveAction });
        expected = cold('--b', { b: cartPaymentRemoveSuccessAction });
      });
      it('should return a DaffCartPaymentRemoveSucess action', () => {
        expect(effects.remove$).toBeObservable(expected);
      });
    });

    describe('and the call to CartPaymentService fails', () => {
      beforeEach(() => {
        const error = 'Failed to remove the cart payment';
        const response = cold('#', {}, error);
        daffPaymentDriverSpy.remove.and.returnValue(response);
        const cartPaymentRemoveFailureAction = new DaffCartPaymentRemoveFailure(error);
        actions$ = hot('--a', { a: cartPaymentRemoveAction });
        expected = cold('--b', { b: cartPaymentRemoveFailureAction });
      });
      it('should return a DaffCartPaymentRemoveFailure action', () => {
        expect(effects.remove$).toBeObservable(expected);
      });
    });
  });
});
