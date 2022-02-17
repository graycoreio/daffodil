import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  Effect,
  ofType,
} from '@ngrx/effects';
import { of } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
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
  DaffSearchLoad,
  DaffSearchLoadSuccess,
  DaffSearchLoadFailure,
} from '../actions/search.actions';

@Injectable()
export class DaffSearchEffects<
  T extends DaffSearchResult = DaffSearchResult,
> {
  constructor(
    private actions$: Actions,
    @Inject(DaffSearchDriver) private driver: DaffSearchDriverInterface<T>,
		@Inject(DAFF_SEARCH_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) {}

  /**
   * An effect for searching with the provided driver.
   */
  @Effect()
  search$ = this.actions$.pipe(
    ofType(DaffSearchActionTypes.SearchLoadAction),
    switchMap((action: DaffSearchLoad) =>
      this.driver.search(action.query).pipe(
        map(resp => new DaffSearchLoadSuccess<T>(resp)),
        catchError((error: DaffError) => of(new DaffSearchLoadFailure(this.errorMatcher(error)))),
      ),
    ),
  );
}
