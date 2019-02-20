import { OrderItem } from './order-item';
import { OrderAddress } from './order-address';
import { OrderPayment } from './order-payment';

export interface Order {
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
  items?: OrderItem[];
  addresses?: OrderAddress[];
  payment?: OrderPayment | null;
}
