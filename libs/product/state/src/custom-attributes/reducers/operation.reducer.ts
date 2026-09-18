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
  DaffProductCustomAttributesListFailure,
} from '../actions';

/**
 * The reducer for the product custom attributes operation state, see {@link DaffOperationState}.
 */
export function daffProductCustomAttributesOperationReducer(
  state = daffOperationInitialState,
  action: DaffProductCustomAttributesActions,
): DaffOperationState {
  switch (action.type) {
    case DaffProductCustomAttributesActionTypes.List:
      return daffStartResolution(state);

    case DaffProductCustomAttributesActionTypes.ListSuccess:
      return daffCompleteOperation(state);

    case DaffProductCustomAttributesActionTypes.ListFailure:
      return daffOperationFailed([(<DaffProductCustomAttributesListFailure>action).payload], state);

    default:
      return state;
  }
}
