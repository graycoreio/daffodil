import { Observable } from 'rxjs';

import { DaffOperationStateFacadeInterface } from '@daffodil/core/state';
import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';

import { DaffCustomerStoreCreditReducerState } from '../../reducers/public_api';
/**
 * Exposes the customer store credit state selectors.
 */
export interface DaffCustomerStoreCreditPageFacadeInterface<T extends DaffCustomerStoreCredit = DaffCustomerStoreCredit> extends DaffOperationStateFacadeInterface<DaffCustomerStoreCreditReducerState> {
  /**
   * The customer's current store credit.
   */
  storeCredit$: Observable<T>;
}
