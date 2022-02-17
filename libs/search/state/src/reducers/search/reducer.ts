import { DaffSearchResult } from '@daffodil/search';

import {
  DaffSearchActions,
  DaffSearchActionTypes,
} from '../../actions/search.actions';
import { daffSearchInitialState } from './initial-state';
import { DaffSearchReducerState } from './reducer.interface';

/**
 * The reducer for the main part of search state, see {@link DaffSearchReducerState}.
 */
export function daffSearchReducer<T extends DaffSearchResult = DaffSearchResult>(
  state = daffSearchInitialState,
  action: DaffSearchActions<T>,
): DaffSearchReducerState {
  switch (action.type) {
    case DaffSearchActionTypes.SearchLoadAction:
      return {
        ...state,
        loading: true,
      };

    case DaffSearchActionTypes.SearchLoadSuccessAction:
      const results = {};
      for (const k in action.payload) {
        if (Object.prototype.hasOwnProperty.call(action.payload, k)) {
          results[k] = action.payload[k].map(({ id }) => id);
        }
      };
      return {
        ...state,
        loading: false,
        errors: [],
        results,
      };

    case DaffSearchActionTypes.SearchLoadFailureAction:
      return {
        ...state,
        errors: [
          ...state.errors,
          action.payload,
        ],
        loading: false,
      };

    default:
      return state;
  }
}
