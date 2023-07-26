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
import { TestScheduler } from 'rxjs/testing';

import { DaffAuthStorageService } from '@daffodil/auth';
import {
  DaffAuthDriver,
  DaffAuthServiceInterface,
  DaffAuthenticationFailedError,
} from '@daffodil/auth/driver';
import {
  DaffAuthCheck,
  DaffAuthCheckSuccess,
  DaffAuthCheckFailure,
  DAFF_AUTH_STATE_CONFIG,
  DaffAuthStateConfig,
  DaffAuthServerSide,
  DaffAuthStorageFailure,
  DaffAuthGuardLogout,
  DaffAuthLogoutSuccess,
  DaffAuthResetToUnauthenticated,
} from '@daffodil/auth/state';
import {
  DaffServerSideStorageError,
  DaffStorageServiceError,
} from '@daffodil/core';
import { daffTransformErrorToStateError } from '@daffodil/core/state';
import {
  DAFF_DRIVER_HTTP_CLIENT_CACHE_SERVICE,
  DaffDriverHttpClientCacheServiceInterface,
} from '@daffodil/driver';

import { DAFF_AUTH_UNAUTHENTICATED_HOOK } from '../injection-tokens/unauthenticated/hook.token';
import { DaffAuthEffects } from './auth.effects';

const getScheduler = () => new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

describe('@daffodil/auth/state | DaffAuthEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffAuthEffects;

  let scheduler: TestScheduler;
  let daffAuthStorageService: DaffAuthStorageService;
  let daffAuthDriver: jasmine.SpyObj<DaffAuthServiceInterface>;
  let clientCacheSpy: jasmine.SpyObj<DaffDriverHttpClientCacheServiceInterface>;
  let getTokenSpy: jasmine.Spy<DaffAuthStorageService['getAuthToken']>;
  let removeTokenSpy: jasmine.Spy<DaffAuthStorageService['removeAuthToken']>;
  let unauthenticatedHook: jasmine.Spy;

  const authStorageFailureAction = new DaffAuthStorageFailure(daffTransformErrorToStateError(
    new DaffStorageServiceError('Storage of auth token has failed.')),
  );
  const throwStorageError = () => {
    throw new DaffStorageServiceError('Storage of auth token has failed.');
  };

  beforeEach(() => {
    clientCacheSpy = jasmine.createSpyObj('DaffDriverHttpClientCacheServiceInterface', ['reset']);
    unauthenticatedHook = jasmine.createSpy();

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
        {
          provide: DAFF_DRIVER_HTTP_CLIENT_CACHE_SERVICE,
          useValue: clientCacheSpy,
        },
        {
          provide: DAFF_AUTH_UNAUTHENTICATED_HOOK,
          useValue: unauthenticatedHook,
        },
      ],
    });

    effects = TestBed.inject(DaffAuthEffects);

    daffAuthDriver = TestBed.inject<jasmine.SpyObj<DaffAuthServiceInterface>>(DaffAuthDriver);
    daffAuthStorageService = TestBed.inject(DaffAuthStorageService);

    unauthenticatedHook.and.returnValue(of(null));
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

  describe('check$ | when the user checks if their auth token is valid', () => {
    let expected;

    const mockAuthCheckAction = new DaffAuthCheck();

    beforeEach(() => {
      actions$ = hot('--a', { a: mockAuthCheckAction });
      getTokenSpy.and.returnValue('token');
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
        const mockAuthCheckFailureAction = jasmine.any(DaffAuthCheckFailure);

        expected = cold('--b', { b: mockAuthCheckFailureAction });
      });

      it('should notify state that the check failed', () => {
        expect(effects.check$).toBeObservable(expected);
      });
    });
  });

  describe('removeAuthToken$', () => {
    let expected;

    describe('when AuthCheckFailure is dispatched', () => {
      let authLogoutSuccessAction: DaffAuthCheckFailure;

      beforeEach(() => {
        authLogoutSuccessAction = new DaffAuthCheckFailure({ code: 'code', message: 'message' });
        actions$ = hot('--a', { a: authLogoutSuccessAction });
        expected = cold('---');
      });

      it('should remove the auth token from storage', () => {
        expect(effects.removeAuthToken$).toBeObservable(expected);
        expect(removeTokenSpy).toHaveBeenCalledWith();
      });

      describe('and the storage service throws an error', () => {
        beforeEach(() => {
          removeTokenSpy.and.callFake(throwStorageError);

          expected = cold('--(b|)', { b: authStorageFailureAction });
        });

        it('should return a DaffAuthStorageFailure', () => {
          expect(effects.removeAuthToken$).toBeObservable(expected);
        });
      });

      describe('and the storage service throws a server side error', () => {
        beforeEach(() => {
          const error = new DaffServerSideStorageError('Server side');
          const serverSideAction = new DaffAuthServerSide(daffTransformErrorToStateError(error));
          removeTokenSpy.and.throwError(error);
          expected = cold('--(a|)', { a: serverSideAction });
        });

        it('should dispatch a server side action', () => {
          expect(effects.removeAuthToken$).toBeObservable(expected);
        });
      });
    });
  });

  describe('resetToUnauthenticated$', () => {
    let expected;

    describe('when AuthCheckFailure is dispatched', () => {
      let authLogoutSuccessAction: DaffAuthCheckFailure;

      beforeEach(() => {
        authLogoutSuccessAction = new DaffAuthCheckFailure({ code: 'code', message: 'message' });
        actions$ = hot('--a', { a: authLogoutSuccessAction });
        expected = cold('--a', { a: new DaffAuthResetToUnauthenticated(authLogoutSuccessAction.type) });
      });

      it('should dispatch DaffAuthResetToUnauthenticated', () => {
        expect(effects.resetToUnauthenticated$).toBeObservable(expected);
      });
    });

    describe('when AuthGuardLogout is dispatched', () => {
      let authLogoutSuccessAction: DaffAuthGuardLogout;

      beforeEach(() => {
        authLogoutSuccessAction = new DaffAuthGuardLogout({ code: 'code', message: 'message' });
        actions$ = hot('--a', { a: authLogoutSuccessAction });
        expected = cold('--a', { a: new DaffAuthResetToUnauthenticated(authLogoutSuccessAction.type) });
      });

      it('should dispatch DaffAuthResetToUnauthenticated', () => {
        expect(effects.resetToUnauthenticated$).toBeObservable(expected);
      });
    });

    describe('when LogoutSuccess is dispatched', () => {
      let authLogoutSuccessAction: DaffAuthLogoutSuccess;

      beforeEach(() => {
        authLogoutSuccessAction = new DaffAuthLogoutSuccess();
        actions$ = hot('--a', { a: authLogoutSuccessAction });
        expected = cold('--a', { a: new DaffAuthResetToUnauthenticated(authLogoutSuccessAction.type) });
      });

      it('should dispatch DaffAuthResetToUnauthenticated', () => {
        expect(effects.resetToUnauthenticated$).toBeObservable(expected);
      });
    });
  });

  describe('clearClientCache$', () => {
    let expected;

    describe('when DaffAuthResetToUnauthenticated is dispatched', () => {
      let revokeAction: DaffAuthResetToUnauthenticated;

      beforeEach(() => {
        revokeAction = new DaffAuthResetToUnauthenticated('trigger');
        actions$ = hot('--a', { a: revokeAction });
        expected = cold('---');
      });

      it('should reset the client cache after a delay', () => {
        expect(effects.clearClientCache$).toBeObservable(expected);
        expect(unauthenticatedHook).toHaveBeenCalledWith('trigger');
        expect(clientCacheSpy.reset).toHaveBeenCalledWith();
      });
    });
  });
});
