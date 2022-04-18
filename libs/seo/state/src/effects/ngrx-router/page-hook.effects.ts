import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import {
  ROUTER_REQUEST,
  ROUTER_CANCEL,
  ROUTER_ERROR,
  ROUTER_NAVIGATED,
} from '@ngrx/router-store';
import { EMPTY } from 'rxjs';
import {
  map,
  tap,
  switchMapTo,
} from 'rxjs/operators';

import { DaffSeoRestoreableServiceInterface } from '@daffodil/seo';

import { DaffSeoUpdateActionPair } from '../../models/public_api';

/**
 * Hooks into the Angular router to manage SEO data on the page as navigation occurs.
 *
 * @docs-private
 */
export abstract class DaffSeoPageHookEffects<T extends DaffSeoRestoreableServiceInterface<V>, R extends DaffSeoUpdateActionPair = DaffSeoUpdateActionPair, V = unknown> {
  constructor(
    protected actions$: Actions,
    protected updates: R[],
    protected service: T,
  ) {}

  /**
   * Upserts SEO data according to the provided updates.
   *
   * @docs-private
   */
  getData$ = createEffect(
    () => this.actions$.pipe(
      ofType(...this.updates.map(({ action }) => action)),
      map(action => this.updates.filter(update =>
        action.type === update.action,
      ).map(({ getData }) =>
        getData(action),
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
    () => this.actions$.pipe(
      ofType(ROUTER_REQUEST),
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
    () => this.actions$.pipe(
      ofType(ROUTER_CANCEL, ROUTER_ERROR),
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
    () => this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      tap(() => this.service.emptyRestoreCache()),
      switchMapTo(EMPTY),
    ),
    {
      dispatch: false,
    },
  );
}
