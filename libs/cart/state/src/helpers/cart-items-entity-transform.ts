import { Dictionary } from '@ngrx/entity';

import { DaffCartItem } from '@daffodil/cart';
import {
  DaffOperationEntity,
  DaffState,
} from '@daffodil/core/state';

/**
 * Transforms a list of cart items to item entities.
 * Uses the list of previous cart items to infer the correct state of each entity.
 *
 * @param oldCartItems the dictionary of existing cart items.
 * @param newCartItems the list of incoming cart items
 * @returns a list of cart item operation entities
 */
export function daffCartItemsEntityTransform<T extends DaffCartItem = DaffCartItem>(oldCartItems: Dictionary<T>, newCartItems: Array<T>): Array<DaffOperationEntity<T>> {
  return newCartItems.map(newItem => {
    const oldItem = oldCartItems[newItem.id];
    return {
      ...newItem,
      daffState: !oldItem
        ? DaffState.Added
        : oldItem?.qty !== newItem.qty
          ? DaffState.Updated
          : DaffState.Stable,
      daffErrors: [],
      daffTemp: false,
    };
  });
}
