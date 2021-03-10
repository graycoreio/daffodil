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
	V extends DaffGenericCategory<V>,
	W extends DaffProduct
> {

  constructor(
    private actions$: Actions,
    @Inject(DaffCategoryDriver) private driver: DaffCategoryServiceInterface<V,W>,
  ) {}

  @Effect()
  loadCategory$: Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryActionTypes.CategoryLoadAction),
    mergeMap((action: DaffCategoryLoad) => {
      daffCategoryValidateFilters(action.request.filter_requests);
      return this.driver.get(action.request).pipe(
        switchMap((resp: DaffGetCategoryResponse<V,W>) => of(
          new DaffProductGridLoadSuccess(resp.products),
          new DaffCategoryLoadSuccess(resp),
        )),
        catchError(error => of(new DaffCategoryLoadFailure('Failed to load the category'))),
      );
    }),
  );
}
