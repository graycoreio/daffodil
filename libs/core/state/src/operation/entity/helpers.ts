import { DaffState } from '../../states/public_api';

/**
 * Returns whether the state is one that represents an operation in progress.
 */
export function daffStateIsLoading(daffState: DaffState): boolean {
  return daffState === DaffState.Adding
    || daffState === DaffState.Mutating
    || daffState === DaffState.Resolving
    || daffState === DaffState.Deleting;
}

/**
 * Generate a fake ID for use with placeholder entities.
 *
 * @param key An optional key that can augment the randomly generated ID.
 * @returns A string cont
 */
export function daffOperationEntityCreateFakeId(key: string = ''): string {
  return `ε-${Date.now()}-${key}`;
}
