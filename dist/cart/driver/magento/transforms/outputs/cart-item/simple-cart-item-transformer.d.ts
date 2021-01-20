import { DaffCartItem } from '@daffodil/cart';
import { MagentoCartItem } from '../../../models/public_api';
/**
 * Transforms the magento MagentoCartItem from the magento cart query into a DaffCartItem.
 * @param response the response from a magento cart query.
 */
export declare function transformMagentoSimpleCartItem(cartItem: MagentoCartItem): DaffCartItem;
