import { DaffOrderItem } from './order-item';
import { DaffOrderAddress } from './order-address';
import { DaffOrderPayment } from './order-payment';

export interface DaffOrder {
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
  items?: DaffOrderItem[];
  addresses?: DaffOrderAddress[];
  payment?: DaffOrderPayment;
}
