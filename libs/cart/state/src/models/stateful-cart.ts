import { DaffCart } from '@daffodil/cart';

import { DaffStatefulCartItem } from './stateful-cart-item';

/**
 * A cart with stateful cart items.
 */
export interface DaffStatefulCart extends DaffCart {
  items: DaffStatefulCartItem[];
}

