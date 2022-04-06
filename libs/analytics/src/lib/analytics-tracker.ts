import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffAnalyticsEvent } from './event/event';

/**
 * The interface that an analytics service must implement to be compatible
 * with the `@daffodil/analytics` package.
 */
export interface DaffAnalyticsTrackerClass {
  track(event: DaffAnalyticsEvent): Observable<unknown>;
}

export type DaffAnalyticsTrackerFunction = (event: DaffAnalyticsEvent) => Observable<unknown>;

export type DaffAnalyticsTracker = DaffAnalyticsTrackerFunction | DaffAnalyticsTrackerClass;

export const DaffAnalyticsServices = new InjectionToken<DaffAnalyticsTracker[]>('DaffAnalyticsServices', {
  factory: () => [],
});
