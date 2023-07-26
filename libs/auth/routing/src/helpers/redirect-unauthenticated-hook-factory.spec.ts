import { TestBed } from '@angular/core/testing';
import {
  ActivatedRoute,
  ParamMap,
  Router,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';

import { DAFF_AUTH_ROUTING_CONFIG_DEFAULT } from '@daffodil/auth/routing';
import {
  DaffAuthActionTypes,
  DaffAuthLoginActionTypes,
  DaffAuthUnauthenticatedHook,
} from '@daffodil/auth/state';

import { daffAuthRoutingRedirectUnauthenticatedHookFactory } from './redirect-unauthenticated-hook-factory';


describe('@daffodil/auth/routing | daffAuthRoutingRedirectUnauthenticatedHookFactory', () => {
  let router: Router;
  let route: ActivatedRoute;

  let hook: DaffAuthUnauthenticatedHook;
  let result: Observable<unknown>;

  let routerNavigateSpy: jasmine.Spy<Router['navigateByUrl']>;
  let qpSpy: jasmine.SpyObj<ParamMap>;
  let logoutRedirectUrl: string;
  let expirationRedirectUrl: string;
  let redirectUrl: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
    });

    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);

    logoutRedirectUrl = '/login';
    expirationRedirectUrl = '/';
    redirectUrl = '/redirect';

    qpSpy = jasmine.createSpyObj('ParamMap', ['get']);
    routerNavigateSpy = spyOn(router, 'navigateByUrl');
    routerNavigateSpy.and.returnValue(new Promise((resolve) => resolve(true)));

    hook = daffAuthRoutingRedirectUnauthenticatedHookFactory(
      router,
      <any>{
        ...route,
        snapshot: {
          ...route.snapshot,
          queryParamMap: qpSpy,
        },
      },
      {
        ...DAFF_AUTH_ROUTING_CONFIG_DEFAULT,
        logoutRedirectPath: logoutRedirectUrl,
        tokenExpirationRedirectPath: expirationRedirectUrl,
      },
    );
  });

  describe('when the hook is triggered with DaffAuthLogoutSuccess', () => {
    beforeEach(() => {
      result = hook(DaffAuthLoginActionTypes.LogoutSuccessAction);
    });

    it('should navigate to the login page', (done) => {
      result.subscribe(() => {
        expect(routerNavigateSpy).toHaveBeenCalledWith(logoutRedirectUrl);
        done();
      });
    });

    describe('and when the redirect QP is set', () => {
      beforeEach(() => {
        qpSpy.get.withArgs('redirect').and.returnValue(redirectUrl);
        result = hook(DaffAuthLoginActionTypes.LogoutSuccessAction);
      });

      it('should navigate to the redirect URL', (done) => {
        result.subscribe(() => {
          expect(routerNavigateSpy).toHaveBeenCalledWith(redirectUrl);
          done();
        });
      });
    });
  });

  describe('when the hook is triggered with DaffAuthCheckFailure', () => {
    beforeEach(() => {
      result = hook(DaffAuthActionTypes.AuthCheckFailureAction);
    });

    it('should navigate to the home page', (done) => {
      result.subscribe(() => {
        expect(routerNavigateSpy).toHaveBeenCalledWith(expirationRedirectUrl);
        done();
      });
    });

    describe('and when the redirect QP is set', () => {
      beforeEach(() => {
        qpSpy.get.withArgs('redirect').and.returnValue(redirectUrl);
        result = hook(DaffAuthActionTypes.AuthCheckFailureAction);
      });

      it('should navigate to the redirect URL', (done) => {
        result.subscribe(() => {
          expect(routerNavigateSpy).toHaveBeenCalledWith(redirectUrl);
          done();
        });
      });
    });
  });

  describe('when the hook is triggered with DaffAuthGuardLogout', () => {
    beforeEach(() => {
      result = hook(DaffAuthActionTypes.AuthGuardLogoutAction);
    });

    it('should navigate to the home page', (done) => {
      result.subscribe(() => {
        expect(routerNavigateSpy).toHaveBeenCalledWith(expirationRedirectUrl);
        done();
      });
    });

    describe('and when the redirect QP is set', () => {
      beforeEach(() => {
        qpSpy.get.withArgs('redirect').and.returnValue(redirectUrl);
        result = hook(DaffAuthActionTypes.AuthGuardLogoutAction);
      });

      it('should navigate to the redirect URL', (done) => {
        result.subscribe(() => {
          expect(routerNavigateSpy).toHaveBeenCalledWith(redirectUrl);
          done();
        });
      });
    });
  });
});
