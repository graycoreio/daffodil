import { MemoizedSelector } from '@ngrx/store';
import { DaffCountry } from '@daffodil/geography';
import { DaffGeographyReducerState } from '../reducers/public_api';
export interface DaffGeographySelectors {
    selectGeographyState: MemoizedSelector<object, DaffGeographyReducerState>;
    selectGeographyLoading: MemoizedSelector<object, boolean>;
    selectGeographyErrors: MemoizedSelector<object, string[]>;
}
export declare const getGeographySelectors: <T extends DaffCountry = DaffCountry>() => DaffGeographySelectors;
