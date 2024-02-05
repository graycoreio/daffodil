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
   * Tracks events in external services. Importantly, this allows for there to 
   * be multiple analytics services that subscribe to the same event.
   */
  trackAnalyticsEvent$ = createEffect(() => this.actions$.pipe(
    ofType(...this.config.analyzableActions),
    mergeMap((action) => forkJoin(this.analyticsServices.map(
      (service) => typeof service === 'function' ? service(action) : service.track(action),
    ))),
  ), { dispatch: false });
}
