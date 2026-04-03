import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';



import { DaffSearchDocsResult } from '@daffodil/search-docs';

import {
  DaffioDocsSearchActions,
  DaffioDocsSearchActionTypes,
} from './actions';
import { DAFFIO_DOCS_SEARCH_STATE_FEATURE_KEY } from './feature-key.const';

export interface DaffioDocsSearchResultsReducerState {
  recent: Array<DaffSearchDocsResult['id']>;
}

export interface DaffioDocsSearchReducersState {
  results: DaffioDocsSearchResultsReducerState;
}

export interface DaffioDocsSearchStateFeatureSlice {
  [DAFFIO_DOCS_SEARCH_STATE_FEATURE_KEY]: DaffioDocsSearchReducersState;
}

export const daffioDocsSearchResultsReducerInitialState: DaffioDocsSearchResultsReducerState = {
  recent: [],
};

export const daffioDocsSearchResultsReducer: ActionReducer<DaffioDocsSearchResultsReducerState, DaffioDocsSearchActions> = (
  state: DaffioDocsSearchResultsReducerState = daffioDocsSearchResultsReducerInitialState,
  action: DaffioDocsSearchActions,
): DaffioDocsSearchResultsReducerState => {
  switch (action.type) {
    case DaffioDocsSearchActionTypes.STORE_RESULT:
      return {
        ...state,
        recent: [
          action.result,
          ...state.recent,
        ],
      };

    default:
      return state;
  }
};

export const daffioDocsSearchStoreResultReducers = combineReducers<DaffioDocsSearchReducersState>({
  results: daffioDocsSearchResultsReducer,
});
