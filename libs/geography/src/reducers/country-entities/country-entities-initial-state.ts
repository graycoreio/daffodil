import { getCountryAdapter } from './country-entities-adapter';
import { DaffCountryEntityState } from './country-entities-state.interface';

/**
 * Initial state for country entity state.
 */
export const daffCountryEntitiesInitialState: DaffCountryEntityState<any> = getCountryAdapter().getInitialState();
