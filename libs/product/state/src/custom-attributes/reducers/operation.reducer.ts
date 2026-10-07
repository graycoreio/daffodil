import {
  DaffOperationState,
  daffCompleteOperation,
  daffOperationFailed,
  daffOperationInitialState,
  daffStartResolution,
} from '@daffodil/core/state';

import {
  DaffProductCustomAttributesActions,
  DaffProductCustomAttributesActionTypes,
  DaffProductCustomAttributesSearchFailure,
} from '../actions';

/**
 * The reducer for the product custom attributes operation state, see {@link DaffOperationState}.
 */
export function daffProductCustomAttributesOperationReducer(
  state = daffOperationInitialState,
  action: DaffProductCustomAttributesActions,
): DaffOperationState {
  switch (action.type) {
    case DaffProductCustomAttributesActionTypes.Search:
      return daffStartResolution(state);

    case DaffProductCustomAttributesActionTypes.SearchSuccess:
      return daffCompleteOperation(state);

    case DaffProductCustomAttributesActionTypes.SearchFailure:
      return daffOperationFailed([(<DaffProductCustomAttributesSearchFailure>action).payload], state);

    default:
      return state;
  }
}
