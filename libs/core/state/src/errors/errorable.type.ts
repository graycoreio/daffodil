import { DaffStateError } from './state-error.interface';

export interface DaffErrorable {
  errors: DaffStateError[];
}
