import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import {
  Action,
  StoreModule,
} from '@ngrx/store';
import { of } from 'rxjs';

import {
  DaffAnalyticsTrackerClass,
  DaffAnalyticsServices,
} from './analytics-tracker';
import { DaffAnalyticsModule } from './analytics.module';


@Injectable({ providedIn: 'root' })
class FakeService1 implements DaffAnalyticsTrackerClass {
  track(action: Action) {
    return of(true);
  }
}

@Injectable({ providedIn: 'root' })
class FakeService2 implements DaffAnalyticsTrackerClass {
  public track(action: Action) {
    return of(true);
  }
}


describe('@daffodil/analytics | DaffAnalyticsModule', () => {
  it('should configure services correctly', () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        DaffAnalyticsModule.forRoot(),
      ],
    });

    expect(TestBed.inject(DaffAnalyticsServices)).toEqual([]);
  });

  it('should test configure services correctly when a service is provided', () => {


    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        DaffAnalyticsModule.forRoot([FakeService1]),
      ],
    });

    expect(TestBed.inject(DaffAnalyticsServices)).toEqual([
      TestBed.inject(FakeService1),
    ]);

  });

  it('should configure services correctly when multiple services are provided', () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        DaffAnalyticsModule.forRoot([
          FakeService1,
          FakeService2,
        ]),
      ],
    });

    expect(TestBed.inject(DaffAnalyticsServices)).toEqual([
      TestBed.inject(FakeService1),
      TestBed.inject(FakeService2),
    ]);
  });
});
