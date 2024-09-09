/* eslint-disable no-restricted-globals */
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { DaffPaypalExpressTokenResponse } from '@daffodil/paypal';
import { DaffGeneratePaypalExpressTokenSuccess } from '@daffodil/paypal/state';
import { DaffPaypalExpressTokenResponseFactory } from '@daffodil/paypal/testing';

import { DaffPaypalExpressRedirectEffects } from './express-redirect.effects';

describe('@daffodil/paypal/routing | DaffPaypalExpressRedirectEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffPaypalExpressRedirectEffects;

  let paypalTokenResponseFactory: DaffPaypalExpressTokenResponseFactory;
  let paypalTokenResponse: DaffPaypalExpressTokenResponse;
  let browserUrl: string;

  beforeAll(() => {
    // save the browser URL so we can revert to it after the test
    browserUrl = window.location.href;
  });

  afterAll(() => {
    window.history.pushState('', '', browserUrl);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffPaypalExpressRedirectEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffPaypalExpressRedirectEffects);
    paypalTokenResponseFactory = TestBed.inject(DaffPaypalExpressTokenResponseFactory);

    paypalTokenResponse = paypalTokenResponseFactory.create();
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when DaffGeneratePaypalExpressTokenSuccess is triggered', () => {
    let expected;
    let paypalLoadAction: DaffGeneratePaypalExpressTokenSuccess;

    beforeEach(() => {
      window.location = <Location>{};
      paypalLoadAction = new DaffGeneratePaypalExpressTokenSuccess(paypalTokenResponse);
      actions$ = hot('--a', { a: paypalLoadAction });
      expected = cold('---');
    });

    // can't mock window.location
    xit('should navigate to the start URL', () => {
      expect(effects.redirectUserToStartUrl$).toBeObservable(expected);
    });
  });
});
