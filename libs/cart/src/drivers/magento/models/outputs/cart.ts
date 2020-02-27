import { MagentoCartItem } from './cart-item'
import { MagentoCartPaymentMethod } from './cart-payment-method';
import { MagentoCartAddress } from './cart-address';
import { MagentoCartCoupon } from './cart-coupon';
import { MagentoMoney } from './money';
import { MagentoShippingAddress } from './shipping-address';

/**
 * An object for defining what the cart service requests and retrieves from a magento backend.
 */
export interface MagentoCart {
  id: number;
  billing_address: MagentoCartAddress;
  shipping_addresses: MagentoShippingAddress[];
  items: MagentoCartItem[];
  available_payment_methods: MagentoCartPaymentMethod[];
  selected_payment_method: MagentoCartPaymentMethod;
  applied_coupons: MagentoCartCoupon[];
  prices: {
    grand_total: MagentoMoney,
    subtotal_excluding_tax: MagentoMoney,
    subtotal_including_tax: MagentoMoney,
    subtotal_with_discount_excluding_tax: MagentoMoney,
  }
}
