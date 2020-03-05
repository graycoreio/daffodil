import { DaffCartItemInput } from '../../../../models/cart-item-input';
import { DaffCartItem } from '../../../../models/cart-item';

export interface MagentoDaffCartItemInputWithSku extends DaffCartItemInput {
  sku: DaffCartItem['sku'];
}
