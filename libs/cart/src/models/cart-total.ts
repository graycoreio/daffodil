export enum DaffCartTotalTypeEnum {
	grandTotal = 'grand_total',
	subtotalExcludingTax = 'subtotal_excluding_tax',
	subtotalIncludingTax = 'subtotal_including_tax',
	subtotalWithDiscountExcludingTax = 'subtotal_with_discount_excluding_tax',
	subtotalWithDiscountIncludingTax = 'subtotal_with_discount_including_tax',
	discount = 'discount',
	tax = 'tax'
}

export interface DaffCartTotal {
  value: number;
  label: string;
  name: DaffCartTotalTypeEnum;
}