import { DaffCart } from '@daffodil/cart';
import { DaffMagentoCartPaymentTransformer } from './cart-payment.service';
import { DaffMagentoCartShippingInformationTransformer } from './cart-shipping-information.service';
import { DaffMagentoShippingAddressTransformer } from './shipping-address.service';
import { DaffMagentoBillingAddressTransformer } from './billing-address.service';
import { MagentoCart } from '../../models/responses/cart';
import { DaffMagentoCartShippingRateTransformer } from './cart-shipping-rate.service';
/**
 * Transforms magento carts into an object usable by daffodil.
 */
export declare class DaffMagentoCartTransformer {
    shippingAddressTransformer: DaffMagentoShippingAddressTransformer;
    billingAddressTransformer: DaffMagentoBillingAddressTransformer;
    paymentTransformer: DaffMagentoCartPaymentTransformer;
    shippingInformationTransformer: DaffMagentoCartShippingInformationTransformer;
    shippingRateTransformer: DaffMagentoCartShippingRateTransformer;
    constructor(shippingAddressTransformer: DaffMagentoShippingAddressTransformer, billingAddressTransformer: DaffMagentoBillingAddressTransformer, paymentTransformer: DaffMagentoCartPaymentTransformer, shippingInformationTransformer: DaffMagentoCartShippingInformationTransformer, shippingRateTransformer: DaffMagentoCartShippingRateTransformer);
    private transformShippingAddress;
    private transformBillingAddress;
    private transformCartItems;
    private transformTotals;
    private transformCoupons;
    private transformPayment;
    private transformShippingInformation;
    private transformShippingMethods;
    private transformPaymentMethods;
    /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCart.
     * @param cart the cart from a magento cart query.
     */
    transform(cart: MagentoCart): DaffCart;
}
