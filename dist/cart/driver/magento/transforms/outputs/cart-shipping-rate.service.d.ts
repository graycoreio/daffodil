import { DaffCartShippingRate } from '@daffodil/cart';
import { MagentoCartShippingMethod } from '../../models/responses/cart-shipping-method';
/**
 * Transforms magento cart shipping methods into an object usable by daffodil.
 */
export declare class DaffMagentoCartShippingRateTransformer {
    /**
     * Transforms the magento shipping method from the magento cart query into a DaffCartShippingRate.
     * @param shippingMethod the shippingMethod from a magento cart query.
     */
    transform(shippingMethod: MagentoCartShippingMethod): DaffCartShippingRate;
}
