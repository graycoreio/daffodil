import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffNewsletterServiceInterface,
  DaffNewsletterDriver,
} from '@daffodil/newsletter/driver';
import { DaffTestingNewsletterService } from '@daffodil/newsletter/driver/testing';
import {
  DaffNewsletterSubscribe,
  DaffNewsletterSubscribeSuccess,
  DaffNewsletterSubscribeFailure,
  DaffNewsletterRetry,
  DaffNewsletterCancel,
} from '@daffodil/newsletter/state';

import { DaffNewsletterEffects } from './newsletter.effects';


describe('NewsletterEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffNewsletterEffects;
  const mockNewsletter = 'test@test.com';
  let daffNewsletterDriver: DaffNewsletterServiceInterface;

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
    const newsletterSubscribe = new DaffNewsletterSubscribe(mockNewsletter);

    describe('and the call to NewsletterService is successful', () => {
      it('it should dispatch a NewsletterSuccessSubscribe', () => {
        const successAction = new DaffNewsletterSubscribeSuccess();
        spyOn(daffNewsletterDriver, 'send').and.returnValue(of({ message: 'mystring' }));

        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a', { a: newsletterSubscribe });
          expectObservable(effects.trySubmission$).toBe('--b', { b: successAction });
        });
      });
    });

    describe('and the call to NewsletterService fails', () => {
      it('it should dispatch a NewsletterFailedSubscribe', () => {
        const error = { code: 'code', recoverable: false, message: 'Failed to subscribe to newsletter' };
        const failedAction = new DaffNewsletterSubscribeFailure([error]);

        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(({ hot, cold, expectObservable }) => {
          const response = cold<any>('#', {}, error);
          spyOn(daffNewsletterDriver, 'send').and.returnValue(response);

          actions$ = hot('--a', { a: newsletterSubscribe });
          expectObservable(effects.trySubmission$).toBe('--b', { b: failedAction });
        });
      });
    });
  });

  describe('when Retry is triggered', () => {
    const newsletterRetry = new DaffNewsletterRetry(mockNewsletter);

    describe('and the call to NewsletterService is successful', () => {
      it('it should dispatch a NewsletterSuccessSubscribe', () => {
        const successAction = new DaffNewsletterSubscribeSuccess();
        spyOn(daffNewsletterDriver, 'send').and.returnValue(of({ message: 'mystring' }));

        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a', { a: newsletterRetry });
          expectObservable(effects.trySubmission$).toBe('--b', { b: successAction });
        });
      });
    });

    describe('and the call to NewsletterService fails', () => {
      it('it should dispatch a NewsletterFailedSubscribe', () => {
        const error = { code: 'code', recoverable: false, message: 'Failed to subscribe to newsletter' };
        const failedAction = new DaffNewsletterSubscribeFailure([error]);

        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(({ hot, cold, expectObservable }) => {
          const response = cold<any>('#', {}, error);
          spyOn(daffNewsletterDriver, 'send').and.returnValue(response);

          actions$ = hot('--a', { a: newsletterRetry });
          expectObservable(effects.trySubmission$).toBe('--b', { b: failedAction });
        });
      });
    });
  });

  describe('when Newsletter cancel is triggered', () => {
    const newsletterSubscribe = new DaffNewsletterSubscribe(mockNewsletter);
    const newsletterCancel = new DaffNewsletterCancel();

    it('it should return an empty observable', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ hot, expectObservable }) => {
        actions$ = hot('---d-----', {
          a: newsletterSubscribe,
          d: newsletterCancel,
        });
        expectObservable(effects.trySubmission$).toBe('---------');
      });
    });

    it('it should cancel a newsletter subscribe action', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ hot, expectObservable }) => {
        actions$ = hot('--(ad)----', {
          a: newsletterSubscribe,
          d: newsletterCancel,
        });
        expectObservable(effects.trySubmission$).toBe('--------');
      });
    });
  });
});
