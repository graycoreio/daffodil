import { CartItem } from './cart-item';
import { CartAddress } from './cart-address';
import { CartPayment } from './cart-payment';

export interface Cart {
  id: number;
  created_at: Date;
  updated_at: Date;
  store_to_base_rate: number;
  grand_total: number;
  checkout_method: string;
  customer_id: number;
  coupon_code: string;
  subtotal: number;
  subtotal_with_discount: number;
  items: CartItem[];
  addresses: CartAddress[];
  payment: CartPayment;
}
