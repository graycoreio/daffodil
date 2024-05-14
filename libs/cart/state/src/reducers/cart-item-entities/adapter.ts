import { createEntityAdapter } from '@ngrx/entity';

import { DaffCartItem } from '@daffodil/cart';
import {
  DaffOperationEntity,
  DaffOperationEntityState,
  DaffOperationEntityStateAdapter,
} from '@daffodil/core/state';

import { daffCartItemsEntityTransform } from '../../helpers/public_api';

export class DaffCartItemEntityStateAdapter<T extends DaffCartItem = DaffCartItem> extends DaffOperationEntityStateAdapter<T> {
  list<S extends DaffOperationEntityState<T> = DaffOperationEntityState<T>>(entities: T[], state: S): S {
    return this.adapter.setAll(
      daffCartItemsEntityTransform<T>(state.entities, entities),
      state,
    );
  }
}

/**
 * Cart Item Entities Adapter for changing/overwriting entity state.
 */
export const daffCartItemEntitiesAdapter = (() => {
  let cache;
  return <T extends DaffCartItem = DaffCartItem>(): DaffOperationEntityStateAdapter<T> => cache = cache ?? new DaffCartItemEntityStateAdapter(createEntityAdapter<DaffOperationEntity<T>>({ selectId: item => item.id }));
})();
