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
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';

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

  let daffPaymentDriver: DaffCartPaymentServiceInterface;
  let daffCartStorageService: DaffCartStorageService;

  let driverGetSpy: jasmine.Spy;
  let driverUpdateSpy: jasmine.Spy;
  let driverUpdateWithBillingSpy: jasmine.Spy;
  let driverRemoveSpy: jasmine.Spy;
  let getCartIdSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot()
      ],
      providers: [
        DaffCartPaymentEffects,
        provideMockActions(() => actions$),
      ]
    });

    effects = TestBed.inject(DaffCartPaymentEffects);

    daffPaymentDriver = TestBed.inject(DaffCartPaymentDriver);
    daffCartStorageService = TestBed.inject(DaffCartStorageService);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartPaymentFactory = TestBed.inject(DaffCartPaymentFactory);
    cartAddressFactory = TestBed.inject(DaffCartAddressFactory);

    mockCart = cartFactory.create();
    mockCartPayment = cartPaymentFactory.create();
    mockCartBillingAddress = cartAddressFactory.create();

    driverGetSpy = spyOn(daffPaymentDriver, 'get');
    driverUpdateSpy = spyOn(daffPaymentDriver, 'update');
    driverUpdateWithBillingSpy = spyOn(daffPaymentDriver, 'updateWithBilling');
    driverRemoveSpy = spyOn(daffPaymentDriver, 'remove');
    getCartIdSpy = spyOn(daffCartStorageService, 'getCartId');
    getCartIdSpy.and.returnValue(String(mockCart.id));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartPaymentLoadAction is triggered', () => {
    let expected;
    const cartPaymentLoadAction = new DaffCartPaymentLoad();

    describe('and the call to CartPaymentService is successful', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(of(mockCartPayment));
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
        driverGetSpy.and.returnValue(response);
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
        driverUpdateSpy.and.returnValue(of(mockCart));
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
        driverUpdateSpy.and.returnValue(response);
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
        driverUpdateWithBillingSpy.and.returnValue(of(mockCart));
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
        driverUpdateWithBillingSpy.and.returnValue(response);
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
        driverRemoveSpy.and.returnValue(of(undefined));
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
        driverRemoveSpy.and.returnValue(response);
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
