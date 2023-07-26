import { Observable } from 'rxjs';

import { DaffOperationStateFacadeInterface } from '@daffodil/core/state';

import { DaffCustomerPaymentEntity } from '../../models/public_api';
import { DaffCustomerPaymentReducerState } from '../../reducers/public_api';
/**
 * Exposes the customer state selectors.
 */
export interface DaffCustomerPaymentPageFacadeInterface<T extends DaffCustomerPaymentEntity = DaffCustomerPaymentEntity> extends DaffOperationStateFacadeInterface<DaffCustomerPaymentReducerState> {
  /**
   * A list of all customer payment entities.
   */
  payments$: Observable<T[]>;

  /**
   * Get a payment entity by ID.
   */
  getPayment(id: T['id']): Observable<T>;
}
