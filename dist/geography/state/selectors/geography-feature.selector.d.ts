import { MemoizedSelector } from '@ngrx/store';
import { DaffCountry } from '@daffodil/geography';
import { DaffGeographyFeatureState } from '../reducers/public_api';
export interface DaffGeographyFeatureSelector<T extends DaffCountry = DaffCountry> {
    selectGeographyFeatureState: MemoizedSelector<object, DaffGeographyFeatureState<T>>;
}
export declare const getDaffGeographyFeatureStateSelector: <T extends DaffCountry = DaffCountry>() => DaffGeographyFeatureSelector<T>;
