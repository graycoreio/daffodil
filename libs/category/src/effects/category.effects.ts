import { Injectable, Inject } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of ,  Observable } from 'rxjs';

import { 
  DaffCategoryActionTypes, 
  DaffCategoryLoad, 
  DaffCategoryLoadSuccess, 
  DaffCategoryLoadFailure } from '../actions/category.actions';
import { DaffCategoryDriver } from '../drivers/injection-tokens/category-driver.token';
import { DaffCategoryServiceInterface } from '../drivers/interfaces/category-service.interface';
import { DaffCategoriesActionTypes, DaffCategoriesLoad, DaffCategoriesLoadSuccess, DaffCategoriesLoadFailure } from '../actions/categories.actions';

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
          map((resp) => {
            return new DaffCategoryLoadSuccess(resp);
          }),
          catchError(error => {
            return of(new DaffCategoryLoadFailure('Failed to load the category'));
          })
        )
    )
  )

  @Effect()
  loadCategories$ : Observable<any> = this.actions$.pipe(
    ofType(DaffCategoriesActionTypes.CategoriesLoadAction),
    switchMap((action: DaffCategoriesLoad) =>
      this.driver.getAll()
        .pipe(
          map((resp) => {
            return new DaffCategoriesLoadSuccess(resp);
          }),
          catchError(error => {
            return of(new DaffCategoriesLoadFailure('Failed to load the categories'));
          })
        )
    )
  )
}
