import { DaffCartItem } from '../models/public_api';

/**
 * Finds the IDs of any affected cart items between two carts.
 */
export function daffCartGetAffectedItems<T extends DaffCartItem = DaffCartItem>(oldItems: Array<T>, newItems: Array<T>): Array<T['id']> {
  return newItems.reduce((acc, newItem) => {
    const oldItem = oldItems.find(({ id }) => id === newItem.id);
    if (!oldItem || oldItem.qty !== newItem.qty) {
      acc.push(newItem.id);
    }
    return acc;
  }, <Array<T['id']>>[]);
}
