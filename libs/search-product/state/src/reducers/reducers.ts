import { ActionReducerMap } from '@ngrx/store';

import { daffSearchProductCollectionReducer } from './collection/public_api';
import { DaffSearchProductReducersState } from './reducers.interface';

/**
 * The reducers for the entire search feature state.
 */
export const daffSearchProductReducers: ActionReducerMap<DaffSearchProductReducersState> = {
  productCollection: daffSearchProductCollectionReducer,
};
