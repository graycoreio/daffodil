import { Action } from '@ngrx/store';
import { DaffCountry } from '@daffodil/geography';
export declare enum DaffGeographyActionTypes {
    CountryLoadAction = "[DaffGeography] Country Load Action",
    CountryLoadSuccessAction = "[DaffGeography] Country Load Success Action",
    CountryLoadFailureAction = "[DaffGeography] Country Load Failure Action",
    CountryListAction = "[DaffGeography] Country List Action",
    CountryListSuccessAction = "[DaffGeography] Country List Success Action",
    CountryListFailureAction = "[DaffGeography] Country List Failure Action"
}
export declare class DaffCountryLoad<T extends DaffCountry> implements Action {
    payload: T['id'];
    readonly type = DaffGeographyActionTypes.CountryLoadAction;
    constructor(payload: T['id']);
}
export declare class DaffCountryLoadSuccess<T extends DaffCountry> implements Action {
    payload: T;
    readonly type = DaffGeographyActionTypes.CountryLoadSuccessAction;
    constructor(payload: T);
}
export declare class DaffCountryLoadFailure implements Action {
    payload: string;
    readonly type = DaffGeographyActionTypes.CountryLoadFailureAction;
    constructor(payload: string);
}
export declare class DaffCountryList implements Action {
    readonly type = DaffGeographyActionTypes.CountryListAction;
}
export declare class DaffCountryListSuccess<T extends DaffCountry> implements Action {
    payload: T[];
    readonly type = DaffGeographyActionTypes.CountryListSuccessAction;
    constructor(payload: T[]);
}
export declare class DaffCountryListFailure implements Action {
    payload: string;
    readonly type = DaffGeographyActionTypes.CountryListFailureAction;
    constructor(payload: string);
}
export declare type DaffGeographyActions<T extends DaffCountry> = DaffCountryLoad<T> | DaffCountryLoadSuccess<T> | DaffCountryLoadFailure | DaffCountryList | DaffCountryListSuccess<T> | DaffCountryListFailure;
