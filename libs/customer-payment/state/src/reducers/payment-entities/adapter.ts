import { createEntityAdapter } from '@ngrx/entity';

import {
  DaffOperationEntity,
  daffCreateOperationEntityStateAdapter,
  DaffOperationEntityStateAdapter,
} from '@daffodil/core/state';
import { DaffCustomerPayment } from '@daffodil/customer-payment';

/**
 * Customer Payment Entities Adapter for changing/overwriting entity state.
 */
export const daffCustomerPaymentEntitiesAdapter = (() => {
  let cache;
  return <T extends DaffCustomerPayment = DaffCustomerPayment>(): DaffOperationEntityStateAdapter<T> =>
    cache = cache || daffCreateOperationEntityStateAdapter(createEntityAdapter<DaffOperationEntity<T>>());
})();
