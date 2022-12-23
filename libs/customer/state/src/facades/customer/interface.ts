import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffStoreFacade,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffCustomer } from '@daffodil/customer';

/**
 * Exposes the customer state selectors.
 */
export interface DaffCustomerPageFacadeInterface<T extends DaffCustomer = DaffCustomer> extends DaffStoreFacade<Action> {
  /**
   * Whether there is a pending customer operation.
   */
  customer$: Observable<T>;
  /**
   * Whether there is a pending customer operation.
   */
  loading$: Observable<boolean>;
  /**
   * A list of customer errors, if any.
   */
  errors$: Observable<DaffStateError[]>;
}
