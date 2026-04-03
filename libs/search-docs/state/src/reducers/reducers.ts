import { ActionReducerMap } from '@ngrx/store';

import { daffSearchDocsCollectionReducer } from './collection/public_api';
import { DaffSearchDocsReducersState } from './reducers.interface';

/**
 * The reducers for the entire search feature state.
 */
export const daffSearchDocsReducers: ActionReducerMap<DaffSearchDocsReducersState> = {
  docsCollection: daffSearchDocsCollectionReducer,
};
