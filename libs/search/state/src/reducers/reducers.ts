import { ActionReducerMap } from '@ngrx/store';

import { daffSearchIncrementalReducer } from './incremental/public_api';
import { daffSearchPageReducer } from './page/public_api';
import { DaffSearchReducersState } from './reducers.interface';

/**
 * The reducers for the entire search feature state.
 */
export const daffSearchReducers: ActionReducerMap<DaffSearchReducersState> = {
  search: daffSearchPageReducer,
  incremental: daffSearchIncrementalReducer,
};
