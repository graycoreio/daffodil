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
  of,
  Observable,
} from 'rxjs';
import {
  switchMap,
  map,
  catchError,
} from 'rxjs/operators';

import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import {
  DaffGenericNavigationTree,
  DAFF_NAVIGATION_ERROR_MATCHER,
} from '@daffodil/navigation';
import {
  DaffNavigationDriver,
  DaffNavigationServiceInterface,
} from '@daffodil/navigation/driver';

import {
  DaffNavigationActionTypes,
  DaffNavigationLoad,
  DaffNavigationLoadSuccess,
  DaffNavigationLoadFailure,
} from '../actions/navigation.actions';

@Injectable()
export class DaffNavigationEffects<T extends DaffGenericNavigationTree<T>> {

  constructor(
    private actions$: Actions,
    @Inject(DaffNavigationDriver) private driver: DaffNavigationServiceInterface<T>,
    @Inject(DAFF_NAVIGATION_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) {}


  loadNavigation$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(DaffNavigationActionTypes.NavigationLoadAction),
    switchMap((action: DaffNavigationLoad) =>
      this.driver.get(action.payload)
        .pipe(
          map((resp) => new DaffNavigationLoadSuccess(resp)),
          catchError((error: DaffError) => of(new DaffNavigationLoadFailure(this.errorMatcher(error)))),
        ),
    ),
  ));
}
