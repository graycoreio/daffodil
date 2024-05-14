import {
  DaffCart,
  DaffCartItem,
  DaffCompositeCartItem,
  DaffConfigurableCartItem,
} from '@daffodil/cart';
import { DaffOperationEntity } from '@daffodil/core/state';

/**
 * A cart with stateful cart items.
 */
export interface DaffStatefulCart extends DaffCart {
  items: Array<DaffOperationEntity<DaffCartItem | DaffCompositeCartItem | DaffConfigurableCartItem>>;
}

