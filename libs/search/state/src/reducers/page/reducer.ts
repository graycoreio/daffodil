import { DaffSearchResult } from '@daffodil/search';

import {
  DaffSearchActions,
  DaffSearchActionTypes,
} from '../../actions/search.actions';
import {
  daffSearchInitialState,
  DaffSearchReducerState,
  DaffSearchStateReducerAdapter,
} from '../search/public_api';

/**
 * The reducer for the search page state, see {@link DaffSearchReducerState}.
 */
export function daffSearchPageReducer<T extends DaffSearchResult = DaffSearchResult>(
  state = daffSearchInitialState,
  action: DaffSearchActions<T>,
): DaffSearchReducerState {
  const adapter = new DaffSearchStateReducerAdapter(state);
  switch (action.type) {
    case DaffSearchActionTypes.SearchLoadAction:
      return adapter.search(action.query);

    case DaffSearchActionTypes.SearchLoadSuccessAction:
      return adapter.storeResults(action.payload.collection);

    case DaffSearchActionTypes.SearchLoadFailureAction:
      return adapter.storeError(action.payload);

    default:
      return state;
  }
}
