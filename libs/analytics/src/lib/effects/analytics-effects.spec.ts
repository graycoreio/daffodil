import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import {
  EMPTY,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffAnalyticsTrackerClass,
  DaffAnalyticsServices,
} from '../analytics-tracker';
import {
  DaffAnalyticsConfig,
  DaffAnalyticsConfigInterface,
} from '../config/config';
import { DaffAnalyticsEffects } from './analytics-effects';

describe('@daffodil/analytics | DaffAnalyticsEffects', () => {
  let actions$: Actions;
  let effects: DaffAnalyticsEffects;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockActions(() => actions$),
        DaffAnalyticsEffects,
      ],
    });
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    effects = TestBed.inject(DaffAnalyticsEffects);
    expect(effects).toBeTruthy();
  });

  it('should filter all events from being tracked by default', () => {
    TestBed.overrideProvider(DaffAnalyticsServices, { useValue: []});

    const someAction: Action = {
      type: 'Test Action',
    };

    testScheduler.run((helpers) => {
      const { expectObservable, hot } = helpers;
      effects = TestBed.inject(DaffAnalyticsEffects);

      actions$ = hot('-a--|', { a: someAction });
      expectObservable(effects.trackAnalyticsEvent$).toBe('----|');
    });
  });

  it('should send not error if there are no defined trackers', () => {
    const testConfig: DaffAnalyticsConfigInterface = {
      analyzableActions: ['Test Action'],
    };

    TestBed.overrideProvider(DaffAnalyticsConfig, { useValue: testConfig });
    TestBed.overrideProvider(DaffAnalyticsServices, { useValue: []});

    const someAction: Action = {
      type: 'Test Action',
    };

    testScheduler.run((helpers) => {
      const { expectObservable, hot } = helpers;
      effects = TestBed.inject(DaffAnalyticsEffects);

      actions$ = hot('-a--|', { a: someAction });
      expectObservable(effects.trackAnalyticsEvent$).toBe('----|');
    });
  });

  it('should send a tracked event to every attached tracker', () => {
    const testConfig: DaffAnalyticsConfigInterface = {
      analyzableActions: ['Test Action'],
    };

    const fakeTracker: DaffAnalyticsTrackerClass = {
      track: (action: Action) => of(true),
    };
    const spy = spyOn(fakeTracker, 'track');
    spy.and.callThrough();

    TestBed.overrideProvider(DaffAnalyticsConfig, { useValue: testConfig });
    TestBed.overrideProvider(DaffAnalyticsServices, { useValue: [fakeTracker]});

    const someAction: Action = {
      type: 'Test Action',
    };

    testScheduler.run((helpers) => {
      const { expectObservable, hot } = helpers;
      effects = TestBed.inject(DaffAnalyticsEffects);

      actions$ = hot('-a--|', { a: someAction });
      expectObservable(effects.trackAnalyticsEvent$).toBe('-a--|', { a: [true]});
    });
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
