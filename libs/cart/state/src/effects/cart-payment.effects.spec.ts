import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCart,
  DaffCartPaymentMethod,
  DaffCartAddress,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartPaymentServiceInterface,
  DaffCartPaymentDriver,
} from '@daffodil/cart/driver';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
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
  DaffCartPaymentUpdateWithBillingFailure,
} from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartPaymentFactory,
  DaffCartAddressFactory,
} from '@daffodil/cart/testing';
import { DaffStateError } from '@daffodil/core/state';

import { DaffCartPaymentEffects } from './cart-payment.effects';

describe('@daffodil/cart/state | DaffCartPaymentEffects', () => {
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

  let driverGetSpy: jasmine.Spy<DaffCartPaymentServiceInterface['get']>;
  let driverUpdateSpy: jasmine.Spy<DaffCartPaymentServiceInterface['update']>;
  let driverRemoveSpy: jasmine.Spy<DaffCartPaymentServiceInterface['remove']>;
  let getCartIdSpy: jasmine.Spy<DaffCartStorageService['getCartId']>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot(),
      ],
      providers: [
        DaffCartPaymentEffects,
        provideMockActions(() => actions$),
      ],
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
    driverRemoveSpy = spyOn(daffPaymentDriver, 'remove');
    getCartIdSpy = spyOn(daffCartStorageService, 'getCartId');
    getCartIdSpy.and.returnValue(mockCart.id);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartPaymentLoadAction is triggered', () => {
    const cartPaymentLoadAction = new DaffCartPaymentLoad();

    describe('and the call to CartPaymentService is successful', () => {
      it('should dispatch a CartPaymentLoadSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverGetSpy.and.returnValue(of(mockCartPayment));
          const cartPaymentLoadSuccessAction = new DaffCartPaymentLoadSuccess(mockCartPayment);
          actions$ = helpers.hot('--a', { a: cartPaymentLoadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: cartPaymentLoadSuccessAction });
        });
      });
    });

    describe('and the call to CartPaymentService fails', () => {
      it('should dispatch a CartPaymentLoadFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load cart payment' };
          const response = helpers.cold<any>('#', {}, error);
          driverGetSpy.and.returnValue(response);
          const cartPaymentLoadFailureAction = new DaffCartPaymentLoadFailure([error]);
          actions$ = helpers.hot('--a', { a: cartPaymentLoadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: cartPaymentLoadFailureAction });
        });
      });
    });
  });

  describe('when CartPaymentUpdateAction is triggered', () => {
    let cartPaymentUpdateAction;
    const method = 'updatedMethod';

    beforeEach(() => {
      mockCartPayment.method = method;
      cartPaymentUpdateAction = new DaffCartPaymentUpdate(mockCartPayment);
    });

    describe('and the call to CartPaymentService is successful', () => {
      it('should dispatch a CartPaymentUpdateSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverUpdateSpy.and.returnValue(of(mockCart));
          const cartPaymentUpdateSuccessAction = new DaffCartPaymentUpdateSuccess(mockCart);
          actions$ = helpers.hot('--a', { a: cartPaymentUpdateAction });
          helpers.expectObservable(effects.update$).toBe('--b', { b: cartPaymentUpdateSuccessAction });
        });
      });
    });

    describe('and the call to CartPaymentService fails', () => {
      it('should dispatch a CartPaymentUpdateFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to update cart payment' };
          const response = helpers.cold<any>('#', {}, error);
          driverUpdateSpy.and.returnValue(response);
          const cartPaymentUpdateFailureAction = new DaffCartPaymentUpdateFailure([error]);
          actions$ = helpers.hot('--a', { a: cartPaymentUpdateAction });
          helpers.expectObservable(effects.update$).toBe('--b', { b: cartPaymentUpdateFailureAction });
        });
      });
    });
  });

  describe('when CartPaymentUpdateWithBillingAction is triggered', () => {
    let cartPaymentUpdateAction;
    const method = 'updatedMethod';

    beforeEach(() => {
      mockCartPayment.method = method;
      cartPaymentUpdateAction = new DaffCartPaymentUpdateWithBilling(mockCartPayment, mockCartBillingAddress);
    });

    describe('and the call to CartPaymentService is successful', () => {
      it('should dispatch a CartPaymentUpdateWithBillingSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverUpdateSpy.and.returnValue(of(mockCart));
          const cartPaymentUpdateSuccessAction = new DaffCartPaymentUpdateWithBillingSuccess(mockCart);
          actions$ = helpers.hot('--a', { a: cartPaymentUpdateAction });
          helpers.expectObservable(effects.updateWithBilling$).toBe('--b', { b: cartPaymentUpdateSuccessAction });
        });
      });
    });

    describe('and the call to CartPaymentService fails', () => {
      it('should dispatch a CartPaymentUpdateWithBillingFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to update cart payment and billing address' };
          const response = helpers.cold<any>('#', {}, error);
          driverUpdateSpy.and.returnValue(response);
          const cartPaymentUpdateFailureAction = new DaffCartPaymentUpdateWithBillingFailure([error]);
          actions$ = helpers.hot('--a', { a: cartPaymentUpdateAction });
          helpers.expectObservable(effects.updateWithBilling$).toBe('--b', { b: cartPaymentUpdateFailureAction });
        });
      });
    });
  });

  describe('when CartPaymentRemoveAction is triggered', () => {
    const cartPaymentRemoveAction = new DaffCartPaymentRemove();

    describe('and the clear call to driver is successful', () => {
      it('should return a DaffCartPaymentRemoveSucess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverRemoveSpy.and.returnValue(of(undefined));
          const cartPaymentRemoveSuccessAction = new DaffCartPaymentRemoveSuccess();
          actions$ = helpers.hot('--a', { a: cartPaymentRemoveAction });
          helpers.expectObservable(effects.remove$).toBe('--b', { b: cartPaymentRemoveSuccessAction });
        });
      });
    });

    describe('and the call to CartPaymentService fails', () => {
      it('should return a DaffCartPaymentRemoveFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to remove the cart payment' };
          const response = helpers.cold<any>('#', {}, error);
          driverRemoveSpy.and.returnValue(response);
          const cartPaymentRemoveFailureAction = new DaffCartPaymentRemoveFailure([error]);
          actions$ = helpers.hot('--a', { a: cartPaymentRemoveAction });
          helpers.expectObservable(effects.remove$).toBe('--b', { b: cartPaymentRemoveFailureAction });
        });
      });
    });
  });
});
