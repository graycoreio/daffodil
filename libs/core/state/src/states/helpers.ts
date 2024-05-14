import { DaffState } from './state.enum';

/**
 * Returns whether the state is one that represents an operation in progress.
 */
export function daffStateIsLoading(daffState: DaffState): boolean {
  return daffStateIsMutating(daffState) || daffState === DaffState.Resolving;
}

/**
 * Returns whether the state is one that represents a mutable operation in progress.
 */
export function daffStateIsMutating(daffState: DaffState): boolean {
  return daffState === DaffState.Adding
    || daffState === DaffState.Updating
    || daffState === DaffState.Deleting;
}
