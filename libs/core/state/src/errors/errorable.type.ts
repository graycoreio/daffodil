import { DaffStateError } from './state-error.interface';

export interface DaffErrorable {
  /**
   * A list of errors applicable only to this entity.
   */
  daffErrors: DaffStateError[];
}
