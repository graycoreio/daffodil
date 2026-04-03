import { ActionReducerMap } from '@ngrx/store';

import { daffIdentityReducer } from '@daffodil/core/state';
import { DaffSearchReducersState } from '@daffodil/search/state';

import { daffSearchDocsCollectionSearchReducer } from './search.reducer';

export const daffSearchDocsCollectionSearchReducers: ActionReducerMap<DaffSearchReducersState> = {
  search: daffSearchDocsCollectionSearchReducer,
  incremental: daffIdentityReducer,
};
