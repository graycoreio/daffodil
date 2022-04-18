import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  Event,
  ActivatedRoute,
} from '@angular/router';
import { createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {
  map,
  tap,
  switchMapTo,
  filter,
} from 'rxjs/operators';

import { DaffSeoRestoreableServiceInterface } from '@daffodil/seo';

import { DaffSeoUpdateEventPair } from '../../models/update-event-pair.interface';

export const shouldHandleEvent = <T extends DaffSeoUpdateEventPair>(routingEvent: Event, operators: T[]): boolean =>
  !!operators.find((trackableEvents) => routingEvent instanceof trackableEvents.event);

/**
 * Hooks into the Angular router to manage SEO data on the page as navigation occurs.
 *
 * @docs-private
 */
export abstract class DaffSeoPageHookRouterEffects<
  T extends DaffSeoRestoreableServiceInterface<V>,
  R extends DaffSeoUpdateEventPair = DaffSeoUpdateEventPair,
  V = unknown> {

  constructor(
    protected router: Router,
    protected updates: R[],
    protected service: T,
    private activatedRoute: ActivatedRoute,
  ) {}

  /**
   * Upserts SEO data according to the provided updates.
   *
   * @docs-private
   */
  getData$ = createEffect(
    () => this.router.events.pipe(
      filter((e) => shouldHandleEvent(e, this.updates)),
      map(event => this.updates.filter(update =>
        event instanceof update.event,
      ).map(({ getData }) =>
        getData(event, this.activatedRoute),
      )),
      tap((data: V[]) => data.forEach(datum => {
        if (datum) {
          this.service.upsert(datum);
        };
      })),
      switchMapTo(EMPTY),
    ),
    {
      dispatch: false,
    },
  );

  /**
   * Removes SEO data when navigation starts.
   *
   * @docs-private
   */
  remove$ = createEffect(
    () => this.router.events.pipe(
      filter((e) => e instanceof NavigationStart),
      tap(() => this.service.clear()),
      switchMapTo(EMPTY),
    ),
    {
      dispatch: false,
    },
  );

  /**
   * Restores previously removed SEO data when navigation is canceled or fails.
   *
   * @docs-private
   */
  restore$ = createEffect(
    () => this.router.events.pipe(
      filter((e) => e instanceof NavigationCancel || e instanceof NavigationError),
      tap(() => this.service.restore()),
      switchMapTo(EMPTY),
    ),
    {
      dispatch: false,
    },
  );

  /**
   * Empties the SEO data restore cache when navigation completes.
   *
   * @docs-private
   */
  emptyRestoreCache$ = createEffect(
    () => this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      tap(() => this.service.emptyRestoreCache()),
      switchMapTo(EMPTY),
    ),
    {
      dispatch: false,
    },
  );
}
