import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable ,
  of,
} from 'rxjs';

import { DaffAuthStorageService } from '@daffodil/auth';
import {
  DaffAuthDriver,
  DaffAuthServiceInterface,
  DaffAuthenticationFailedError,
} from '@daffodil/auth/driver';
import {
  DaffAuthGuardCheck,
  DaffAuthGuardCheckCompletion,
  DaffAuthCheck,
  DaffAuthCheckSuccess,
  DaffAuthCheckFailure,
  DAFF_AUTH_STATE_CONFIG,
  DaffAuthStateConfig,
  DaffAuthServerSide,
  DaffAuthStorageFailure,
} from '@daffodil/auth/state';
import {
  DaffServerSideStorageError,
  DaffStorageServiceError,
} from '@daffodil/core';
import { daffTransformErrorToStateError } from '@daffodil/core/state';

import { DaffAuthEffects } from './auth.effects';

describe('@daffodil/auth/state | DaffAuthEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffAuthEffects;

  let daffAuthStorageService: DaffAuthStorageService;
  let daffAuthDriver: jasmine.SpyObj<DaffAuthServiceInterface>;
  let getTokenSpy: jasmine.Spy<DaffAuthStorageService['getAuthToken']>;
  let removeTokenSpy: jasmine.Spy<DaffAuthStorageService['removeAuthToken']>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffAuthEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffAuthDriver,
          useValue: jasmine.createSpyObj('DaffAuthService', ['check']),
        },
        {
          provide: DAFF_AUTH_STATE_CONFIG,
          useValue: <DaffAuthStateConfig>{
            checkInterval: 100,
          },
        },
      ],
    });

    effects = TestBed.inject(DaffAuthEffects);

    daffAuthDriver = TestBed.inject<jasmine.SpyObj<DaffAuthServiceInterface>>(DaffAuthDriver);
    daffAuthStorageService = TestBed.inject(DaffAuthStorageService);

    removeTokenSpy = spyOn(daffAuthStorageService, 'removeAuthToken');
    getTokenSpy = spyOn(daffAuthStorageService, 'getAuthToken');
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('authCheckInterval$', () => {
    let expected;

    describe('when there is a token in storage', () => {

      beforeEach(() => {
        const mockAuthCheckAction = new DaffAuthCheck();
        getTokenSpy.and.returnValue('token');

        expected = cold('b', { b: mockAuthCheckAction });
      });

      it('should dispatch DaffAuthCheck every 100 ms', () => {
        // TODO: fixgure out how to pass scheduler
        expect(effects.authCheckInterval$).toBeObservable(expected);
      });
    });
  });

  describe('guardCheck$ | indicating the completion and result of an auth token check operation', () => {
    let expected;
    const mockAuthCheckAction = new DaffAuthGuardCheck();

    beforeEach(() => {
      actions$ = hot('--a', { a: mockAuthCheckAction });
    });

    describe('and the check is successful', () => {
      beforeEach(() => {
        const mockAuthCheckCompletionAction = new DaffAuthGuardCheckCompletion(true);
        daffAuthDriver.check.and.returnValue(of(undefined));

        expected = cold('--b', { b: mockAuthCheckCompletionAction });
      });

      it('should notify state that the check succeeded', () => {
        expect(effects.guardCheck$).toBeObservable(expected);
      });
    });

    describe('and the check fails', () => {
      beforeEach(() => {
        const error = 'Auth token is not valid';
        const response = cold('#', {}, error);
        daffAuthDriver.check.and.returnValue(response);
        const mockAuthCheckCompletionAction = new DaffAuthGuardCheckCompletion(false);
        expected = cold('--b', { b: mockAuthCheckCompletionAction });
      });

      it('should notify state that the check failed', () => {
        expect(effects.guardCheck$).toBeObservable(expected);
      });
    });
  });

  describe('check$ | when the user checks if their auth token is valid', () => {
    let expected;

    const mockAuthCheckAction = new DaffAuthCheck();

    beforeEach(() => {
      actions$ = hot('--a', { a: mockAuthCheckAction });
    });

    describe('and the check is successful', () => {
      beforeEach(() => {
        daffAuthDriver.check.and.returnValue(of(undefined));
        const mockAuthCheckSuccessAction = new DaffAuthCheckSuccess();

        expected = cold('--b', { b: mockAuthCheckSuccessAction });
      });

      it('should notify state that the check succeeded', () => {
        expect(effects.check$).toBeObservable(expected);
      });
    });

    describe('and the check fails', () => {
      let error: DaffAuthenticationFailedError;

      beforeEach(() => {
        error = new DaffAuthenticationFailedError('Auth token is not valid');
        const response = cold('#', {}, error);
        daffAuthDriver.check.and.returnValue(response);
        const mockAuthCheckFailureAction = new DaffAuthCheckFailure(daffTransformErrorToStateError(error));

        expected = cold('--b', { b: mockAuthCheckFailureAction });
      });

      it('should notify state that the check failed', () => {
        expect(effects.check$).toBeObservable(expected);
      });
    });
  });
});
