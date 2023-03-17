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
  DaffAuthComplete,
  DaffAuthLogoutSuccess,
  DaffAuthRevoke,
} from '@daffodil/auth/state';

import { DaffAuthRedirectEffects } from './redirect.effects';

describe('@daffodil/auth/routing | DaffAuthRedirectEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffAuthRedirectEffects;

  let router: Router;

  let routerNavigateSpy: jasmine.Spy<Router['navigateByUrl']>;
  let authCompleteRedirectUrl: string;
  let logoutRedirectUrl: string;

  beforeEach(() => {
    authCompleteRedirectUrl = '/customer';
    logoutRedirectUrl = '/login';

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

  describe('when DaffAuthComplete is dispatched', () => {
    beforeEach(() => {
      actions$ = hot('--a', { a: new DaffAuthComplete() });
    });

    it('should navigate to the customer dashboard page', () => {
      const expected = cold('---');

      expect(effects.redirectAfterLoginOrRegister$).toBeObservable(expected);
      expect(routerNavigateSpy).toHaveBeenCalledWith(authCompleteRedirectUrl);
    });
  });

  describe('when DaffAuthRevoke is dispatched', () => {
    beforeEach(() => {
      actions$ = hot('--a', { a: new DaffAuthRevoke() });
    });

    it('should navigate to the login page', () => {
      const expected = cold('---');

      expect(effects.redirectAfterLogout$).toBeObservable(expected);
      expect(routerNavigateSpy).toHaveBeenCalledWith(logoutRedirectUrl);
    });
  });
});
