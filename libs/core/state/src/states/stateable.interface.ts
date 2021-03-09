import { DaffState } from './state.enum';

/**
 * The interface an object must implement to consistently describe its current
 * state.
 */
export interface DaffStateable<T extends DaffState> {
  daffState: T;
}
