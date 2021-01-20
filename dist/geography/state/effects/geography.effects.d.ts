import { Actions } from '@ngrx/effects';
import { DaffCountry } from '@daffodil/geography';
import { DaffGeographyServiceInterface } from '@daffodil/geography/driver';
import { DaffCountryLoadSuccess, DaffCountryLoadFailure, DaffCountryListSuccess, DaffCountryListFailure } from '../actions/public_api';
export declare class DaffGeographyEffects<T extends DaffCountry> {
    private actions$;
    private driver;
    constructor(actions$: Actions, driver: DaffGeographyServiceInterface<T>);
    get$: import("rxjs").Observable<DaffCountryLoadFailure | DaffCountryLoadSuccess<T>>;
    list$: import("rxjs").Observable<DaffCountryListFailure | DaffCountryListSuccess<T>>;
}
