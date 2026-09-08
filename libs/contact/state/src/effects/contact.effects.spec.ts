import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { DaffContactDriver } from '@daffodil/contact/driver';
import { DaffContactTestingDriverModule } from '@daffodil/contact/driver/testing';
import {
  DaffContactSubmit,
  DaffContactSubmitSuccess,
  DaffContactSubmitFailure,
  DaffContactRetry,
  DaffContactCancel,
} from '@daffodil/contact/state';

import { DaffContactEffects } from './contact.effects';

describe('@daffodil/contact/state | DaffContactEffects', () => {
  let actions$: Actions;
  let effects: DaffContactEffects;
  const mockForm = { firstName: 'John', lastName: 'Doe' };
  let daffContactDriver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DaffContactTestingDriverModule.forRoot()],
      providers: [DaffContactEffects, provideMockActions(() => actions$)],
    });
    effects = TestBed.inject(DaffContactEffects);
    daffContactDriver = TestBed.inject(DaffContactDriver);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when a ContactSubscribe is triggered', () => {
    const forumSubmit = new DaffContactSubmit(mockForm);

    it('and if the call was successful, it should dispatch a ContactSuccessSubmit', () => {
      const successAction = new DaffContactSubmitSuccess();
      spyOn(daffContactDriver, 'send').and.returnValue(of('mystring'));

      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      scheduler.run(helpers => {
        actions$ = helpers.hot('--a', { a: forumSubmit });
        helpers.expectObservable(effects.trySubmission$).toBe('--b', { b: successAction });
      });
    });

    it('and if the call fails, it should dispatch a ContactFailedSubmit', () => {
      const error = [{ code: 'code', recoverable: false, message: 'Failed to submit' }];
      const failedAction = new DaffContactSubmitFailure(error);

      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      scheduler.run(helpers => {
        const response = helpers.cold<any>('#', {}, error[0]);
        spyOn(daffContactDriver, 'send').and.returnValue(response);
        actions$ = helpers.hot('--a', { a: forumSubmit });
        helpers.expectObservable(effects.trySubmission$).toBe('--b', { b: failedAction });
      });
    });
  });

  describe('when a ContactRetry is triggered', () => {
    const forumSubmit = new DaffContactRetry(mockForm);

    it('and if the call was successful, it should dispatch a ContactSuccessSubmit', () => {
      const successAction = new DaffContactSubmitSuccess();
      spyOn(daffContactDriver, 'send').and.returnValue(of('mystring'));

      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      scheduler.run(helpers => {
        actions$ = helpers.hot('--a', { a: forumSubmit });
        helpers.expectObservable(effects.trySubmission$).toBe('--b', { b: successAction });
      });
    });

    it('and if the call fails, it should dispatch a ContactFailedSubmit', () => {
      const error = [{ code: 'code', recoverable: false, message: 'Failed to submit' }];
      const failedAction = new DaffContactSubmitFailure(error);

      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      scheduler.run(helpers => {
        const response = helpers.cold<any>('#', {}, error[0]);
        spyOn(daffContactDriver, 'send').and.returnValue(response);
        actions$ = helpers.hot('--a', { a: forumSubmit });
        helpers.expectObservable(effects.trySubmission$).toBe('--b', { b: failedAction });
      });
    });
  });

  describe('when a ContactCancel is triggered', () => {
    const forumSubmit = new DaffContactSubmit(mockForm);
    const forumCancel = new DaffContactCancel();

    it('it should return an empty observable', () => {
      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      scheduler.run(helpers => {
        actions$ = helpers.hot('---d-----', {
          d: forumCancel,
        });
        helpers.expectObservable(effects.trySubmission$).toBe('---------');
      });
    });

    it('it should cancel a ContactSubmit action', () => {
      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      scheduler.run(helpers => {
        actions$ = helpers.hot('--(ad)----', {
          a: forumSubmit,
          d: forumCancel,
        });
        helpers.expectObservable(effects.trySubmission$).toBe('--------');
      });
    });
  });
});
