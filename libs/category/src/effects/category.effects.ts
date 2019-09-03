import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import { DaffProductGridLoadSuccess } from '@daffodil/product';

import { 
  DaffCategoryActionTypes, 
  DaffCategoryLoad, 
  DaffCategoryLoadSuccess, 
  DaffCategoryLoadFailure } from '../actions/category.actions';
import { DaffCategoryDriver } from '../drivers/injection-tokens/category-driver.token';
import { DaffCategoryServiceInterface } from '../drivers/interfaces/category-service.interface';
import { DaffGetCategoryResponse } from '../models/get-category-response';

@Injectable()
export class DaffCategoryEffects {

  constructor(
    private actions$: Actions,
    @Inject(DaffCategoryDriver) private driver: DaffCategoryServiceInterface){}

  @Effect()
  loadCategory$ : Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryActionTypes.CategoryLoadAction),
    switchMap((action: DaffCategoryLoad) =>
      this.driver.get(action.payload)
        .pipe(
          switchMap((resp: DaffGetCategoryResponse) => [
            new DaffProductGridLoadSuccess(resp.products),
            new DaffCategoryLoadSuccess(resp.category)
          ]),
          catchError(error => {
            return of(new DaffCategoryLoadFailure('Failed to load the category'));
          })
        )
    )
  )
}
