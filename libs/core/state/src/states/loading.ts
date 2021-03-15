import { DaffState } from './state.enum';

/**
 * A state description for an object that is read-only.
 */
export type DaffLoadingState = DaffState.Resolving | DaffState.Stable;
