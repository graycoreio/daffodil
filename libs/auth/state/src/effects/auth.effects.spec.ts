import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { DaffAuthStorageService } from '@daffodil/auth';
import {
  DaffAuthDriver,
  DaffAuthInvalidAPIResponseError,
  DaffAuthServiceInterface,
  DaffAuthenticationFailedError,
  DaffUnauthorizedError,
} from '@daffodil/auth/driver';
import {
  DaffAuthCheck,
  DaffAuthCheckSuccess,
  DaffAuthCheckFailure,
  DAFF_AUTH_STATE_CONFIG,
  DaffAuthStateConfig,
  DaffAuthStorageFailure,
  DaffAuthGuardLogout,
  DaffAuthLogoutSuccess,
  DaffAuthResetToUnauthenticated,
} from '@daffodil/auth/state';
import { DaffStorageServiceError } from '@daffodil/core';
import { daffTransformErrorToStateError } from '@daffodil/core/state';
import {
  DAFF_DRIVER_HTTP_CLIENT_CACHE_SERVICE,
  DaffDriverHttpClientCacheServiceInterface,
} from '@daffodil/driver';

import { DaffAuthEffects } from './auth.effects';
import { DAFF_AUTH_UNAUTHENTICATED_HOOK } from '../injection-tokens/unauthenticated/hook.token';

describe('@daffodil/auth/state | DaffAuthEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffAuthEffects;

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
    describe('when there is a token in storage', () => {
      it('should dispatch DaffAuthCheck every 100 ms', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const mockAuthCheckAction = new DaffAuthCheck();
          getTokenSpy.and.returnValue('token');

          // TODO: fixgure out how to pass scheduler
          helpers.expectObservable(effects.authCheckInterval$).toBe('b', { b: mockAuthCheckAction });
        });
      });
    });
  });

  describe('check$ | when the user checks if their auth token is valid', () => {
    describe('and the check is successful', () => {
      it('should notify state that the check succeeded', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const mockAuthCheckAction = new DaffAuthCheck();
          actions$ = helpers.hot('--a', { a: mockAuthCheckAction });
          getTokenSpy.and.returnValue('token');

          daffAuthDriver.check.and.returnValue(of(undefined));
          const mockAuthCheckSuccessAction = new DaffAuthCheckSuccess();

          helpers.expectObservable(effects.check$).toBe('--b', { b: mockAuthCheckSuccessAction });
        });
      });
    });

    describe('and the check fails', () => {
      it('should notify state that the check failed', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const mockAuthCheckAction = new DaffAuthCheck();
          actions$ = helpers.hot('--a', { a: mockAuthCheckAction });
          getTokenSpy.and.returnValue('token');

          const error = new DaffAuthenticationFailedError('Auth token is not valid');
          const response = helpers.cold<any>('#', {}, error);
          daffAuthDriver.check.and.returnValue(response);
          const mockAuthCheckFailureAction = jasmine.any(DaffAuthCheckFailure);

          helpers.expectObservable(effects.check$).toBe('--b', { b: mockAuthCheckFailureAction });
        });
      });
    });
  });

  describe('resetToUnauthenticated$', () => {
    describe('when DaffAuthCheckFailure is dispatched for an unauthorized error', () => {
      it('should dispatch DaffAuthResetToUnauthenticated', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const revokeAction = new DaffAuthCheckFailure(new DaffUnauthorizedError('error'));
          actions$ = helpers.hot('--a', { a: revokeAction });
          helpers.expectObservable(effects.resetToUnauthenticated$).toBe('--a', { a: new DaffAuthResetToUnauthenticated(revokeAction.type) });
        });
      });
    });

    describe('when DaffAuthCheckFailure is dispatched for an authentication failed error', () => {
      it('should dispatch DaffAuthResetToUnauthenticated', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const revokeAction = new DaffAuthCheckFailure(new DaffAuthenticationFailedError('error'));
          actions$ = helpers.hot('--a', { a: revokeAction });
          helpers.expectObservable(effects.resetToUnauthenticated$).toBe('--a', { a: new DaffAuthResetToUnauthenticated(revokeAction.type) });
        });
      });
    });

    describe('when DaffAuthCheckFailure is dispatched for some random reason', () => {
      it('should not dispatch DaffAuthResetToUnauthenticated', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const revokeAction = new DaffAuthCheckFailure(new DaffAuthInvalidAPIResponseError(''));
          actions$ = helpers.hot('---');
          helpers.expectObservable(effects.resetToUnauthenticated$).toBe('---');
        });
      });
    });

    describe('when AuthGuardLogout is dispatched', () => {
      it('should dispatch DaffAuthResetToUnauthenticated', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const authLogoutSuccessAction = new DaffAuthGuardLogout({ code: 'code', message: 'message' });
          actions$ = helpers.hot('--a', { a: authLogoutSuccessAction });
          helpers.expectObservable(effects.resetToUnauthenticated$).toBe('--a', { a: new DaffAuthResetToUnauthenticated(authLogoutSuccessAction.type) });
        });
      });
    });

    describe('when LogoutSuccess is dispatched', () => {
      it('should dispatch DaffAuthResetToUnauthenticated', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const authLogoutSuccessAction = new DaffAuthLogoutSuccess();
          actions$ = helpers.hot('--a', { a: authLogoutSuccessAction });
          helpers.expectObservable(effects.resetToUnauthenticated$).toBe('--a', { a: new DaffAuthResetToUnauthenticated(authLogoutSuccessAction.type) });
        });
      });
    });
  });

  describe('clearClientCache$', () => {
    describe('when DaffAuthResetToUnauthenticated is dispatched', () => {
      it('should reset the client cache after a delay', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const revokeAction = new DaffAuthResetToUnauthenticated('trigger');
          actions$ = helpers.hot('--a', { a: revokeAction });
          helpers.expectObservable(effects.clearClientCache$).toBe('---');
        });
        expect(unauthenticatedHook).toHaveBeenCalledWith('trigger');
        expect(clientCacheSpy.reset).toHaveBeenCalledWith();
      });
    });
  });
});
