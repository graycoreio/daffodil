import { DaffOperationState } from './state';
import { DaffState } from '../states/public_api';

/**
 * Puts the state in a "resolving" state that correspondes to loading platform data in a GET fashion.
 * Sets loading to `DaffState.Resolving`
 */
export function daffStartResolution <T extends DaffOperationState = DaffOperationState>(state: T): T {
  return {
    ...state,
    daffState: DaffState.Resolving,
  };
};

/**
 * Puts the state in a "mutating" state that correspondes to loading platform data in a POST or PUT fashion.
 */
export function daffStartMutation <T extends DaffOperationState = DaffOperationState>(state: T): T {
  return {
    ...state,
    daffState: DaffState.Updating,
  };
};

/**
 * Indicates a successfully completed operation.
 * Sets loading to stable and resets errors.
 */
export function daffCompleteOperation <T extends DaffOperationState = DaffOperationState>(state: T): T {
  return {
    ...state,
    daffState: DaffState.Stable,
    daffErrors: [],
  };
};

/**
 * Indicates a failed operation.
 * Sets loading to stable and stores errors.
 */
export function daffOperationFailed <T extends DaffOperationState = DaffOperationState>(errors: T['daffErrors'], state: T): T {
  return {
    ...state,
    daffState: DaffState.Error,
    daffErrors: errors,
  };
};

/**
 * Resets errors.
 */
export function daffClearErrors <T extends DaffOperationState = DaffOperationState>(state: T): T {
  return {
    ...state,
    daffErrors: [],
  };
};
