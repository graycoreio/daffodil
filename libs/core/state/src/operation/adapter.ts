import { DaffState } from '../states/public_api';
import { DaffOperationState } from './state';

/**
 * An adapter for modifying {@link DaffOperationState}.
 */
export class DaffOperationStateAdapter<T extends DaffOperationState = DaffOperationState> {
  /**
   * Puts the state in a "resolving" state that correspondes to loading platform data in a GET fashion.
   * Sets loading to `DaffState.Resolving`
   */
  startResolution(state: T): T {
    return {
      ...state,
      loading: DaffState.Resolving,
    };
  }

  /**
   * Puts the state in a "mutating" state that correspondes to loading platform data in a POST or PUT fashion.
   */
  startMutation(state: T): T {
    return {
      ...state,
      loading: DaffState.Mutating,
    };
  }

  /**
   * Indicates a successfully completed operation.
   * Sets loading to stable and resets errors.
   */
  completeOperation(state: T): T {
    return {
      ...state,
      loading: DaffState.Stable,
      errors: [],
    };
  }

  /**
   * Indicates a failed operation.
   * Sets loading to stable and stores errors.
   */
  operationFailed(errors: T['errors'], state: T): T {
    return {
      ...state,
      loading: DaffState.Stable,
      errors,
    };
  }
}
