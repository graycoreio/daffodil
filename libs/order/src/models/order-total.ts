export enum DaffOrderTotalTypeEnum {
  GrandTotal = 'grand_total',
  Subtotal = 'subtotal',
  Discount = 'discount',
  Tax = 'tax',
  Shipping = 'shipping'
}

export interface DaffOrderTotal {
  label: string;
  value: number;
  sort_order: number;
  type: DaffOrderTotalTypeEnum
}
