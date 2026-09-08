import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  MockStore,
  provideMockStore,
} from '@ngrx/store/testing';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { DaffAuthStorageService } from '@daffodil/auth';
import {
  DaffAuthDriverTokenCheck,
  DaffAuthInvalidAPIResponseError,
  DaffAuthenticationFailedError,
  DaffUnauthorizedError,
} from '@daffodil/auth/driver';
import { DaffAuthGuardLogout } from '@daffodil/auth/state';

import { DaffAuthGuestOnlyGuardRedirectUrl } from './guest-only-guard-redirect.token';
import { GuestOnlyGuard } from './guest-only.guard';

describe('@daffodil/auth/routing | GuestOnlyGuard', () => {
  let daffAuthStorageService: jasmine.SpyObj<DaffAuthStorageService>;
  let daffAuthCheckService: jasmine.SpyObj<DaffAuthDriverTokenCheck>;
  let guard: GuestOnlyGuard;
  let mockStore: MockStore;
  let router: Router;

  let redirectUrl: string;

  beforeEach(() => {
    redirectUrl = 'redirectUrl';
    daffAuthStorageService = jasmine.createSpyObj('DaffAuthStorageService', ['removeAuthToken']);
    daffAuthCheckService = jasmine.createSpyObj('DaffAuthDriverTokenCheck', ['check']);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        provideMockStore(),
        {
          provide: DaffAuthGuestOnlyGuardRedirectUrl,
          useValue: redirectUrl,
        },
        {
          provide: DaffAuthStorageService,
          useValue: daffAuthStorageService,
        },
        {
          provide: DaffAuthDriverTokenCheck,
          useValue: daffAuthCheckService,
        },
      ],
    });

    guard = TestBed.inject(GuestOnlyGuard);
    router = TestBed.inject(Router);
    mockStore = TestBed.inject(MockStore);

    daffAuthCheckService.check.and.returnValue(of());

    spyOn(router, 'navigateByUrl');
    spyOn(mockStore, 'dispatch');
  });

  describe('canActivate | checking if the route can be activated', () => {
    describe('when the check succeeds', () => {
      it('should return false', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          daffAuthCheckService.check.and.returnValue(helpers.hot('--a', { a: undefined }));
          const result = guard.canActivate();
          helpers.expectObservable(result).toBe('--b', { b: false });
        });
      });
    });

    describe('when the check fails', () => {
      it('should return true', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          daffAuthCheckService.check.and.returnValue(helpers.hot('--#', {}, new DaffAuthInvalidAPIResponseError('error')));
          const result = guard.canActivate();
          helpers.expectObservable(result).toBe('--(b|)', { b: true });
        });
      });

      describe('from an unauthorized error', () => {
        it('should return true', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            daffAuthCheckService.check.and.returnValue(helpers.hot('--#', {}, new DaffUnauthorizedError('error')));
            const result = guard.canActivate();
            helpers.expectObservable(result).toBe('--(b|)', { b: true });
          });
        });

        it('should dispatch guard logout', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            daffAuthCheckService.check.and.returnValue(helpers.hot('--#', {}, new DaffUnauthorizedError('error')));
            const result = guard.canActivate();
            helpers.expectObservable(result).toBe('--(b|)', { b: true });
          });
          expect(mockStore.dispatch).toHaveBeenCalledWith(jasmine.any(DaffAuthGuardLogout));
        });
      });

      describe('from an unauthenticated error', () => {
        it('should return true', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            daffAuthCheckService.check.and.returnValue(helpers.hot('--#', {}, new DaffAuthenticationFailedError('error')));
            const result = guard.canActivate();
            helpers.expectObservable(result).toBe('--(b|)', { b: true });
          });
        });

        it('should dispatch guard logout', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            daffAuthCheckService.check.and.returnValue(helpers.hot('--#', {}, new DaffAuthenticationFailedError('error')));
            const result = guard.canActivate();
            helpers.expectObservable(result).toBe('--(b|)', { b: true });
          });
          expect(mockStore.dispatch).toHaveBeenCalledWith(jasmine.any(DaffAuthGuardLogout));
        });
      });
    });
  });
});
