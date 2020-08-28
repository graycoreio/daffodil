import { DaffCartItem } from './cart-item';
import { DaffCartAddress } from './cart-address';
import { DaffCartPaymentMethod } from './cart-payment';
import { DaffCartShippingInformation } from './cart-shipping-info';
import { DaffCartCoupon } from './cart-coupon';
import { DaffCartTotal } from './cart-total';
import { DaffCartShippingRate } from './cart-shipping-rate';

export interface DaffCart {
	id: number | string;
	/**
	 * @deprecated use totals instead
	 */
	subtotal: number;
	/**
	 * @deprecated use totals instead
	 */
  grand_total: number;
  coupons: DaffCartCoupon[];
  items?: DaffCartItem[];
  billing_address: DaffCartAddress | null;
  shipping_address: DaffCartAddress | null;
  payment?: DaffCartPaymentMethod;
  totals: DaffCartTotal[];
  shipping_information: DaffCartShippingInformation | null;
  available_shipping_methods: DaffCartShippingRate[];
  available_payment_methods: DaffCartPaymentMethod[];
  /**
   * The field is set to the platform cart object returned by the most recent driver call.
   * No fields are guaranteed here.
   */
  extra_attributes?: any;
}
