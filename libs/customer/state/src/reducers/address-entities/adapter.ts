import { createEntityAdapter } from '@ngrx/entity';

import {
  DaffOperationEntity,
  daffCreateOperationEntityStateAdapter,
  DaffOperationEntityStateAdapter,
} from '@daffodil/core/state';
import { DaffCustomerAddress } from '@daffodil/customer';

/**
 * Customer Address Entities Adapter for changing/overwriting entity state.
 */
export const daffCustomerAddressEntitiesAdapter = (() => {
  let cache;
  return <T extends DaffCustomerAddress = DaffCustomerAddress>(): DaffOperationEntityStateAdapter<T> =>
    cache = cache || daffCreateOperationEntityStateAdapter(createEntityAdapter<DaffOperationEntity<T>>({ selectId: item => item.id }));
})();
