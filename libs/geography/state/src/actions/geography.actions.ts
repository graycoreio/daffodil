import { Action } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import { DaffCountry } from '@daffodil/geography';

export enum DaffGeographyActionTypes {
  CountryLoadAction = '[@daffodil/geography] Country Load Action',
  CountryLoadSuccessAction = '[@daffodil/geography] Country Load Success Action',
  CountryLoadFailureAction = '[@daffodil/geography] Country Load Failure Action',
  CountryListAction = '[@daffodil/geography] Country List Action',
  CountryListSuccessAction = '[@daffodil/geography] Country List Success Action',
  CountryListFailureAction = '[@daffodil/geography] Country List Failure Action',
}

export class DaffCountryLoad<T extends DaffCountry> implements Action {
  readonly type = DaffGeographyActionTypes.CountryLoadAction;

  constructor(public payload: T['id']) {}
}

export class DaffCountryLoadSuccess<T extends DaffCountry> implements Action {
  readonly type = DaffGeographyActionTypes.CountryLoadSuccessAction;

  constructor(public payload: T) {}
}

export class DaffCountryLoadFailure implements Action {
  readonly type = DaffGeographyActionTypes.CountryLoadFailureAction;

  constructor(public payload: DaffStateError) {}
}

export class DaffCountryList implements Action {
  readonly type = DaffGeographyActionTypes.CountryListAction;
}

export class DaffCountryListSuccess<T extends DaffCountry> implements Action {
  readonly type = DaffGeographyActionTypes.CountryListSuccessAction;

  constructor(public payload: T[]) {}
}

export class DaffCountryListFailure implements Action {
  readonly type = DaffGeographyActionTypes.CountryListFailureAction;

  constructor(public payload: DaffStateError) {}
}

export type DaffGeographyActions<T extends DaffCountry> =
  | DaffCountryLoad<T>
  | DaffCountryLoadSuccess<T>
  | DaffCountryLoadFailure
  | DaffCountryList
  | DaffCountryListSuccess<T>
  | DaffCountryListFailure;
