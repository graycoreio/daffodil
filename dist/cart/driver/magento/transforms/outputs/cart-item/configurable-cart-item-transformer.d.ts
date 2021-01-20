import { DaffConfigurableCartItem } from '@daffodil/cart';
import { MagentoConfigurableCartItem } from '../../../models/responses/cart-item';
/**
 * Transforms a MagentoConfigurableCartItem into a DaffCartItem.
 * @param response the response from a magento cart query.
 */
export declare function transformMagentoConfigurableCartItem(configurableCartItem: MagentoConfigurableCartItem): DaffConfigurableCartItem;
