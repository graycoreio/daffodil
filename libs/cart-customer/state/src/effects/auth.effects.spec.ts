import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffAuthLoginSuccess,
  DaffAuthRegisterSuccess,
  DaffResetPasswordSuccess,
} from '@daffodil/auth/state';
import {
  DaffCart,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartServiceInterface,
  DaffCartDriver,
} from '@daffodil/cart/driver';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import {
  DaffResolveCartFailure,
  DaffResolveCartSuccess,
} from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffStorageServiceError } from '@daffodil/core';
import { DaffStateError } from '@daffodil/core/state';

import { DaffCartCustomerAuthEffects } from './auth.effects';

describe('@daffodil/cart-customer/state | DaffCartCustomerAuthEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartCustomerAuthEffects;

  let cartFactory: DaffCartFactory;
  let stubCart: DaffCart;

  let driver: DaffCartServiceInterface;
  let cartStorageService: DaffCartStorageService;

  let driverGetSpy: jasmine.Spy<DaffCartServiceInterface['get']>;
  let driverMergeSpy: jasmine.Spy<DaffCartServiceInterface['merge']>;
  let driverCreateSpy: jasmine.Spy<DaffCartServiceInterface['create']>;
  let getCartIdSpy: jasmine.Spy<DaffCartStorageService['getCartId']>;
  let removeCartIdSpy: jasmine.Spy<DaffCartStorageService['removeCartId']>;

  const throwStorageError = message => {
    throw new DaffStorageServiceError(message);
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot(),
      ],
      providers: [
        DaffCartCustomerAuthEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffCartCustomerAuthEffects);
    driver = TestBed.inject(DaffCartDriver);
    cartFactory = TestBed.inject(DaffCartFactory);
    cartStorageService = TestBed.inject(DaffCartStorageService);

    stubCart = cartFactory.create();

    driverGetSpy = spyOn(driver, 'get');
    driverMergeSpy = spyOn(driver, 'merge');
    driverCreateSpy = spyOn(driver, 'create');
    getCartIdSpy = spyOn(cartStorageService, 'getCartId');
    removeCartIdSpy = spyOn(cartStorageService, 'removeCartId');
    getCartIdSpy.and.returnValue(stubCart.id);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when DaffAuthLoginSuccess is triggered', () => {
    let expected;
    const authCompleteAction = new DaffAuthLoginSuccess(null);

    describe('and there is a cart ID in storage', () => {
      beforeEach(() => {
        getCartIdSpy.and.returnValue(stubCart.id);
      });

      describe('and the call to the driver is successful', () => {
        beforeEach(() => {
          driverMergeSpy.and.returnValue(of({
            response: stubCart,
            errors: [],
          }));
          const resolveSuccessAction = new DaffResolveCartSuccess(stubCart);
          actions$ = hot('--a', { a: authCompleteAction });
          expected = cold('--b', { b: resolveSuccessAction });
        });

        it('should dispatch a DaffResolveCartSuccess action', () => {
          expect(effects.mergeAfterLogin$).toBeObservable(expected);
        });
      });

      describe('and the call to the driver fails', () => {
        beforeEach(() => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load cart' };
          const response = cold('#', {}, error);
          driverMergeSpy.and.returnValue(response);
          actions$ = hot('--a', { a: authCompleteAction });
        });

        describe('and the call to the driver is successful', () => {
          beforeEach(() => {
            driverGetSpy.and.returnValue(of({
              response: stubCart,
              errors: [],
            }));
            const resolveSuccessAction = new DaffResolveCartSuccess(stubCart);
            actions$ = hot('--a', { a: authCompleteAction });
            expected = cold('--b', { b: resolveSuccessAction });
          });

          it('should dispatch a DaffResolveCartSuccess action', () => {
            expect(effects.mergeAfterLogin$).toBeObservable(expected);
          });
        });

        describe('and the call to the driver fails', () => {
          beforeEach(() => {
            const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load cart' };
            const response = cold('#', {}, error);
            driverGetSpy.and.returnValue(response);
            const resolveFailureAction = new DaffResolveCartFailure([error]);
            actions$ = hot('--a', { a: authCompleteAction });
            expected = cold('--b', { b: resolveFailureAction });
          });

          it('should dispatch a DaffResolveCartFailure action', () => {
            expect(effects.mergeAfterLogin$).toBeObservable(expected);
          });
        });
      });
    });

    describe('and there is not a cart ID in storage', () => {
      beforeEach(() => {
        getCartIdSpy.and.returnValue(null);
      });

      describe('and the call to the driver is successful', () => {
        beforeEach(() => {
          driverGetSpy.and.returnValue(of({
            response: stubCart,
            errors: [],
          }));
          const resolveSuccessAction = new DaffResolveCartSuccess(stubCart);
          actions$ = hot('--a', { a: authCompleteAction });
          expected = cold('--b', { b: resolveSuccessAction });
        });

        it('should dispatch a DaffResolveCartSuccess action', () => {
          expect(effects.mergeAfterLogin$).toBeObservable(expected);
        });

        it('should not try to merge the carts', () => {
          expect(driverMergeSpy).not.toHaveBeenCalled();
        });
      });

      describe('and the call to the driver fails', () => {
        beforeEach(() => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load cart' };
          const response = cold('#', {}, error);
          driverGetSpy.and.returnValue(response);
          const resolveFailureAction = new DaffResolveCartFailure([error]);
          actions$ = hot('--a', { a: authCompleteAction });
          expected = cold('--b', { b: resolveFailureAction });
        });

        it('should dispatch a DaffResolveCartFailure action', () => {
          expect(effects.mergeAfterLogin$).toBeObservable(expected);
        });
      });
    });
  });

  describe('when DaffAuthRegisterSuccess is triggered with a token', () => {
    let expected;
    const authCompleteAction = new DaffAuthRegisterSuccess('token');

    describe('and there is a cart ID in storage', () => {
      beforeEach(() => {
        getCartIdSpy.and.returnValue(stubCart.id);
      });

      describe('and the call to the driver is successful', () => {
        beforeEach(() => {
          driverMergeSpy.and.returnValue(of({
            response: stubCart,
            errors: [],
          }));
          const resolveSuccessAction = new DaffResolveCartSuccess(stubCart);
          actions$ = hot('--a', { a: authCompleteAction });
          expected = cold('--b', { b: resolveSuccessAction });
        });

        it('should dispatch a DaffResolveCartSuccess action', () => {
          expect(effects.mergeAfterLogin$).toBeObservable(expected);
        });
      });

      describe('and the call to the driver fails', () => {
        beforeEach(() => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load cart' };
          const response = cold('#', {}, error);
          driverMergeSpy.and.returnValue(response);
          actions$ = hot('--a', { a: authCompleteAction });
        });

        describe('and the call to the driver is successful', () => {
          beforeEach(() => {
            driverGetSpy.and.returnValue(of({
              response: stubCart,
              errors: [],
            }));
            const resolveSuccessAction = new DaffResolveCartSuccess(stubCart);
            actions$ = hot('--a', { a: authCompleteAction });
            expected = cold('--b', { b: resolveSuccessAction });
          });

          it('should dispatch a DaffResolveCartSuccess action', () => {
            expect(effects.mergeAfterLogin$).toBeObservable(expected);
          });
        });

        describe('and the call to the driver fails', () => {
          beforeEach(() => {
            const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load cart' };
            const response = cold('#', {}, error);
            driverGetSpy.and.returnValue(response);
            const resolveFailureAction = new DaffResolveCartFailure([error]);
            actions$ = hot('--a', { a: authCompleteAction });
            expected = cold('--b', { b: resolveFailureAction });
          });

          it('should dispatch a DaffResolveCartFailure action', () => {
            expect(effects.mergeAfterLogin$).toBeObservable(expected);
          });
        });
      });
    });

    describe('and there is not a cart ID in storage', () => {
      beforeEach(() => {
        getCartIdSpy.and.returnValue(null);
      });

      describe('and the call to the driver is successful', () => {
        beforeEach(() => {
          driverGetSpy.and.returnValue(of({
            response: stubCart,
            errors: [],
          }));
          const resolveSuccessAction = new DaffResolveCartSuccess(stubCart);
          actions$ = hot('--a', { a: authCompleteAction });
          expected = cold('--b', { b: resolveSuccessAction });
        });

        it('should dispatch a DaffResolveCartSuccess action', () => {
          expect(effects.mergeAfterLogin$).toBeObservable(expected);
        });

        it('should not try to merge the carts', () => {
          expect(driverMergeSpy).not.toHaveBeenCalled();
        });
      });

      describe('and the call to the driver fails', () => {
        beforeEach(() => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load cart' };
          const response = cold('#', {}, error);
          driverGetSpy.and.returnValue(response);
          const resolveFailureAction = new DaffResolveCartFailure([error]);
          actions$ = hot('--a', { a: authCompleteAction });
          expected = cold('--b', { b: resolveFailureAction });
        });

        it('should dispatch a DaffResolveCartFailure action', () => {
          expect(effects.mergeAfterLogin$).toBeObservable(expected);
        });
      });
    });
  });

  describe('when DaffResetPasswordSuccess is triggered with a token', () => {
    let expected;
    const authCompleteAction = new DaffResetPasswordSuccess('token');

    describe('and there is a cart ID in storage', () => {
      beforeEach(() => {
        getCartIdSpy.and.returnValue(stubCart.id);
      });

      describe('and the call to the driver is successful', () => {
        beforeEach(() => {
          driverMergeSpy.and.returnValue(of({
            response: stubCart,
            errors: [],
          }));
          const resolveSuccessAction = new DaffResolveCartSuccess(stubCart);
          actions$ = hot('--a', { a: authCompleteAction });
          expected = cold('--b', { b: resolveSuccessAction });
        });

        it('should dispatch a DaffResolveCartSuccess action', () => {
          expect(effects.mergeAfterLogin$).toBeObservable(expected);
        });
      });

      describe('and the call to the driver fails', () => {
        beforeEach(() => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load cart' };
          const response = cold('#', {}, error);
          driverMergeSpy.and.returnValue(response);
          actions$ = hot('--a', { a: authCompleteAction });
        });

        describe('and the call to the driver is successful', () => {
          beforeEach(() => {
            driverGetSpy.and.returnValue(of({
              response: stubCart,
              errors: [],
            }));
            const resolveSuccessAction = new DaffResolveCartSuccess(stubCart);
            actions$ = hot('--a', { a: authCompleteAction });
            expected = cold('--b', { b: resolveSuccessAction });
          });

          it('should dispatch a DaffResolveCartSuccess action', () => {
            expect(effects.mergeAfterLogin$).toBeObservable(expected);
          });
        });

        describe('and the call to the driver fails', () => {
          beforeEach(() => {
            const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load cart' };
            const response = cold('#', {}, error);
            driverGetSpy.and.returnValue(response);
            const resolveFailureAction = new DaffResolveCartFailure([error]);
            actions$ = hot('--a', { a: authCompleteAction });
            expected = cold('--b', { b: resolveFailureAction });
          });

          it('should dispatch a DaffResolveCartFailure action', () => {
            expect(effects.mergeAfterLogin$).toBeObservable(expected);
          });
        });
      });
    });

    describe('and there is not a cart ID in storage', () => {
      beforeEach(() => {
        getCartIdSpy.and.returnValue(null);
      });

      describe('and the call to the driver is successful', () => {
        beforeEach(() => {
          driverGetSpy.and.returnValue(of({
            response: stubCart,
            errors: [],
          }));
          const resolveSuccessAction = new DaffResolveCartSuccess(stubCart);
          actions$ = hot('--a', { a: authCompleteAction });
          expected = cold('--b', { b: resolveSuccessAction });
        });

        it('should dispatch a DaffResolveCartSuccess action', () => {
          expect(effects.mergeAfterLogin$).toBeObservable(expected);
        });

        it('should not try to merge the carts', () => {
          expect(driverMergeSpy).not.toHaveBeenCalled();
        });
      });

      describe('and the call to the driver fails', () => {
        beforeEach(() => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load cart' };
          const response = cold('#', {}, error);
          driverGetSpy.and.returnValue(response);
          const resolveFailureAction = new DaffResolveCartFailure([error]);
          actions$ = hot('--a', { a: authCompleteAction });
          expected = cold('--b', { b: resolveFailureAction });
        });

        it('should dispatch a DaffResolveCartFailure action', () => {
          expect(effects.mergeAfterLogin$).toBeObservable(expected);
        });
      });
    });
  });
});
