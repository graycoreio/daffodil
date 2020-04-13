import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
  DaffGeographyActionTypes,
  DaffCountryLoad,
  DaffCountryLoadSuccess,
  DaffCountryLoadFailure,
  DaffCountryList,
  DaffCountryListSuccess,
  DaffCountryListFailure,
} from '../actions/public_api';
import { DaffGeographyServiceInterface, DaffGeographyDriver } from '../drivers/interfaces/geography-service.interface';
import { DaffCountry } from '../models/country';

@Injectable()
export class DaffGeographyEffects<T extends DaffCountry> {
  constructor(
    private actions$: Actions,
    @Inject(DaffGeographyDriver) private driver: DaffGeographyServiceInterface<T>,
  ) {}

  @Effect()
  get$ = this.actions$.pipe(
    ofType(DaffGeographyActionTypes.CountryLoadAction),
    switchMap((action: DaffCountryLoad<T>) => this.driver.get(action.payload).pipe(
      map(resp => new DaffCountryLoadSuccess(resp)),
      catchError(error => of(new DaffCountryLoadFailure('Failed to load country')))
    )),
  )

  @Effect()
  list$ = this.actions$.pipe(
    ofType(DaffGeographyActionTypes.CountryListAction),
    switchMap((action: DaffCountryList) => this.driver.list().pipe(
      map(resp => new DaffCountryListSuccess(resp)),
      catchError(error => of(new DaffCountryListFailure('Failed to list the countries')))
    ))
  )
}
