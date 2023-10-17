import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import {
  asyncScheduler,
  Observable,
  of,
} from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  debounceTime,
} from 'rxjs/operators';

import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import {
  DaffSearchResult,
  DAFF_SEARCH_ERROR_MATCHER,
} from '@daffodil/search';
import {
  DaffSearchDriverInterface,
  DaffSearchDriver,
} from '@daffodil/search/driver';

import {
  DaffSearchActionTypes,
  DaffSearchIncremental,
  DaffSearchIncrementalSuccess,
  DaffSearchIncrementalFailure,
} from '../actions/search.actions';
import {
  DaffSearchStateConfig,
  DAFF_SEARCH_STATE_CONFIG,
} from '../config/public_api';

@Injectable()
export class DaffSearchIncrementalEffects<
  T extends DaffSearchResult = DaffSearchResult,
> {
  constructor(
    private actions$: Actions,
    @Inject(DaffSearchDriver) private driver: DaffSearchDriverInterface<T>,
    @Inject(DAFF_SEARCH_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DAFF_SEARCH_STATE_CONFIG) private config: DaffSearchStateConfig,
  ) {}

  /**
   * An effect for incremental searching with the provided driver.
   */
  incremental$: (throttleWindow: number, scheduler: typeof asyncScheduler) => Observable<
  DaffSearchIncrementalSuccess | DaffSearchIncrementalFailure
  > = createEffect(() => (throttleWindow = 200, scheduler = asyncScheduler) => this.actions$.pipe(
      ofType(DaffSearchActionTypes.SearchIncrementalAction),
      debounceTime(throttleWindow, scheduler),
      switchMap((action: DaffSearchIncremental) =>
        this.driver.incremental(action.query, {
          limit: this.config.incrementalResultLimit,
          ...action.options,
        }).pipe(
          map(resp => new DaffSearchIncrementalSuccess<T>(resp)),
          catchError((error: DaffError) => of(new DaffSearchIncrementalFailure(this.errorMatcher(error)))),
        ),
      ),
    ));
}

