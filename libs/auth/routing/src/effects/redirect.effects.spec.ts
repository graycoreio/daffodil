import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { provideDaffAuthRoutingConfig } from '@daffodil/auth/routing';
import {
  DaffAuthCheckFailure,
  DaffAuthGuardLogout,
  DaffAuthLoginSuccess,
  DaffAuthLogoutSuccess,
  DaffAuthRegisterSuccess,
  DaffResetPasswordSuccess,
} from '@daffodil/auth/state';

import { DaffAuthRedirectEffects } from './redirect.effects';

describe('@daffodil/auth/routing | DaffAuthRedirectEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffAuthRedirectEffects;

  let router: Router;

  let routerNavigateSpy: jasmine.Spy<Router['navigateByUrl']>;
  let authCompleteRedirectUrl: string;
  let logoutRedirectUrl: string;
  let expirationRedirectUrl: string;

  beforeEach(() => {
    authCompleteRedirectUrl = '/customer';
    logoutRedirectUrl = '/login';
    expirationRedirectUrl = '/';

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        DaffAuthRedirectEffects,
        provideMockActions(() => actions$),
        provideDaffAuthRoutingConfig({
          authCompleteRedirectPath: authCompleteRedirectUrl,
          logoutRedirectPath: logoutRedirectUrl,
          tokenExpirationRedirectPath: expirationRedirectUrl,
        }),
      ],
    });

    effects = TestBed.inject(DaffAuthRedirectEffects);
    router = TestBed.inject(Router);

    routerNavigateSpy = spyOn(router, 'navigateByUrl');
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when DaffAuthLoginSuccess is dispatched', () => {
    beforeEach(() => {
      actions$ = hot('--a', { a: new DaffAuthLoginSuccess(null) });
    });

    it('should navigate to the customer dashboard page', () => {
      const expected = cold('---');

      expect(effects.redirectAfterLoginOrRegister$).toBeObservable(expected);
      expect(routerNavigateSpy).toHaveBeenCalledWith(authCompleteRedirectUrl);
    });
  });

  describe('when DaffAuthRegisterSuccess is dispatched', () => {
    beforeEach(() => {
      actions$ = hot('--a', { a: new DaffAuthRegisterSuccess('token') });
    });

    it('should navigate to the customer dashboard page', () => {
      const expected = cold('---');

      expect(effects.redirectAfterLoginOrRegister$).toBeObservable(expected);
      expect(routerNavigateSpy).toHaveBeenCalledWith(authCompleteRedirectUrl);
    });
  });

  describe('when DaffResetPasswordSuccess is dispatched', () => {
    beforeEach(() => {
      actions$ = hot('--a', { a: new DaffResetPasswordSuccess('token') });
    });

    it('should navigate to the customer dashboard page', () => {
      const expected = cold('---');

      expect(effects.redirectAfterLoginOrRegister$).toBeObservable(expected);
      expect(routerNavigateSpy).toHaveBeenCalledWith(authCompleteRedirectUrl);
    });
  });

  describe('when DaffAuthLogoutSuccess is dispatched', () => {
    beforeEach(() => {
      actions$ = hot('--a', { a: new DaffAuthLogoutSuccess() });
    });

    it('should navigate to the login page', () => {
      const expected = cold('---');

      expect(effects.redirectAfterLogout$).toBeObservable(expected);
      expect(routerNavigateSpy).toHaveBeenCalledWith(logoutRedirectUrl);
    });
  });

  describe('when DaffAuthCheckFailure is dispatched', () => {
    beforeEach(() => {
      actions$ = hot('--a', { a: new DaffAuthCheckFailure(null) });
    });

    it('should navigate to the home page', () => {
      const expected = cold('---');

      expect(effects.redirectAfterExpiration$).toBeObservable(expected);
      expect(routerNavigateSpy).toHaveBeenCalledWith(expirationRedirectUrl);
    });
  });

  describe('when DaffAuthGuardLogout is dispatched', () => {
    beforeEach(() => {
      actions$ = hot('--a', { a: new DaffAuthGuardLogout(null) });
    });

    it('should navigate to the home page', () => {
      const expected = cold('---');

      expect(effects.redirectAfterExpiration$).toBeObservable(expected);
      expect(routerNavigateSpy).toHaveBeenCalledWith(expirationRedirectUrl);
    });
  });
});
