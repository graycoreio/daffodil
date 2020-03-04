import { DaffCartItem } from './cart-item';
import { DaffCartAddress } from './cart-address';
import { DaffCartPaymentMethod } from './cart-payment';
import { DaffCartShippingInformation } from './cart-shipping-info';
import { DaffCartCoupon } from './cart-coupon';
import { DaffCartTotal } from './cart-total';
import { DaffCartShippingRate } from './cart-shipping-rate';

export interface DaffCart {
  id: number | string;
  subtotal: number;
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
}
