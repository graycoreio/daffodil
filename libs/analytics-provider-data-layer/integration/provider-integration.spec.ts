import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import {
  Action,
  StoreModule,
} from '@ngrx/store';
import { of } from 'rxjs';

import {
  DaffAnalyticsModule,
  DaffAnalyticsTrackerClass,
  DaffAnalyticsServices,
} from '@daffodil/analytics';
import {
  DataLayerItem,
  provideDataLayerTracker,
} from '@daffodil/analytics-provider-data-layer';

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


describe('@daffodil/analytics-provider-data-layer | Provider Intergration', () => {
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

  it('should configure services correctly when the provideDataLayerTracker is provided', () => {
    const myDataTracker: (action: Action) => DataLayerItem = (action: Action) => null;

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        DaffAnalyticsModule.forRoot([
          provideDataLayerTracker(myDataTracker),
        ]),
      ],
    });

    expect(TestBed.inject(DaffAnalyticsServices).length).toEqual(1);
  });
});
