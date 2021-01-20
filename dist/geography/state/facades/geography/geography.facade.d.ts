import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { DaffCountry } from '@daffodil/geography';
import { DaffGeographyFeatureState } from '../../reducers/public_api';
import { DaffGeographyFacadeInterface } from './geography-facade.interface';
export declare class DaffGeographyFacade<T extends DaffCountry = DaffCountry> implements DaffGeographyFacadeInterface<T> {
    private store;
    loading$: Observable<boolean>;
    errors$: Observable<string[]>;
    countries$: Observable<T[]>;
    countryIds$: Observable<(string | number)[]>;
    countryCount$: Observable<number>;
    countryEntities$: Observable<Dictionary<T>>;
    private _selectCountry;
    private _selectCountrySubdivisions;
    private _selectIsCountryFullyLoaded;
    constructor(store: Store<DaffGeographyFeatureState<T>>);
    getCountry(id: T['id']): Observable<T>;
    getCountrySubdivisions(id: T['id']): Observable<T['subdivisions']>;
    isCountryFullyLoaded(id: T['id']): Observable<boolean>;
    dispatch(action: Action): void;
}
