import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffStoreFacade,
  DaffStateError,
} from '@daffodil/core/state';

/**
 * Exposes the payment state selectors.
 */
export interface DaffPaymentPageFacadeInterface extends DaffStoreFacade<Action> {
  /**
   * Whether there is a pending payment operation.
   */
  loading$: Observable<boolean>;
  /**
   * A list of payment errors, if any.
   */
  errors$: Observable<DaffStateError[]>;
}
