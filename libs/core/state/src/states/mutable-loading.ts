import { DaffLoadingState } from './loading';
import { DaffState } from './state.enum';

/**
 * A description for an object that is both readable and writable.
 */
export type DaffMutableLoadingState = DaffLoadingState | DaffState.Updating;
