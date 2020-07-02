import { DaffProductImage } from '@daffodil/product';
import { DaffOrder } from './order';

export interface DaffOrderItem {
  item_id: number;
  qty_ordered: number;
  qty_canceled: number;
  qty_fulfilled: number;
  image: DaffProductImage;
  order_id: DaffOrder['id'];
  created_at: string;
  updated_at: string;
  product_id: number;
  parent_item_id: number;
  sku: string;
  name: string;
  weight: number;
  qty: number;
  price: number;
  discount_percent: number;
  discount_amount: number;
  tax_percent: number;
  tax_amount: number;
  row_total: number;
  row_total_with_discount: number;
  row_weight: number;
  tax_before_discount: number;
}
