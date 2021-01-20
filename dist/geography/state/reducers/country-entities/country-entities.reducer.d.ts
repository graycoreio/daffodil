import { DaffCountry } from '@daffodil/geography';
import { DaffGeographyActions } from '../../actions/public_api';
import { DaffCountryEntityState } from './country-entities-state.interface';
/**
 * Reducer function that catches actions and changes/overwrites country entities state.
 */
export declare function daffCountryEntitiesReducer<T extends DaffCountry = DaffCountry>(state: DaffCountryEntityState<any>, action: DaffGeographyActions<T>): DaffCountryEntityState<T>;
