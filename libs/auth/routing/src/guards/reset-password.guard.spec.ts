import { Component } from '@angular/core';
import {
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import {
  ActivatedRoute,
  Router,
  UrlTree,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import {
  DAFF_AUTH_ROUTING_CONFIG,
  provideDaffAuthRoutingConfig,
} from '@daffodil/auth/routing';
import { DaffResetPasswordLanding } from '@daffodil/auth/state';
import {
  DaffAuthStateTestingModule,
  MockDaffAuthFacade,
} from '@daffodil/auth/state/testing';

import { DaffAuthResetPasswordGuard } from './reset-password.guard';

@Component({
  template: '',
  standalone: false,
})
class TestComponent {}

describe('@daffodil/auth/routing | DaffAuthResetPasswordGuard', () => {
  let guard: DaffAuthResetPasswordGuard;

  let mockFacade: MockDaffAuthFacade;
  let router: Router;

  let param: string;
  let token: string;
  let redirectUrl: string;

  beforeEach(() => {
    param = 'token';
    token = '290384runfei9usnrg0ew9rgm';
    redirectUrl = 'redirectUrl';

    TestBed.configureTestingModule({
      imports: [
        DaffAuthStateTestingModule,
        RouterTestingModule.withRoutes([
          {
            path: 'reset',
            component: TestComponent,
          },
          {
            path: '**',
            component: TestComponent,
          },
        ]),
      ],
      providers: [
        {
          provide: DAFF_AUTH_ROUTING_CONFIG,
          useValue: {
            resetPasswordTokenParam: param,
          },
        },
        provideDaffAuthRoutingConfig({ resetPasswordRedirectPath: redirectUrl }),
      ],
    });

    guard = TestBed.inject(DaffAuthResetPasswordGuard);
    mockFacade = TestBed.inject(MockDaffAuthFacade);
    router = TestBed.inject(Router);

    spyOn(mockFacade, 'dispatch');
  });

  describe('canActivate | checking if the route can be activated', () => {
    let result: boolean | UrlTree;

    describe('when there is a token set to the param', () => {
      beforeEach(fakeAsync(() => {
        router.navigateByUrl(`/reset?${param}=${token}`);
        tick();
        result = guard.canActivate(TestBed.inject(ActivatedRoute).snapshot);
      }));

      it('should allow activation', () => {
        expect(result).toBeTrue();
      });

      it('should dispatch DaffResetPasswordLanding with the token', () => {
        expect(mockFacade.dispatch).toHaveBeenCalledWith(new DaffResetPasswordLanding(token));
      });
    });

    describe('when there is a token not set to the param', () => {
      beforeEach(fakeAsync(() => {
        router.navigateByUrl(`/reset?not${param}=${token}`);
        tick();
        result = guard.canActivate(TestBed.inject(ActivatedRoute).snapshot);
      }));

      it('should return the parsed redirect URL', () => {
        expect(result.toString()).toEqual(`/${redirectUrl}`);
      });

      it('should not dispatch DaffResetPasswordLanding with the token', () => {
        expect(mockFacade.dispatch).not.toHaveBeenCalledWith(new DaffResetPasswordLanding(token));
      });
    });
  });
});
