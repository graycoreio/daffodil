import { DaffOperationState } from '@daffodil/core/state';

export interface DaffAuthReducerState extends DaffOperationState {
  loggedIn: boolean;
}
