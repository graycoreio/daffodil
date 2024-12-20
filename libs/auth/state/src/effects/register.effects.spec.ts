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
  DaffLoginInfo,
  DaffAuthToken,
  DaffAccountRegistration,
  DaffAuthStorageService,
} from '@daffodil/auth';
import {
  DaffAuthInvalidAPIResponseError,
  DaffRegisterDriver,
  DaffRegisterServiceInterface,
} from '@daffodil/auth/driver';
import {
  DaffAuthRegister,
  DaffAuthRegisterSuccess,
  DaffAuthRegisterFailure,
  DaffAuthServerSide,
  DaffAuthStorageFailure,
} from '@daffodil/auth/state';
import {
  DaffAccountRegistrationFactory,
  DaffAuthTokenFactory,
} from '@daffodil/auth/testing';
import {
  DaffServerSideStorageError,
  DaffStorageServiceError,
} from '@daffodil/core';
import { daffTransformErrorToStateError } from '@daffodil/core/state';

import { DaffAuthRegisterEffects } from './register.effects';

interface RegisterTestStates {
  isAutoLoginTrue: boolean;
  didRegisterSucceed: boolean;
  didTokenStorageSucceed?: boolean;
  whatErrorWasThrown?: DaffStorageServiceError;
  whatActionWasReturned?: Action;
  whatOtherActionWasReturned?: Action;
}

describe('@daffodil/auth/state | DaffAuthRegisterEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffAuthRegisterEffects;

  let daffRegisterDriver: jasmine.SpyObj<DaffRegisterServiceInterface>;
  let daffAuthStorageService: DaffAuthStorageService;

  let registrationFactory: DaffAccountRegistrationFactory;
  const authFactory: DaffAuthTokenFactory = new DaffAuthTokenFactory();

  let setAuthTokenSpy: jasmine.Spy;
  let mockAuth: DaffAuthToken;
  let mockLoginInfo: DaffLoginInfo;
  let token: string;
  let email: string;
  let password: string;
  let mockRegistration: DaffAccountRegistration;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffAuthRegisterEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffRegisterDriver,
          useValue: jasmine.createSpyObj('DaffRegisterService', ['register', 'registerOnly']),
        },
      ],
    });

    effects = TestBed.inject(DaffAuthRegisterEffects);

    daffRegisterDriver = TestBed.inject<jasmine.SpyObj<DaffRegisterServiceInterface>>(DaffRegisterDriver);
    daffAuthStorageService = TestBed.inject(DaffAuthStorageService);
    registrationFactory = TestBed.inject(DaffAccountRegistrationFactory);

    mockRegistration = registrationFactory.create();
    mockAuth = authFactory.create();

    setAuthTokenSpy = spyOn(daffAuthStorageService, 'setAuthToken');
    token = mockAuth.token;
    email = mockRegistration.email;
    password = mockRegistration.password;
    mockLoginInfo = { email, password };
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('register$ | when the user registers an account', () => {

    it('should compute the next action correctly', () => {
      const testStates: RegisterTestStates[] = [
        {
          isAutoLoginTrue: true,
          didRegisterSucceed: true,
          didTokenStorageSucceed: true,
          whatActionWasReturned: new DaffAuthRegisterSuccess(token),
        },
        {
          isAutoLoginTrue: true,
          didRegisterSucceed: true,
          didTokenStorageSucceed: false,
          whatErrorWasThrown: new DaffServerSideStorageError('Server side'),
          whatActionWasReturned: new DaffAuthRegisterFailure(daffTransformErrorToStateError(
            new DaffServerSideStorageError('Server side'),
          )),
          whatOtherActionWasReturned: new DaffAuthServerSide(daffTransformErrorToStateError(
            new DaffServerSideStorageError('Server side'),
          )),
        },
        {
          isAutoLoginTrue: true,
          didRegisterSucceed: true,
          didTokenStorageSucceed: false,
          whatErrorWasThrown: new DaffStorageServiceError('Storage error'),
          whatActionWasReturned: new DaffAuthRegisterFailure(daffTransformErrorToStateError(
            new DaffStorageServiceError('Storage error'),
          )),
          whatOtherActionWasReturned: new DaffAuthStorageFailure(daffTransformErrorToStateError(
            new DaffStorageServiceError('Storage error'),
          )),
        },
        {
          isAutoLoginTrue: true,
          didRegisterSucceed: false,
          whatErrorWasThrown: new DaffAuthInvalidAPIResponseError('Failed to register a new user'),
          whatActionWasReturned: new DaffAuthRegisterFailure(daffTransformErrorToStateError(
            new DaffAuthInvalidAPIResponseError('Failed to register a new user'),
          )),
        },
        {
          isAutoLoginTrue: false,
          didRegisterSucceed: true,
          whatActionWasReturned: new DaffAuthRegisterSuccess(),
        },
        {
          isAutoLoginTrue: false,
          didRegisterSucceed: false,
          whatErrorWasThrown: new DaffAuthInvalidAPIResponseError('Failed to register a new user'),
          whatActionWasReturned: new DaffAuthRegisterFailure(daffTransformErrorToStateError(
            new DaffAuthInvalidAPIResponseError('Failed to register a new user'),
          )),
        },
      ];

      testStates.forEach((el) => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });

        testScheduler.run(helpers => {
          const mockAuthRegisterAction = new DaffAuthRegister(mockRegistration, el.isAutoLoginTrue);
          actions$ = helpers.hot('--a', { a: mockAuthRegisterAction });

          if (el.didRegisterSucceed) {
            if (el.isAutoLoginTrue) {
              daffRegisterDriver.register.and.returnValue(of(token));
            } else {
              daffRegisterDriver.registerOnly.and.returnValue(of(undefined));
            }
            if (el.whatErrorWasThrown) {
              setAuthTokenSpy.and.throwError(el.whatErrorWasThrown);
            } else {
              setAuthTokenSpy.and.returnValue(undefined);
            }
          } else {
            if (el.isAutoLoginTrue) {
              daffRegisterDriver.register.and.returnValue(helpers.cold('#', {}, el.whatErrorWasThrown));
            } else {
              daffRegisterDriver.registerOnly.and.returnValue(helpers.cold('#', {}, el.whatErrorWasThrown));
            }
          }

          if (el.didRegisterSucceed && el.whatErrorWasThrown){
            helpers.expectObservable(effects.register$).toBe('--(ab)', { a: el.whatOtherActionWasReturned, b: el.whatActionWasReturned });
          } else {
            helpers.expectObservable(effects.register$).toBe('--b', { b: el.whatActionWasReturned });
          }

          helpers.flush();
          if (el.didTokenStorageSucceed) {
            expect(setAuthTokenSpy).toHaveBeenCalledWith(token);
          }
        });
      });
    });
  });
});
