import { DaffCompositeCartItem } from '@daffodil/cart';
import { MagentoBundleCartItem } from '../../../models/responses/cart-item';
/**
 * Transforms a MagentoBundleCartItem into a DaffCartItem.
 * @param response the response from a magento cart query.
 */
export declare function transformMagentoBundleCartItem(bundleCartItem: MagentoBundleCartItem): DaffCompositeCartItem;
