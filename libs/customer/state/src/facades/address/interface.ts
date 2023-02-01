import { Observable } from 'rxjs';

import { DaffOperationStateFacadeInterface } from '@daffodil/core/state';

import { DaffCustomerAddressEntity } from '../../models/public_api';
import { DaffCustomerAddressReducerState } from '../../reducers/public_api';
/**
 * Exposes the customer state selectors.
 */
export interface DaffCustomerAddressPageFacadeInterface<T extends DaffCustomerAddressEntity = DaffCustomerAddressEntity> extends DaffOperationStateFacadeInterface<DaffCustomerAddressReducerState> {
  /**
   * A list of all customer address entities.
   */
  addresses$: Observable<T[]>;

  getAddress(id: T['id']): Observable<T>;
}
