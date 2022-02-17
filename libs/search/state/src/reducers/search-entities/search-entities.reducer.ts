import { DaffSearchResult } from '@daffodil/search';

import {
  DaffSearchActions,
  DaffSearchActionTypes,
} from '../../actions/search.actions';
import { daffGetSearchAdapter } from './search-entities-adapter';
import { daffSearchEntitiesInitialState } from './search-entities-initial-state';
import { DaffSearchEntityState } from './search-entities-state.interface';

/**
 * Reducer function that catches actions and changes/overwrites search entities state.
 */
export function daffSearchEntitiesReducer<T extends DaffSearchResult = DaffSearchResult>(
  state = daffSearchEntitiesInitialState,
  action: DaffSearchActions<T>,
): DaffSearchEntityState<T> {
  const adapter = daffGetSearchAdapter<T>();

  switch (action.type) {
    case DaffSearchActionTypes.SearchLoadSuccessAction:
      return adapter.upsertMany(Object.keys(action.payload).reduce<T[]>((acc, key) => acc.concat(action.payload[key]), []), state);

    default:
      return state;
  }
}
