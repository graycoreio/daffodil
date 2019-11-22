import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { DaffProductGridLoadSuccess } from '@daffodil/product';

import { 
  DaffCategoryActionTypes, 
  DaffCategoryLoad, 
  DaffCategoryLoadSuccess, 
  DaffCategoryLoadFailure, 
  DaffChangeCategoryPageSize} from '../actions/category.actions';
import { DaffCategoryDriver } from '../drivers/injection-tokens/category-driver.token';
import { DaffCategoryServiceInterface } from '../drivers/interfaces/category-service.interface';
import { DaffGetCategoryResponse } from '../models/get-category-response';
import { selectSelectedCategoryId, selectCategoryPageSize } from '../selectors/category.selector';
import { DaffCategoryRequest } from '../models/category-request';

@Injectable()
export class DaffCategoryEffects {

  constructor(
    private actions$: Actions,
    @Inject(DaffCategoryDriver) private driver: DaffCategoryServiceInterface,
    private store: Store<any>
  ){}

  @Effect()
  loadCategory$ : Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryActionTypes.CategoryLoadAction),
    switchMap((action: DaffCategoryLoad) => this.processCategoryGetRequest(action.payload))
  )

  @Effect()
  changeCategoryPageSize$ : Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryActionTypes.ChangeCategoryPageSizeAction),
    withLatestFrom(this.store.pipe(select(selectSelectedCategoryId))),
    switchMap(([action, categoryId]: [DaffChangeCategoryPageSize, string]) =>
      this.processCategoryGetRequest({
        id: categoryId,
        page_size: action.payload
      })
    )
  )

  @Effect()
  changeCategoryCurrentPage$ : Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryActionTypes.ChangeCategoryCurrentPageAction),
    withLatestFrom(
      this.store.pipe(select(selectSelectedCategoryId)), 
      this.store.pipe(select(selectCategoryPageSize))
    ),
    switchMap(([action, categoryId, pageSize]: [DaffChangeCategoryPageSize, string, number]) =>
      this.processCategoryGetRequest({
        id: categoryId,
        page_size: pageSize,
        current_page: action.payload
      })
    )
  )

  private processCategoryGetRequest(payload: DaffCategoryRequest) {
    return this.driver.get(payload).pipe(
      switchMap((resp: DaffGetCategoryResponse) => [
        new DaffProductGridLoadSuccess(resp.products),
        new DaffCategoryLoadSuccess(resp)
      ]),
      catchError(error => of(new DaffCategoryLoadFailure('Failed to load the category')))
    )
  }
}
