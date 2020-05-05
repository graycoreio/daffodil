import { DaffOrderItem } from './order-item';
import { DaffOrderAddress } from './order-address';
import { DaffOrderPayment } from './order-payment';
import { DaffOrderCoupon } from './order-coupon';

export interface DaffOrder {
  id: number;
  created_at: string;
  updated_at: string;
  totals: {
    grand_total: number;
    subtotal: number;
    subtotal_with_discount: number;
  };
  customer_id: number;
  applied_codes: DaffOrderCoupon[];
  items?: DaffOrderItem[];
  addresses?: DaffOrderAddress[];
  payment?: DaffOrderPayment;
}
