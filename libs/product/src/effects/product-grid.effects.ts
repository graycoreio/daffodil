import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of ,  Observable } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { 
  DaffProductGridActionTypes, 
  DaffProductGridLoad, 
  DaffProductGridLoadSuccess, 
  DaffProductGridLoadFailure } from '../actions/product-grid.actions';
import { DaffProductServiceInterface } from '../drivers/interfaces/product-service.interface';
import { DaffProductDriver } from '../drivers/injection-tokens/product-driver.token';

import { DaffProduct } from '../models/product';

@Injectable()
export class DaffProductGridEffects<T extends DaffProduct> {

  constructor(
    private actions$: Actions,
    @Inject(DaffProductDriver) private driver: DaffProductServiceInterface<T>){}

  @Effect()
  loadAll$ : Observable<any> = this.actions$.pipe(
    ofType(DaffProductGridActionTypes.ProductGridLoadAction),
    switchMap((action: DaffProductGridLoad) =>
      this.driver.getAll()
        .pipe(
          map((resp) => {
            return new DaffProductGridLoadSuccess(resp);
          }),
          catchError(error => {
            return of(new DaffProductGridLoadFailure("Failed to load product grid"));
          })
        )
    )
  )
}
