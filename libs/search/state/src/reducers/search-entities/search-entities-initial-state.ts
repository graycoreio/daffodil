import { daffGetSearchAdapter } from './search-entities-adapter';
import { DaffSearchEntityState } from './search-entities-state.interface';

/**
 * Initial state for search entity state.
 */
export const daffSearchEntitiesInitialState: DaffSearchEntityState<any> = daffGetSearchAdapter().getInitialState();
