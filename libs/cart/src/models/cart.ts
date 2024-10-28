import { DaffIdentifiable } from '@daffodil/core';

import { DaffCartAddress } from './cart-address';
import { DaffCartCoupon } from './cart-coupon';
import { DaffCartItem } from './cart-item';
import { DaffCartPaymentMethod } from './cart-payment';
import { DaffCartShippingRate } from './cart-shipping-rate';
import { DaffCartTotal } from './cart-total';

/**
 * A cart.
 * Contains products in the form of cart items.
 * Contains payment and shipping info used for checkout.
 */
export interface DaffCart extends DaffIdentifiable {
  /**
   * @deprecated use totals instead Deprecated in version 0.78.0. Will be removed in version 0.81.0.
   */
  subtotal: number;
  /**
   * @deprecated use totals instead Deprecated in version 0.78.0. Will be removed in version 0.81.0.
   */
  grand_total: number;
  /**
   * A list of coupons applied to the cart.
   */
  coupons: DaffCartCoupon[];
  /**
   * A list of cart items.
   */
  items?: DaffCartItem[];
  /**
   * The billing address of the cart.
   */
  billing_address: DaffCartAddress | null;
  /**
   * The shipping address of the cart.
   */
  shipping_address: DaffCartAddress | null;
  /**
   * The selected payment method of the cart.
   */
  payment?: DaffCartPaymentMethod;
  /**
   * A list of totals for the cart.
   */
  totals: Record<DaffCartTotal['name'], DaffCartTotal>;
  /**
   * The selected shipping method.
   */
  shipping_information: DaffCartShippingRate | null;
  /**
   * A list of available shipping methods.
   */
  available_shipping_methods: DaffCartShippingRate[];
  /**
   * A list of available payment methods.
   */
  available_payment_methods: DaffCartPaymentMethod[];
  /**
   * The field is set to the platform cart object returned by the most recent driver call.
   * No fields are guaranteed here. Use this with care.
   */
  extra_attributes?: any;
}
