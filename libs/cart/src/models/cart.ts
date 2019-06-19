import { DaffCartItem } from './cart-item';
import { DaffCartAddress } from './cart-address';
import { DaffCartPayment } from './cart-payment';

export interface DaffCart {
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
  items?: DaffCartItem[];
  addresses?: DaffCartAddress[];
  payment?: DaffCartPayment | null;
}
