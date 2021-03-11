import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  Effect,
  ofType,
} from '@ngrx/effects';
import {
  of,
  Observable,
} from 'rxjs';
import {
  switchMap,
  catchError,
  mergeMap,
} from 'rxjs/operators';

import {
  DaffCategoryRequest,
  DaffGenericCategory,
  DaffCategoryPageConfigurationState,
  daffCategoryValidateFilters,
  DaffGetCategoryResponse,
} from '@daffodil/category';
import {
  DaffCategoryDriver,
  DaffCategoryServiceInterface,
} from '@daffodil/category/driver';
import { DaffProduct } from '@daffodil/product';
import { DaffProductGridLoadSuccess } from '@daffodil/product/state';

import {
  DaffCategoryActionTypes,
  DaffCategoryLoad,
  DaffCategoryLoadSuccess,
  DaffCategoryLoadFailure,
} from '../actions/category.actions';

@Injectable()
export class DaffCategoryEffects<
  T extends DaffCategoryRequest,
  V extends DaffGenericCategory<V>,
  U extends DaffCategoryPageConfigurationState<T>,
  W extends DaffProduct
> {

  constructor(
    private actions$: Actions,
    @Inject(DaffCategoryDriver) private driver: DaffCategoryServiceInterface<T, V, U, W>,
  ) {}

  @Effect()
  loadCategory$: Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryActionTypes.CategoryLoadAction),
    mergeMap((action: DaffCategoryLoad<T>) => {
      daffCategoryValidateFilters(action.request.filter_requests);
      return this.driver.get(action.request).pipe(
        switchMap((resp: DaffGetCategoryResponse<T, V, U, W>) => of(
          new DaffProductGridLoadSuccess(resp.products),
          new DaffCategoryLoadSuccess(resp),
        )),
        catchError(error => of(new DaffCategoryLoadFailure('Failed to load the category'))),
      );
    }),
  );
}
