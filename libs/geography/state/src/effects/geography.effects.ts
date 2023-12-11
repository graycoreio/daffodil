import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  createEffect,
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
import { DaffCountry } from '@daffodil/geography';
import {
  DaffGeographyServiceInterface,
  DaffGeographyDriver,
} from '@daffodil/geography/driver';

import {
  DaffGeographyActionTypes,
  DaffCountryLoad,
  DaffCountryLoadSuccess,
  DaffCountryLoadFailure,
  DaffCountryList,
  DaffCountryListSuccess,
  DaffCountryListFailure,
} from '../actions/public_api';
import { DAFF_GEOGRAPHY_ERROR_MATCHER } from '../injection-tokens/public_api';

@Injectable()
export class DaffGeographyEffects<T extends DaffCountry> {
  constructor(
    private actions$: Actions,
    @Inject(DaffGeographyDriver) private driver: DaffGeographyServiceInterface<T>,
    @Inject(DAFF_GEOGRAPHY_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) {}


  get$ = createEffect(() => this.actions$.pipe(
    ofType(DaffGeographyActionTypes.CountryLoadAction),
    switchMap((action: DaffCountryLoad<T>) => this.driver.get(action.payload).pipe(
      map(resp => new DaffCountryLoadSuccess(resp)),
      catchError((error: DaffError) => of(new DaffCountryLoadFailure(this.errorMatcher(error)))),
    )),
  ));


  list$ = createEffect(() => this.actions$.pipe(
    ofType(DaffGeographyActionTypes.CountryListAction),
    switchMap((action: DaffCountryList) => this.driver.list().pipe(
      map(resp => new DaffCountryListSuccess(resp)),
      catchError((error: DaffError) => of(new DaffCountryListFailure(this.errorMatcher(error)))),
    )),
  ));
}
