import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffStateError } from '@daffodil/core/state';
import {
  DaffCart,
  DaffCartPaymentMethod,
  DaffCartAddress,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartPaymentLoad,
  DaffCartPaymentLoadSuccess,
  DaffCartPaymentLoadFailure,
  DaffCartPaymentRemove,
  DaffCartPaymentRemoveSuccess,
  DaffCartPaymentRemoveFailure,
  DaffCartPaymentUpdate,
  DaffCartPaymentUpdateSuccess,
  DaffCartPaymentUpdateFailure,
  DaffCartPaymentUpdateWithBilling,
  DaffCartPaymentUpdateWithBillingSuccess,
  DaffCartPaymentUpdateWithBillingFailure
} from '@daffodil/cart/state';
import { DaffCartPaymentServiceInterface, DaffCartPaymentDriver } from '@daffodil/cart/driver';
import {
  DaffCartFactory,
  DaffCartPaymentFactory,
  DaffCartAddressFactory
} from '@daffodil/cart/testing';

import { DaffCartPaymentEffects } from './cart-payment.effects';

describe('Daffodil | Cart | CartPaymentEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartPaymentEffects;

  let mockCart: DaffCart;
  let mockCartPayment: DaffCartPaymentMethod;
  let mockCartBillingAddress: DaffCartAddress;

  let cartFactory: DaffCartFactory;
  let cartPaymentFactory: DaffCartPaymentFactory;
  let cartAddressFactory: DaffCartAddressFactory;

  let daffPaymentDriverSpy: jasmine.SpyObj<DaffCartPaymentServiceInterface>;

  let daffCartStorageSpy: jasmine.SpyObj<DaffCartStorageService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCartPaymentEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCartPaymentDriver,
          useValue: jasmine.createSpyObj('DaffCartPaymentDriver', ['get', 'update', 'updateWithBilling', 'remove'])
        },
        {
          provide: DaffCartStorageService,
          useValue: jasmine.createSpyObj('DaffCartStorageService', ['getCartId'])
        }
      ]
    });

    effects = TestBed.inject(DaffCartPaymentEffects);

    daffPaymentDriverSpy = TestBed.inject<DaffCartPaymentServiceInterface>(DaffCartPaymentDriver);
    daffCartStorageSpy = TestBed.inject(DaffCartStorageService);

    cartFactory = TestBed.inject<DaffCartFactory>(DaffCartFactory);
    cartPaymentFactory = TestBed.inject<DaffCartPaymentFactory>(DaffCartPaymentFactory);
    cartAddressFactory = TestBed.inject<DaffCartAddressFactory>(DaffCartAddressFactory);

    mockCart = cartFactory.create();
    mockCartPayment = cartPaymentFactory.create();
    mockCartBillingAddress = cartAddressFactory.create();

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
        const error: DaffStateError = {code: 'code', message: 'Failed to load cart payment'};
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
    let cartPaymentUpdateAction;
    const method = 'updatedMethod';

    beforeEach(() => {
      mockCartPayment.method = method;
      cartPaymentUpdateAction = new DaffCartPaymentUpdate(mockCartPayment);
    });

    describe('and the call to CartPaymentService is successful', () => {
      beforeEach(() => {
        daffPaymentDriverSpy.update.and.returnValue(of(mockCart));
        const cartPaymentUpdateSuccessAction = new DaffCartPaymentUpdateSuccess(mockCart);
        actions$ = hot('--a', { a: cartPaymentUpdateAction });
        expected = cold('--b', { b: cartPaymentUpdateSuccessAction });
      });

      it('should dispatch a CartPaymentUpdateSuccess action', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });

    describe('and the call to CartPaymentService fails', () => {
      beforeEach(() => {
        const error: DaffStateError = {code: 'code', message: 'Failed to update cart payment'};
        const response = cold('#', {}, error);
        daffPaymentDriverSpy.update.and.returnValue(response);
        const cartPaymentUpdateFailureAction = new DaffCartPaymentUpdateFailure(error);
        actions$ = hot('--a', { a: cartPaymentUpdateAction });
        expected = cold('--b', { b: cartPaymentUpdateFailureAction });
      });

      it('should dispatch a CartPaymentUpdateFailure action', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });
  });

  describe('when CartPaymentUpdateWithBillingAction is triggered', () => {
    let expected;
    let cartPaymentUpdateAction;
    const method = 'updatedMethod';

    beforeEach(() => {
      mockCartPayment.method = method;
      cartPaymentUpdateAction = new DaffCartPaymentUpdateWithBilling(mockCartPayment, mockCartBillingAddress);
    });

    describe('and the call to CartPaymentService is successful', () => {
      beforeEach(() => {
        daffPaymentDriverSpy.updateWithBilling.and.returnValue(of(mockCart));
        const cartPaymentUpdateSuccessAction = new DaffCartPaymentUpdateWithBillingSuccess(mockCart);
        actions$ = hot('--a', { a: cartPaymentUpdateAction });
        expected = cold('--b', { b: cartPaymentUpdateSuccessAction });
      });

      it('should dispatch a CartPaymentUpdateWithBillingSuccess action', () => {
        expect(effects.updateWithBilling$).toBeObservable(expected);
      });
    });

    describe('and the call to CartPaymentService fails', () => {
      beforeEach(() => {
        const error: DaffStateError = {code: 'code', message: 'Failed to update cart payment and billing address'};
        const response = cold('#', {}, error);
        daffPaymentDriverSpy.updateWithBilling.and.returnValue(response);
        const cartPaymentUpdateFailureAction = new DaffCartPaymentUpdateWithBillingFailure(error);
        actions$ = hot('--a', { a: cartPaymentUpdateAction });
        expected = cold('--b', { b: cartPaymentUpdateFailureAction });
      });

      it('should dispatch a CartPaymentUpdateWithBillingFailure action', () => {
        expect(effects.updateWithBilling$).toBeObservable(expected);
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
        const error: DaffStateError = {code: 'code', message: 'Failed to remove the cart payment'};
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
