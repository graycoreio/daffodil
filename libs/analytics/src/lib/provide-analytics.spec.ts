import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import {
  Action,
  provideStore,
} from '@ngrx/store';
import { of } from 'rxjs';

import {
  DaffAnalyticsTrackerClass,
  DaffAnalyticsServices,
} from './analytics-tracker';
import { DaffAnalyticsConfig } from './config/config';
import { DaffAnalyticsEffects } from './effects/analytics-effects';
import { provideDaffAnalytics } from './provide-analytics';

@Injectable({ providedIn: 'root' })
class FakeService implements DaffAnalyticsTrackerClass {
  track(action: Action) {
    return of(true);
  }
}

describe('@daffodil/analytics | provideDaffAnalytics', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideEffects(),
        provideDaffAnalytics([FakeService], { analyzableActions: ['action']}),
      ],
    });
  });

  it('should provide the analytics effects', () => {
    expect(TestBed.inject(DaffAnalyticsEffects)).toBeTruthy();
  });

  it('should provide the services', () => {
    expect(TestBed.inject(DaffAnalyticsServices)).toEqual([
      TestBed.inject(FakeService),
    ]);
  });

  it('should provide the config', () => {
    expect(TestBed.inject(DaffAnalyticsConfig).analyzableActions).toEqual(['action']);
  });
});
