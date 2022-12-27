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
  DaffAuthComplete,
  DaffAuthLogoutSuccess,
} from '@daffodil/auth/state';
import {
  DaffCart,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartServiceInterface,
  DaffCartDriver,
  DaffCartDriverErrorCodes,
} from '@daffodil/cart/driver';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import {
  DaffResolveCartFailure,
  DaffResolveCartSuccess,
  DaffCartCreate,
  DaffCartLoadFailure,
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
  let getCartIdSpy: jasmine.Spy;

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
    getCartIdSpy.and.returnValue(String(stubCart.id));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when AuthCompleteAction is triggered', () => {
    let expected;
    const authCompleteAction = new DaffAuthComplete();

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

  describe('when LogoutSuccessAction is triggered', () => {
    let expected;
    const logoutSuccessAction = new DaffAuthLogoutSuccess();

    beforeEach(() => {
      const cartCreateAction = new DaffCartCreate();
      actions$ = hot('--a', { a: logoutSuccessAction });
      expected = cold('--b', { b: cartCreateAction });
    });

    it('should dispatch cart create', () => {
      expect(effects.createAfterLogout$).toBeObservable(expected);
    });
  });

  describe('when ResolveCartFailureAction is triggered', () => {
    let expected;

    describe('and the error is a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
        const resolveCartFailureAction = new DaffResolveCartFailure([error]);
        const cartCreateAction = new DaffCartCreate();
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('--b', { b: cartCreateAction });
      });

      it('should dispatch cart create', () => {
        expect(effects.createWhenUnathorized$).toBeObservable(expected);
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
        const resolveCartFailureAction = new DaffResolveCartFailure([error]);
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('---');
      });

      it('should not dispatch anything', () => {
        expect(effects.createWhenUnathorized$).toBeObservable(expected);
      });
    });
  });

  describe('when CartLoadFailureAction is triggered', () => {
    let expected;

    describe('and the error is a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
        const resolveCartFailureAction = new DaffCartLoadFailure([error]);
        const cartCreateAction = new DaffCartCreate();
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('--b', { b: cartCreateAction });
      });

      it('should dispatch cart create', () => {
        expect(effects.createWhenUnathorized$).toBeObservable(expected);
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
        const resolveCartFailureAction = new DaffCartLoadFailure([error]);
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('---');
      });

      it('should not dispatch anything', () => {
        expect(effects.createWhenUnathorized$).toBeObservable(expected);
      });
    });
  });
});
