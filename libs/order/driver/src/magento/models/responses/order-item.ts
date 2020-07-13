export interface MagentoGraycoreOrderItem {
  qty_ordered: number;
  qty_canceled: number;
  qty_fulfilled: number;
  image: string;
  order_id: string;
  created_at: string;
  updated_at: string;
  product_id: number;
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
