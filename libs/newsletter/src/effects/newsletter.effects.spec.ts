import { DaffNewsletterEffects } from './newsletter.effects';
import { DaffNewsletterSubmission } from '../models/newsletter.model';
import { Observable, of } from 'rxjs';
import { DaffNewsletterServiceInterface } from '../driver/interfaces/newsletter-service.interface';
import { TestBed } from '@angular/core/testing';
import { DaffNewsletterDriver } from '../driver/injection-tokens/newsletter-driver.token';
import { provideMockActions } from '@ngrx/effects/testing';
import { DaffNewsletterSubscribe, DaffNewsletterSuccessSubscribe, DaffNewsletterFailedSubscribe, DaffNewsletterRetry } from '../actions/newsletter.actions';
import { hot, cold } from 'jasmine-marbles';
import { DaffTestingNewsletterService } from '@daffodil/newsletter/testing';

describe('NewsletterEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffNewsletterEffects<DaffNewsletterSubmission, any>;
  const mockNewsletter = {email: 'test@test.com'};
  let daffNewsletterDriver: DaffNewsletterServiceInterface<DaffNewsletterSubmission, any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DaffNewsletterDriver,
          useValue: new DaffTestingNewsletterService
        },
        DaffNewsletterEffects,
        provideMockActions(() => actions$)
      ]
    })
    effects = TestBed.get(DaffNewsletterEffects);
    daffNewsletterDriver = TestBed.get(DaffNewsletterDriver);
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

        actions$ = hot('--a', {a: newsletterSubscribe})
        expected = cold('--b', {b: successAction})
        expect(effects.trySubmission$).toBeObservable(expected);
      });
    });
    describe('and the call to NewsletterService fails', () => {
      it('it should dispatch a NewsletterFailedSubscribe', () => {
        const error = 'Failed to subscribe to newsletter';
        const response = cold('#', {}, error);
        spyOn(daffNewsletterDriver, 'send').and.returnValue(response);
        const failedAction = new DaffNewsletterFailedSubscribe(error);


        actions$ = hot('--a', {a: newsletterSubscribe});
        expected = cold('--b', {b: failedAction});
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

        actions$ = hot('--a', {a: newsletterRetry})
        expected = cold('--b', {b: successAction})
        expect(effects.trySubmission$).toBeObservable(expected);
      });
    });
    describe('and the call to NewsletterService fails', () => {
      it('it should dispatch a NewsletterFailedSubscribe', () => {
        const error = 'Failed to subscribe to newsletter';
        const response = cold('#', {}, error);
        spyOn(daffNewsletterDriver, 'send').and.returnValue(response);
        const failedAction = new DaffNewsletterFailedSubscribe(error);


        actions$ = hot('--a', {a: newsletterRetry});
        expected = cold('--b', {b: failedAction});
        expect(effects.trySubmission$).toBeObservable(expected);
      });
    });
  });
});