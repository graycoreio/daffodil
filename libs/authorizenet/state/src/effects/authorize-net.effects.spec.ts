import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffAcceptJsLoadingService,
  DaffAuthorizeNetTokenRequest,
} from '@daffodil/authorizenet';
import {
  DaffAuthorizeNetService,
  DaffAuthorizeNetConfig,
  DaffAuthorizeNetDriver,
  DaffAuthorizeNetPaymentId,
  DaffAuthorizeNetAcceptjsMissingError,
} from '@daffodil/authorizenet/driver';
import { MAGENTO_AUTHORIZE_NET_PAYMENT_ID } from '@daffodil/authorizenet/driver/magento';
import { DaffTestingAuthorizeNetDriverModule } from '@daffodil/authorizenet/driver/testing';
import {
  daffAuthorizeNetReducers,
  DaffAuthorizeNetUpdatePayment,
  DaffAuthorizeNetUpdatePaymentFailure,
  DaffAuthorizeNetUpdatePaymentSuccess,
  DaffLoadAcceptJs,
  DaffLoadAcceptJsSuccess,
  DaffLoadAcceptJsFailure,
  DAFF_AUTHORIZENET_STORE_FEATURE_KEY,
} from '@daffodil/authorizenet/state';
import { DaffCartAddress } from '@daffodil/cart';
import {
  DaffCartPaymentUpdateWithBilling,
  DaffCartPaymentUpdateWithBillingSuccess,
  DaffCartPaymentUpdateWithBillingFailure,
} from '@daffodil/cart/state';
import {
  DaffCartAddressFactory,
  DaffCartFactory,
} from '@daffodil/cart/testing';
import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffAuthorizeNetEffects } from './authorize-net.effects';

class MockError extends DaffInheritableError implements DaffError {
  code = 'mock code';

  constructor(public message: string) {
    super(message);
  }
}

describe('@daffodil/authorizenet/state | DaffAuthorizeNetEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffAuthorizeNetEffects;
  let scheduler: TestScheduler;
  const paymentTokenRequest: DaffAuthorizeNetTokenRequest = {
    creditCard: {
      cardnumber: '1234123412341234',
      month: 'month',
      year: 'year',
      securitycode: '123',
    },
  };
  let store: Store<any>;
  let authorizeNetPaymentService: DaffAuthorizeNetService;
  const stubConfig: DaffAuthorizeNetConfig = {
    clientKey: 'clientKey',
    apiLoginID: 'apiLoginID',
  };
  let stubAddress: DaffCartAddress;
  const acceptJsLoadingServiceSpy = jasmine.createSpyObj('DaffAcceptJsLoadingService', ['load', 'getAccept']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_AUTHORIZENET_STORE_FEATURE_KEY]: combineReducers(daffAuthorizeNetReducers),
        }),
        DaffTestingAuthorizeNetDriverModule.forRoot(),
      ],
      providers: [
        provideMockActions(() => actions$),
        { provide: DaffAcceptJsLoadingService, useValue: acceptJsLoadingServiceSpy },
        { provide: DaffAuthorizeNetPaymentId, useValue: MAGENTO_AUTHORIZE_NET_PAYMENT_ID },
        DaffAuthorizeNetEffects,
      ],
    });

    effects = TestBed.inject(DaffAuthorizeNetEffects);
    authorizeNetPaymentService = TestBed.inject(DaffAuthorizeNetDriver);
    store = TestBed.inject(Store);

    stubAddress = TestBed.inject(DaffCartAddressFactory).create();

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('updatePayment$', () => {

    describe('when the call to the AuthorizeNetService is successful', () => {

      beforeEach(() => {
        spyOn(authorizeNetPaymentService, 'generateToken').and.returnValue(of('token'));
      });

      it('should dispatch a DaffCartPaymentUpdateWithBilling action', () => {
        const authorizeNetUpdatePayment = new DaffAuthorizeNetUpdatePayment(paymentTokenRequest, stubAddress);
        const cartPaymentUpdateWithBillingAction = new DaffCartPaymentUpdateWithBilling({
          method: MAGENTO_AUTHORIZE_NET_PAYMENT_ID,
          payment_info: 'token',
        }, stubAddress);
        scheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a', { a: authorizeNetUpdatePayment });
          expectObservable(effects.updatePayment$).toBe('--a', { a: cartPaymentUpdateWithBillingAction });
        });
      });
    });

    describe('when the call to the AuthorizeNetService fails', () => {

      it('should dispatch an AuthorizeNetUpdatePaymentFailure action', () => {
        const authorizeNetUpdatePayment = new DaffAuthorizeNetUpdatePayment(paymentTokenRequest, stubAddress);
        const error = new MockError('Failed to retrieve the token');
        const authorizeNetUpdatePaymentFailureAction = new DaffAuthorizeNetUpdatePaymentFailure({
          code: error.code,
          recoverable: false,
          message: error.message,
        });
        scheduler.run(({ hot, cold, expectObservable }) => {
          const response = cold<any>('#', {}, error);
          spyOn(authorizeNetPaymentService, 'generateToken').and.returnValue(response);
          actions$ = hot('--a', { a: authorizeNetUpdatePayment });
          expectObservable(effects.updatePayment$).toBe('--b', { b: authorizeNetUpdatePaymentFailureAction });
        });
      });
    });
  });

  describe('updatePaymentSuccessSubstream$', () => {

    it('should dispatch DaffAuthorizeNetUpdatePaymentSuccess when the cart payment method has been successfully updated', () => {
      const stubCart = TestBed.inject(DaffCartFactory).create();
      const authorizeNetUpdatePayment = new DaffAuthorizeNetUpdatePayment(paymentTokenRequest, stubAddress);
      const cartPaymentUpdateWithBillingSuccess = new DaffCartPaymentUpdateWithBillingSuccess(stubCart);
      const authorizeNetPaymentUpdateSuccess = new DaffAuthorizeNetUpdatePaymentSuccess();

      scheduler.run(({ hot, expectObservable }) => {
        actions$ = hot('--a--b', { a: authorizeNetUpdatePayment, b: cartPaymentUpdateWithBillingSuccess });
        expectObservable(effects.updatePaymentSuccessSubstream$).toBe('-----c', { c: authorizeNetPaymentUpdateSuccess });
      });
    });
  });

  describe('updatePaymentFailureSubstream$', () => {

    it('should dispatch DaffAuthorizeNetUpdatePaymentFailure when the cart payment method has failed to update', () => {
      const authorizeNetUpdatePayment = new DaffAuthorizeNetUpdatePayment(paymentTokenRequest, stubAddress);
      const mockCode = 'code';
      const mockErrorMessage = 'Cart payment with billing update failed.';
      const cartPaymentUpdateWithBillingFailure = new DaffCartPaymentUpdateWithBillingFailure([{ code: mockCode, recoverable: false, message: mockErrorMessage }]);
      const authorizeNetPaymentUpdateFailure = new DaffAuthorizeNetUpdatePaymentFailure({
        code: mockCode,
        recoverable: false,
        message: mockErrorMessage,
      });
      scheduler.run(({ hot, expectObservable }) => {
        actions$ = hot('--ab', { a: authorizeNetUpdatePayment, b: cartPaymentUpdateWithBillingFailure });
        expectObservable(effects.updatePaymentFailureSubstream$).toBe('---c', { c: authorizeNetPaymentUpdateFailure });
      });
    });
  });

  describe('loadAcceptJs$', () => {

    it('should load the acceptJs library', () => {
      const loadAcceptJsAction = new DaffLoadAcceptJs();

      scheduler.run(({ hot }) => {
        actions$ = hot('--a', { a: loadAcceptJsAction });
        effects.loadAcceptJs$().subscribe();
      });

      setTimeout(() => {
        expect(acceptJsLoadingServiceSpy.load).toHaveBeenCalled();
      });
      expect(true).toBeTruthy();
    });

    it('should trigger a DaffLoadAcceptJsSuccess action if acceptJs loads', () => {
      acceptJsLoadingServiceSpy.getAccept.and.returnValue(true);
      const loadAcceptJsAction = new DaffLoadAcceptJs();

      scheduler.run(({ hot, expectObservable }) => {
        actions$ = hot('--a', { a: loadAcceptJsAction });
        expectObservable(effects.loadAcceptJs$()).toBe('--b', { b: new DaffLoadAcceptJsSuccess() });
      });
    });

    it('should trigger a DaffLoadAcceptJsFailure action if acceptJs fails to load', () => {
      const mockError = new MockError('Accept Js has failed to load.');
      acceptJsLoadingServiceSpy.getAccept.and.throwError(mockError);
      const loadAcceptJsAction = new DaffLoadAcceptJs();

      scheduler.run(({ hot, expectObservable }) => {
        actions$ = hot('--a', { a: loadAcceptJsAction });
        expectObservable(effects.loadAcceptJs$(0, 0)).toBe('--b', { b: new DaffLoadAcceptJsFailure({
          code: mockError.code,
          recoverable: false,
          message: mockError.message,
        }) });
      });
    });

    it('should trigger a DaffLoadAcceptJsFailure action if acceptJs fails to load but does not throw an error', () => {
      acceptJsLoadingServiceSpy.getAccept.and.returnValue(null);
      const loadAcceptJsAction = new DaffLoadAcceptJs();

      scheduler.run(({ hot, expectObservable }) => {
        actions$ = hot('--a', { a: loadAcceptJsAction });
        expectObservable(effects.loadAcceptJs$(0, 0)).toBe('--b', { b: new DaffLoadAcceptJsFailure(<any>jasmine.any(DaffAuthorizeNetAcceptjsMissingError)) });
      });
    });
  });
});
