import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

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

interface TestState {
  wasCardIdInStorage: boolean;
  didFirstDriverCallSucceed: boolean;
  didLastDriverCallSucceed?: boolean;
  whatActionWasReturned: Action;
  whatErrorWasThrown?: DaffStateError;
  whatCardIdWasFound: string | null;
}

interface ActionState {
  whatAction: DaffAuthLoginSuccess | DaffAuthRegisterSuccess | DaffResetPasswordSuccess;
}

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

  describe('when an action is triggered', () => {
    const actionStates: ActionState[] = [
      {
        whatAction: new DaffAuthLoginSuccess(null),
      },
      {
        whatAction: new DaffAuthRegisterSuccess('token'),
      },
      {
        whatAction: new DaffResetPasswordSuccess('token'),
      },
    ];

    actionStates.forEach((as) => {
      const authCompleteAction = as.whatAction;

      it('should compute the next action correctly', () => {
        const testStates: TestState[] = [
          {
            wasCardIdInStorage: true,
            didFirstDriverCallSucceed: true,
            whatActionWasReturned: new DaffResolveCartSuccess(stubCart),
            whatCardIdWasFound: stubCart.id,
          },
          {
            wasCardIdInStorage: true,
            didFirstDriverCallSucceed: false,
            didLastDriverCallSucceed: true,
            whatErrorWasThrown: { code: 'code', recoverable: false, message: 'Failed to load cart' },
            whatActionWasReturned: new DaffResolveCartSuccess(stubCart),
            whatCardIdWasFound: stubCart.id,
          },
          {
            wasCardIdInStorage: true,
            didFirstDriverCallSucceed: false,
            didLastDriverCallSucceed: false,
            whatErrorWasThrown: { code: 'code', recoverable: false, message: 'Failed to load cart' },
            whatActionWasReturned: new DaffResolveCartFailure([
              { code: 'code', recoverable: false, message: 'Failed to load cart' },
            ]),
            whatCardIdWasFound: stubCart.id,
          },
          {
            wasCardIdInStorage: false,
            didFirstDriverCallSucceed: true,
            didLastDriverCallSucceed: true,
            whatActionWasReturned: new DaffResolveCartSuccess(stubCart),
            whatCardIdWasFound: null,
          },
          {
            wasCardIdInStorage: false,
            didFirstDriverCallSucceed: false,
            didLastDriverCallSucceed: false,
            whatErrorWasThrown: { code: 'code', recoverable: false, message: 'Failed to load cart' },
            whatActionWasReturned: new DaffResolveCartFailure([
              { code: 'code', recoverable: false, message: 'Failed to load cart' },
            ]),
            whatCardIdWasFound: null,
          },
        ];

        testStates.forEach((el) => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            getCartIdSpy.and.returnValue(el.whatCardIdWasFound);
            if (el.didLastDriverCallSucceed) {
              driverGetSpy.and.returnValue(of({
                response: stubCart,
                errors: [],
              }));
            } else {
              driverGetSpy.and.returnValue(helpers.cold('#', {}, el.whatErrorWasThrown));
            }
            if (el.wasCardIdInStorage) {
              if (el.didFirstDriverCallSucceed) {
                driverMergeSpy.and.returnValue(of({
                  response: stubCart,
                  errors: [],
                }));
              } else {
                driverMergeSpy.and.returnValue(helpers.cold('#', {}, el.whatErrorWasThrown));
              }
            }

            actions$ = helpers.hot('--a', { a: authCompleteAction });
            helpers.expectObservable(effects.mergeAfterLogin$).toBe('--b', { b: el.whatActionWasReturned });

            // helpers.flush();
            // if (!el.wasCardIdInStorage && el.didFirstDriverCallSucceed) {
            //   expect(driverMergeSpy).not.toHaveBeenCalled();
            // }
          });
        });
      });
    });
  });
});
