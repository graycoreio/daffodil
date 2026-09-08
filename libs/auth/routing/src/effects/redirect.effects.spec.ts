import { TestBed } from '@angular/core/testing';
import {
  ActivatedRoute,
  ParamMap,
  Router,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { provideDaffAuthRoutingConfig } from '@daffodil/auth/routing';
import {
  DaffAuthLoginSuccess,
  DaffAuthRegisterSuccess,
  DaffResetPasswordSuccess,
} from '@daffodil/auth/state';

import { DaffAuthRedirectEffects } from './redirect.effects';

describe('@daffodil/auth/routing | DaffAuthRedirectEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffAuthRedirectEffects;

  let router: Router;

  let routerNavigateSpy: jasmine.Spy<Router['navigateByUrl']>;
  let qpSpy: jasmine.SpyObj<ParamMap>;
  let authCompleteRedirectUrl: string;
  let logoutRedirectUrl: string;
  let expirationRedirectUrl: string;
  let redirectUrl: string;

  beforeEach(() => {
    authCompleteRedirectUrl = '/customer';
    logoutRedirectUrl = '/login';
    expirationRedirectUrl = '/';
    redirectUrl = '/redirect';

    qpSpy = jasmine.createSpyObj('ParamMap', ['get']);

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
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: qpSpy,
            },
          },
        },
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
    it('should navigate to the customer dashboard page', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(helpers => {
        actions$ = helpers.hot('--a', { a: new DaffAuthLoginSuccess(null) });
        helpers.expectObservable(effects.redirectAfterLoginOrRegister$).toBe('---');
      });
      expect(routerNavigateSpy).toHaveBeenCalledWith(authCompleteRedirectUrl);
    });

    describe('and when the redirect QP is set', () => {
      beforeEach(() => {
        qpSpy.get.withArgs('redirect').and.returnValue(redirectUrl);
      });

      it('should navigate to the redirect URL', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: new DaffAuthLoginSuccess(null) });
          helpers.expectObservable(effects.redirectAfterLoginOrRegister$).toBe('---');
        });
        expect(routerNavigateSpy).toHaveBeenCalledWith(redirectUrl);
      });
    });
  });

  describe('when DaffAuthRegisterSuccess is dispatched', () => {
    it('should navigate to the customer dashboard page', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(helpers => {
        actions$ = helpers.hot('--a', { a: new DaffAuthRegisterSuccess('token') });
        helpers.expectObservable(effects.redirectAfterLoginOrRegister$).toBe('---');
      });
      expect(routerNavigateSpy).toHaveBeenCalledWith(authCompleteRedirectUrl);
    });

    describe('and when the redirect QP is set', () => {
      beforeEach(() => {
        qpSpy.get.withArgs('redirect').and.returnValue(redirectUrl);
      });

      it('should navigate to the redirect URL', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: new DaffAuthRegisterSuccess('token') });
          helpers.expectObservable(effects.redirectAfterLoginOrRegister$).toBe('---');
        });
        expect(routerNavigateSpy).toHaveBeenCalledWith(redirectUrl);
      });
    });
  });

  describe('when DaffResetPasswordSuccess is dispatched', () => {
    it('should navigate to the customer dashboard page', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(helpers => {
        actions$ = helpers.hot('--a', { a: new DaffResetPasswordSuccess('token') });
        helpers.expectObservable(effects.redirectAfterLoginOrRegister$).toBe('---');
      });
      expect(routerNavigateSpy).toHaveBeenCalledWith(authCompleteRedirectUrl);
    });

    describe('and when the redirect QP is set', () => {
      beforeEach(() => {
        qpSpy.get.withArgs('redirect').and.returnValue(redirectUrl);
      });

      it('should navigate to the redirect URL', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: new DaffResetPasswordSuccess('token') });
          helpers.expectObservable(effects.redirectAfterLoginOrRegister$).toBe('---');
        });
        expect(routerNavigateSpy).toHaveBeenCalledWith(redirectUrl);
      });
    });
  });
});
