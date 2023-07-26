import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  MockStore,
  provideMockStore,
} from '@ngrx/store/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable,
  of,
} from 'rxjs';

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
    let expected;
    let result: Observable<boolean>;

    beforeEach(() => {
      result = guard.canActivate();
    });

    describe('when the check succeeds', () => {
      beforeEach(() => {
        daffAuthCheckService.check.and.returnValue(hot('--a', { a: undefined }));
        result = guard.canActivate();
        expected = cold('--b', { b: false });
      });

      it('should return false', () => {
        expect(result).toBeObservable(expected);
      });
    });

    describe('when the check fails', () => {
      beforeEach(() => {
        daffAuthCheckService.check.and.returnValue(hot('--#', {}, new DaffAuthInvalidAPIResponseError('error')));
        result = guard.canActivate();
        expected = cold('--(b|)', { b: true });
      });

      it('should return true', () => {
        expect(result).toBeObservable(expected);
      });

      describe('from an unauthorized error', () => {
        beforeEach(() => {
          daffAuthCheckService.check.and.returnValue(hot('--#', {}, new DaffUnauthorizedError('error')));
          result = guard.canActivate();
          expected = cold('--(b|)', { b: true });
        });

        it('should return true', () => {
          expect(result).toBeObservable(expected);
        });

        it('should remove the token from storage', () => {
          expect(result).toBeObservable(expected);
          expect(daffAuthStorageService.removeAuthToken).toHaveBeenCalledWith();
        });

        it('should dispatch guard logout', () => {
          expect(result).toBeObservable(expected);
          expect(mockStore.dispatch).toHaveBeenCalledWith(jasmine.any(DaffAuthGuardLogout));
        });
      });

      describe('from an unauthenticated error', () => {
        beforeEach(() => {
          daffAuthCheckService.check.and.returnValue(hot('--#', {}, new DaffAuthenticationFailedError('error')));
          result = guard.canActivate();
          expected = cold('--(b|)', { b: true });
        });

        it('should return true', () => {
          expect(result).toBeObservable(expected);
        });

        it('should remove the token from storage', () => {
          expect(result).toBeObservable(expected);
          expect(daffAuthStorageService.removeAuthToken).toHaveBeenCalledWith();
        });

        it('should dispatch guard logout', () => {
          expect(result).toBeObservable(expected);
          expect(mockStore.dispatch).toHaveBeenCalledWith(jasmine.any(DaffAuthGuardLogout));
        });
      });
    });
  });
});
