import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffNewsletterSubmission } from '@daffodil/newsletter';
import {
  DaffNewsletterServiceInterface,
  DaffNewsletterDriver,
} from '@daffodil/newsletter/driver';
import { DaffTestingNewsletterService } from '@daffodil/newsletter/driver/testing';
import {
  DaffNewsletterSubscribe,
  DaffNewsletterSuccessSubscribe,
  DaffNewsletterFailedSubscribe,
  DaffNewsletterRetry,
  DaffNewsletterCancel,
} from '@daffodil/newsletter/state';

import { DaffNewsletterEffects } from './newsletter.effects';


describe('NewsletterEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffNewsletterEffects<DaffNewsletterSubmission, any>;
  const mockNewsletter = { email: 'test@test.com' };
  let daffNewsletterDriver: DaffNewsletterServiceInterface<
    DaffNewsletterSubmission,
    any
  >;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DaffNewsletterDriver,
          useValue: new DaffTestingNewsletterService(),
        },
        DaffNewsletterEffects,
        provideMockActions(() => actions$),
      ],
    });
    effects = TestBed.inject(DaffNewsletterEffects);
    daffNewsletterDriver = TestBed.inject(DaffNewsletterDriver);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when NewsletterSubscribe is triggered', () => {
    let expected;
    const newsletterSubscribe = new DaffNewsletterSubscribe(mockNewsletter);

    describe('and the call to NewsletterService is successful', () => {
      it('it should dispatch a NewsletterSuccessSubscribe', () => {
        const successAction = new DaffNewsletterSuccessSubscribe();
        spyOn(daffNewsletterDriver, 'send').and.returnValue(of('mystring'));

        actions$ = hot('--a', { a: newsletterSubscribe });
        expected = cold('--b', { b: successAction });
        expect(effects.trySubmission$).toBeObservable(expected);
      });
    });

    describe('and the call to NewsletterService fails', () => {
      it('it should dispatch a NewsletterFailedSubscribe', () => {
        const error = { code: 'code', recoverable: false, message: 'Failed to subscribe to newsletter' };
        const response = cold('#', {}, error);
        spyOn(daffNewsletterDriver, 'send').and.returnValue(response);
        const failedAction = new DaffNewsletterFailedSubscribe(error);

        actions$ = hot('--a', { a: newsletterSubscribe });
        expected = cold('--b', { b: failedAction });
        expect(effects.trySubmission$).toBeObservable(expected);
      });
    });
  });

  describe('when NewsletterRetry is triggered', () => {
    let expected;
    const newsletterRetry = new DaffNewsletterRetry(mockNewsletter);

    describe('and the call to NewsletterService is successful', () => {
      it('it should dispatch a NewsletterSuccessSubscribe', () => {
        const successAction = new DaffNewsletterSuccessSubscribe();
        spyOn(daffNewsletterDriver, 'send').and.returnValue(of('mystring'));

        actions$ = hot('--a', { a: newsletterRetry });
        expected = cold('--b', { b: successAction });
        expect(effects.trySubmission$).toBeObservable(expected);
      });
    });

    describe('and the call to NewsletterService fails', () => {
      it('it should dispatch a NewsletterFailedSubscribe', () => {
        const error = { code: 'code', recoverable: false, message: 'Failed to subscribe to newsletter' };
        const response = cold('#', {}, error);
        spyOn(daffNewsletterDriver, 'send').and.returnValue(response);
        const failedAction = new DaffNewsletterFailedSubscribe(error);

        actions$ = hot('--a', { a: newsletterRetry });
        expected = cold('--b', { b: failedAction });
        expect(effects.trySubmission$).toBeObservable(expected);
      });
    });
  });

  describe('when Newsletter cancel is triggered', () => {
    let expected;
    const newsletterSubscribe = new DaffNewsletterSubscribe(mockNewsletter);
    const newsletterCancel = new DaffNewsletterCancel();

    it('it should return an empty observable', () => {
      actions$ = hot('---d-----', {
        a: newsletterSubscribe,
        d: newsletterCancel,
      });
      expected = cold('---------');

      expect(effects.trySubmission$).toBeObservable(expected);
    });

    it('it should cancel a newsletter subscribe action', () => {
      actions$ = hot('--(ad)----', {
        a: newsletterSubscribe,
        d: newsletterCancel,
      });
      expected = cold('--------');

      expect(effects.trySubmission$).toBeObservable(expected);
    });
  });
});
