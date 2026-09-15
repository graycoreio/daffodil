import { Location } from '@angular/common';
import {
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import {
  Router,
  provideRouter,
} from '@angular/router';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { DaffAuthToken } from '@daffodil/auth';
import { DaffAuthLoginSuccess } from '@daffodil/auth/state';
import { DaffAuthTokenFactory } from '@daffodil/auth/testing';

import { DemoAuthEffects } from './auth.effects';

describe('DemoAuthEffects', () => {
  let actions$: Observable<any>;
  let effects: DemoAuthEffects;
  let router: Router;
  let location: Location;

  const authFactory: DaffAuthTokenFactory = new DaffAuthTokenFactory();

  const homepageUrl = '/';

  let mockAuthToken: DaffAuthToken;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        DemoAuthEffects,
        provideMockActions(() => actions$),
        provideRouter([]),
      ],
    });

    effects = TestBed.inject(DemoAuthEffects);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    mockAuthToken = authFactory.create();

    router.initialNavigation();
  }));

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('authSuccess$ | navigating to homepage after login success', () => {
    describe('when AuthLoginSuccessAction is triggered', () => {
      let navigateSpy;

      const mockAuthLoginSuccessAction = new DaffAuthLoginSuccess(mockAuthToken);

      beforeEach(() => {
        navigateSpy = spyOn(router, 'navigateByUrl');
      });

      it('should navigate to the homepage', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: mockAuthLoginSuccessAction });
          helpers.expectObservable(effects.authSuccess$).toBe('---');
        });
        expect(navigateSpy).toHaveBeenCalledWith(homepageUrl);
      });
    });
  });
});
