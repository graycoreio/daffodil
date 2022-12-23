import { Observable } from 'rxjs';

import { DaffOperationStateFacadeInterface } from '@daffodil/core/state';
import { DaffCustomer } from '@daffodil/customer';

import { DaffCustomerReducerState } from '../../public_api';

/**
 * Exposes the customer state selectors.
 */
export interface DaffCustomerPageFacadeInterface<T extends DaffCustomer = DaffCustomer> extends DaffOperationStateFacadeInterface<DaffCustomerReducerState<T>> {
  /**
   * Whether there is a pending customer operation.
   */
  customer$: Observable<T>;
}
