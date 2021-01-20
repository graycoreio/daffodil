import { DaffCartPaymentMethod } from '@daffodil/cart';
import { MagentoCartPaymentMethod } from '../../models/responses/cart-payment-method';
/**
 * Transforms magento carts into an object usable by daffodil.
 */
export declare class DaffMagentoCartPaymentTransformer {
    /**
     * Transforms the magento CartPayment from the magento cart query into a DaffCartPaymentMethod.
     * @param response the response from a magento cart query.
     */
    transform(responsePayment: MagentoCartPaymentMethod): DaffCartPaymentMethod;
}
