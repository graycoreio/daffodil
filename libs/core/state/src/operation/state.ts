import { DaffErrorable } from '../errors/public_api';
import {
  DaffState,
  DaffStateable,
} from '../states/public_api';

/**
 * A basic operation state.
 * Represents the current state of an operation and any associated errors.
 */
export interface DaffOperationState extends DaffErrorable, DaffStateable {}

export const daffOperationInitialState: DaffOperationState = {
  daffState: DaffState.Stable,
  daffErrors: [],
};
