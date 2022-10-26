import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import { Observable } from 'rxjs';

import {
  DaffAuthGuardCheckCompletion,
  DaffAuthGuardCheck,
} from '@daffodil/auth/state';
import {
  DaffAuthTestingModule,
  MockDaffAuthFacade,
} from '@daffodil/auth/state/testing';

import { DaffAuthMemberOnlyGuardRedirectUrl } from './member-only-guard-redirect.token';
import { MemberOnlyGuard } from './member-only.guard';

describe('@daffodil/auth/routing | MemberOnlyGuard', () => {
  let guard: MemberOnlyGuard;
  let actions$: Actions;

  let mockFacade: MockDaffAuthFacade;
  let router: Router;

  let redirectUrl: string;

  beforeEach(() => {
    redirectUrl = 'redirectUrl';

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        DaffAuthTestingModule,
      ],
      providers: [
        provideMockActions(() => actions$),
        {
          provide: DaffAuthMemberOnlyGuardRedirectUrl,
          useValue: redirectUrl,
        },
      ],
    });

    guard = TestBed.inject(MemberOnlyGuard);
    router = TestBed.inject(Router);
    mockFacade = TestBed.inject(MockDaffAuthFacade);

    spyOn(mockFacade, 'dispatch');
    spyOn(router, 'navigateByUrl');
  });

  describe('canActivate | checking if the route can be activated', () => {
    let expected;
    let result: Observable<boolean>;

    const mockAuthCheckAction = new DaffAuthGuardCheck();

    beforeEach(() => {
      result = guard.canActivate();
    });

    it('should initiate an auth check', () => {
      expect(mockFacade.dispatch).toHaveBeenCalledWith(mockAuthCheckAction);
    });

    describe('when the user is not authenticated', () => {
      const mockAuthGuardCheckCompletionAction = new DaffAuthGuardCheckCompletion(false);

      beforeEach(() => {
        actions$ = hot('--a', { a: mockAuthGuardCheckCompletionAction });
        expected = cold('--b', { b: false });
        result = guard.canActivate();
      });

      it('should return false', () => {
        expect(result).toBeObservable(expected);
      });

      it('should navigate to the redirect URL', () => {
        expect(result).toBeObservable(expected);
        expect(router.navigateByUrl).toHaveBeenCalledWith(redirectUrl);
      });
    });

    describe('when the user is authenticated', () => {
      const mockAuthGuardCheckCompletionAction = new DaffAuthGuardCheckCompletion(true);

      beforeEach(() => {
        actions$ = hot('--a', { a: mockAuthGuardCheckCompletionAction });
        expected = cold('--b', { b: true });
        result = guard.canActivate();
      });

      it('should return true', () => {
        expect(result).toBeObservable(expected);
      });
    });
  });
});
