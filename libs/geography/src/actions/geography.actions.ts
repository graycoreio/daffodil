import { Action } from '@ngrx/store';

import { DaffCountry } from '../models/country';

export enum DaffGeographyActionTypes {
  CountryLoadAction = '[DaffGeography] Country Load Action',
  CountryLoadSuccessAction = '[DaffGeography] Country Load Success Action',
  CountryLoadFailureAction = '[DaffGeography] Country Load Failure Action',
  CountryListAction = '[DaffGeography] Country List Action',
  CountryListSuccessAction = '[DaffGeography] Country List Success Action',
  CountryListFailureAction = '[DaffGeography] Country List Failure Action',
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

  constructor(public payload: string) {}
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

  constructor(public payload: string) {}
}

export type DaffGeographyActions<T extends DaffCountry> =
  | DaffCountryLoad<T>
  | DaffCountryLoadSuccess<T>
  | DaffCountryLoadFailure
  | DaffCountryList
  | DaffCountryListSuccess<T>
  | DaffCountryListFailure;
