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

import { DaffSeoUpdateActionPair } from '../models/public_api';

export abstract class DaffSeoPageHookEffects<T extends DaffSeoRestoreableServiceInterface<V>, R extends DaffSeoUpdateActionPair = DaffSeoUpdateActionPair, V = unknown> {
  constructor(
    protected actions$: Actions,
    protected updates: R[],
    protected service: T,
  ) {}

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
   * An effect for readding the most recent canonical URL on navigation cancel or error.
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
