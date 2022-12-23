import { DaffState } from '../states/public_api';
import { DaffOperationState } from './state';

/**
 * Puts the state in a "resolving" state that correspondes to loading platform data in a GET fashion.
 * Sets loading to `DaffState.Resolving`
 */
export const startResolution = <T extends DaffOperationState = DaffOperationState>(state: T): T => ({
  ...state,
  loading: DaffState.Resolving,
});

/**
 * Puts the state in a "mutating" state that correspondes to loading platform data in a POST or PUT fashion.
 */
export const startMutation = <T extends DaffOperationState = DaffOperationState>(state: T): T => ({
  ...state,
  loading: DaffState.Mutating,
});

/**
 * Indicates a successfully completed operation.
 * Sets loading to stable and resets errors.
 */
export const completeOperation = <T extends DaffOperationState = DaffOperationState>(state: T): T => ({
  ...state,
  loading: DaffState.Stable,
  errors: [],
});

/**
 * Indicates a failed operation.
 * Sets loading to stable and stores errors.
 */
export const operationFailed = <T extends DaffOperationState = DaffOperationState>(errors: T['errors'], state: T): T => ({
  ...state,
  loading: DaffState.Stable,
  errors,
});
