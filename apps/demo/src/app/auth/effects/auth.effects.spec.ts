import { Location } from '@angular/common';
import { TestBed, async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import {
  DaffAuthLoginSuccess,
  DaffAuthToken,
} from '@daffodil/auth';
import {
  DaffAuthTokenFactory
} from '@daffodil/auth/testing';

import { DemoAuthEffects } from './auth.effects';

describe('DemoAuthEffects', () => {
  let actions$: Observable<any>;
  let effects: DemoAuthEffects;
  let router: Router;
  let location: Location;

  const authFactory: DaffAuthTokenFactory = new DaffAuthTokenFactory();

  const homepageUrl = '/';

  let mockAuthToken: DaffAuthToken;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        DemoAuthEffects,
        provideMockActions(() => actions$),
      ]
    });

    effects = TestBed.get(DemoAuthEffects);
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    mockAuthToken = authFactory.create();

    router.initialNavigation();
  }));

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('authSuccess$ | navigating to homepage after login success', () => {
    describe('when AuthLoginSuccessAction is triggered', () => {
      let navigateSpy;
      let expected;

      const mockAuthLoginSuccessAction = new DaffAuthLoginSuccess(mockAuthToken);

      beforeEach(() => {
        navigateSpy = spyOn(router, 'navigateByUrl');
        actions$ = hot('--a', { a: mockAuthLoginSuccessAction });
        expected = cold('---');
      });

      it('should navigate to the homepage', () => {
        expect(effects.authSuccess$).toBeObservable(expected);
        expect(navigateSpy).toHaveBeenCalledWith(homepageUrl);
      });
    });
  });
});
