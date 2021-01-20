import { EntityAdapter } from '@ngrx/entity';
import { DaffCountry } from '@daffodil/geography';
/**
 * Country Adapter for changing/overwriting entity state.
 */
export declare const getCountryAdapter: <T extends DaffCountry = DaffCountry>() => EntityAdapter<T>;
