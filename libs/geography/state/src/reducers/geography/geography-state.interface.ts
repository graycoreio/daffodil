import { DaffStateError } from '@daffodil/core/state';

export interface DaffGeographyReducerState {
  loading: boolean;
  errors: DaffStateError[];
}
