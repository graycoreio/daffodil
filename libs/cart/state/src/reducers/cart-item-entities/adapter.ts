import { createEntityAdapter } from '@ngrx/entity';

import { DaffCartItem } from '@daffodil/cart';
import {
  DaffOperationEntity,
  DaffOperationEntityStateAdapter,
  daffCreateOperationEntityStateAdapter,
} from '@daffodil/core/state';

/**
 * Cart Item Entities Adapter for changing/overwriting entity state.
 */
export const daffCartItemEntitiesAdapter = (() => {
  let cache;
  return <T extends DaffCartItem = DaffCartItem>(): DaffOperationEntityStateAdapter<T> => cache = cache ?? daffCreateOperationEntityStateAdapter(createEntityAdapter<DaffOperationEntity<T>>({ selectId: item => item.id }));
})();
