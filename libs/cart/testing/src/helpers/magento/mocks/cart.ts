import { DaffCart, MagentoCart, MagentoShippingAddress } from '@daffodil/cart';

import { MagentoCartFactory } from '../../../factories/magento/cart.factory';
import { DaffCartFactory } from '../../../factories/cart.factory';
import { cartItemMocks } from './cart-item';
import { cartAddressMocks } from './cart-address';
import { shippingAddressMocks } from './shipping-address';
import { cartCouponMocks } from './cart-coupon';
import { cartPaymentMethodMocks } from './cart-payment-method';
import { cartShippingMethodMocks } from './cart-shipping-method';

/**
 * Creates mocked DaffCart and MagentoCart with matching fields.
 */
export function cartMocks(): {
  daff: DaffCart;
  magento: MagentoCart;
} {
  const daff: DaffCart = (new DaffCartFactory()).create();
  const magento: MagentoCart = (new MagentoCartFactory()).create();

  const {
    daff: daffCartItem,
    magento: magentoCartItem
  } = cartItemMocks();
  const {
    daff: daffCartBillingAddress,
    magento: magentoCartBillingAddress
  } = cartAddressMocks();
  const {
    daff: daffCartShippingAddress,
    magento: magentoCartShippingAddress
  } = shippingAddressMocks();
  const {
    daff: daffCartCoupon,
    magento: magentoCartCoupon
  } = cartCouponMocks();
  const {
    daff: daffCartPaymentMethod,
    magento: magentoCartPaymentMethod
  } = cartPaymentMethodMocks();
  const {
    daff: daffCartShippingMethod,
    magento: magentoCartShippingMethod
  } = cartShippingMethodMocks();

  magento.id = Number(daff.id);
  magento.prices.subtotal_excluding_tax.value = daff.subtotal;
  magento.prices.grand_total.value = daff.grand_total;

  daff.items = [daffCartItem];
  magento.items = [magentoCartItem];

  daff.coupons = [daffCartCoupon];
  magento.applied_coupons = [magentoCartCoupon];

  daff.billing_address = daffCartBillingAddress;
  magento.billing_address = magentoCartBillingAddress;

  daff.shipping_address = daffCartShippingAddress;
  magento.shipping_addresses = [magentoCartShippingAddress];

  daff.payment = daffCartPaymentMethod;
  magento.available_payment_methods = [magentoCartPaymentMethod];
  magento.selected_payment_method = magentoCartPaymentMethod;

  daff.shipping_information = daffCartShippingMethod;
  magentoCartShippingAddress.available_shipping_methods = [magentoCartShippingMethod];
  magentoCartShippingAddress.selected_shipping_method = magentoCartShippingMethod;

  return {daff, magento}
}
