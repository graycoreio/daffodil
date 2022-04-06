import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import {
  DaffAnalyticsServices,
  DaffAnalyticsTracker,
} from '../analytics-tracker';
import {
  DaffAnalyticsConfig,
  DaffAnalyticsConfigInterface,
} from '../config/config';

/**
 * Tracker code to emit analytics events to external sources.
 */
@Injectable()
export class DaffAnalyticsEffects {

  constructor(
    private actions$: Actions,
    @Inject(DaffAnalyticsServices) private analyticsServices: DaffAnalyticsTracker[],
    @Inject(DaffAnalyticsConfig) private config: DaffAnalyticsConfigInterface,
  ) {}

  /**
   * Tracks events in external services. Importantly, this allows for there to be multiple analytics services
   * in the event multiple are in use, or, more importantly, in the event
   * there needs to be a transition from one service to another (Universal Analytics to GA4 for example).
   */
  trackAnalyticsEvent$ = createEffect(() => this.actions$.pipe(
    ofType(...this.config.analyzableActions),
    mergeMap((action) => forkJoin(this.analyticsServices.map(
      (service) => typeof service === 'function' ? service(action) : service.track(action),
    ))),
  ), { dispatch: false });
}
