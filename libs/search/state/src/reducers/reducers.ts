import { ActionReducerMap } from '@ngrx/store';

import { DaffSearchReducersState } from './reducers.interface';
import { daffSearchEntitiesReducer } from './search-entities/public_api';
import { daffSearchReducer } from './search/reducer';

/**
 * The reducers for the entire search feature state.
 */
export const daffSearchReducers: ActionReducerMap<DaffSearchReducersState> = {
  search: daffSearchReducer,
  searchResults: daffSearchEntitiesReducer,
};
