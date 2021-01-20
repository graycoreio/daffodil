import { MemoizedSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { DaffCountry } from '@daffodil/geography';
import { DaffCountryEntityState } from '../reducers/public_api';
export interface DaffCountryEntitySelectors<T extends DaffCountry> {
    selectCountryEntitiesState: MemoizedSelector<object, DaffCountryEntityState<T>>;
    selectCountryIds: MemoizedSelector<object, string[] | number[]>;
    selectCountryEntities: MemoizedSelector<object, Dictionary<T>>;
    selectAllCountries: MemoizedSelector<object, T[]>;
    selectCountryTotal: MemoizedSelector<object, number>;
    selectCountry: MemoizedSelectorWithProps<object, {
        id: string | number;
    }, T>;
    selectCountrySubdivisions: MemoizedSelectorWithProps<object, {
        id: string | number;
    }, T['subdivisions']>;
    selectIsCountryFullyLoaded: MemoizedSelector<object, boolean>;
}
export declare const getDaffCountryEntitySelectors: <T extends DaffCountry>() => DaffCountryEntitySelectors<T>;
