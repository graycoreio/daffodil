import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '../store/facade';
import { DaffOperationState } from './state';

/**
 * A facade for an operation state.
 */
export interface DaffOperationStateFacadeInterface<
  TState extends DaffOperationState = DaffOperationState
> extends DaffStoreFacade<Action> {
  /**
   * The loading state enum.
   */
  loadingState$: Observable<TState['daffState']>;
  /**
   * Whether the operation state is in any of the loading states.
   */
  loading$: Observable<boolean>;
  /**
   * Whether the operation state is resolving.
   */
  resolving$: Observable<boolean>;
  /**
   * Whether the operation state is mutating.
   */
  mutating$: Observable<boolean>;
  /**
   * The errors in the operation state.
   */
  errors$: Observable<TState['daffErrors']>;
  /**
   * Whether the operation state has any errors.
   * If so, it should be considered to be in an "error" state.
   */
  hasErrors$: Observable<boolean>;
}
