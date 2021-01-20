import { DaffCartItem } from '@daffodil/cart';
import { MagentoCartItem } from '../../../models/responses/cart-item';
/**
 * Transforms the MagentoCartItem into a DaffCartItem.
 * @param cartItem a MagentoCartItem
 */
export declare function transformMagentoCartItem(cartItem: MagentoCartItem): DaffCartItem;
