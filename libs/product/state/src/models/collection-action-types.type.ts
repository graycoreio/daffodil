import { DaffProductCollectionActionKinds } from './collection-actions.interface';

/**
 * A mapping from collection actions to action types.
 */
export type DaffProductCollectionActionTypes = Record<keyof DaffProductCollectionActionKinds, string[]>;
