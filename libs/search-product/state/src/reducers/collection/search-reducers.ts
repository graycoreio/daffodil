import { ActionReducerMap } from '@ngrx/store';

import { daffIdentityReducer } from '@daffodil/core/state';
import { DaffSearchReducersState } from '@daffodil/search/state';

import { daffSearchProductCollectionSearchReducer } from './search.reducer';

export const daffSearchProductCollectionSearchReducers: ActionReducerMap<DaffSearchReducersState> = {
  search: daffSearchProductCollectionSearchReducer,
  incremental: daffIdentityReducer,
};
