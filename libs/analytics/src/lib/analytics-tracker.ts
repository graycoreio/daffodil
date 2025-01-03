import { Observable } from 'rxjs';

import { createMultiInjectionToken } from '@daffodil/core';

import { DaffAnalyticsEvent } from './event/event';

/**
 * The interface that an analytics service must implement to be compatible
 * with the `@daffodil/analytics` package.
 */
export interface DaffAnalyticsTrackerClass {
  track(event: DaffAnalyticsEvent): Observable<unknown>;
}

/**
 * A function that tracks analytics events.
 */
export type DaffAnalyticsTrackerFunction = (event: DaffAnalyticsEvent) => Observable<unknown>;

/**
 * The tracker type.
 *
 * @example Implementing a tracker as a class
 *
 * ```ts
 * export class MyTracker implements DaffAnalyticsTracker {
 *    track(event: DaffAnalyticsEvent) {
 *       return of(true);
 *    }
 * }
 * ```
 *
 * @example Implementing a tracker as a function
 *
 * ```ts
 * export const trackThis = (event: DaffAnalyticsEvent) => {
 *    return of(true);
 * }
 * ```
 */
export type DaffAnalyticsTracker = DaffAnalyticsTrackerFunction | DaffAnalyticsTrackerClass;

export const {
  /**
   * An injection token representing all of the different analytics trackers.
   */
  token: DaffAnalyticsServices,
} = createMultiInjectionToken<DaffAnalyticsTracker>('DaffAnalyticsServices');
