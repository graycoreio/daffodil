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
  catchError,
} from 'rxjs/operators';

import {
  DaffGenericCategory,
  DaffGetCategoryResponse,
} from '@daffodil/category';
import {
  DaffCategoryDriver,
  DaffCategoryServiceInterface,
} from '@daffodil/category/driver';
import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';
import { DaffProductGridLoadSuccess } from '@daffodil/product/state';

import {
  DaffCategoryPageLoadSuccess,
  DaffCategoryPageLoad,
  DaffCategoryPageLoadFailure,
  DaffCategoryPageActionTypes,
  DaffCategoryPageLoadByUrl,
} from '../actions/category-page.actions';
import { DAFF_CATEGORY_ERROR_MATCHER } from '../injection-tokens/public_api';

@Injectable()
export class DaffCategoryPageEffects<
  V extends DaffGenericCategory<V>,
  W extends DaffProduct
> {
  constructor(
    private actions$: Actions,
    @Inject(DaffCategoryDriver) private driver: DaffCategoryServiceInterface<V, W>,
    @Inject(DAFF_CATEGORY_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) {}

  loadCategoryPage$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(DaffCategoryPageActionTypes.CategoryPageLoadAction),
    switchMap((action: DaffCategoryPageLoad) => this.driver.get(action.request).pipe(
      switchMap((resp: DaffGetCategoryResponse<V, W>) => [
        new DaffProductGridLoadSuccess(resp.products),
        new DaffCategoryPageLoadSuccess(resp),
      ]),
      catchError((error: DaffError) => of(new DaffCategoryPageLoadFailure(this.errorMatcher(error)))),
    )),
  ));


  loadCategoryPageByUrl$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(DaffCategoryPageActionTypes.CategoryPageLoadByUrlAction),
    switchMap((action: DaffCategoryPageLoadByUrl) => this.driver.getByUrl(action.request).pipe(
      switchMap((resp: DaffGetCategoryResponse<V, W>) => [
        new DaffProductGridLoadSuccess(resp.products),
        new DaffCategoryPageLoadSuccess(resp),
      ]),
      catchError((error: DaffError) => of(new DaffCategoryPageLoadFailure(this.errorMatcher(error)))),
    )),
  ));
}
