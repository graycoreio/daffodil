export enum DaffCartTotalTypeEnum {
	grandTotal = 'grand_total',
	subtotalExcludingTax = 'subtotal_excluding_tax',
	subtotalIncludingTax = 'subtotal_including_tax',
	subtotalWithDiscountExcludingTax = 'subtotal_with_discount_excluding_tax',
	subtotalWithDiscountIncludingTax = 'subtotal_with_discount_including_tax',
	discount = 'discount',
	tax = 'tax',
	shipping = 'shipping'
}

/**
 * Since some cart totals might not have a value defined at all times, like shipping, the values of these totals
 * can be null. Allowing their values to be null differentiates a non-existent value from a zero value. In the case of
 * shipping, this would mean the difference between a cart with no selected shipping method and a cart with a selected shipping
 * method that costs zero.
 */
export interface DaffCartTotal {
  value: number;
  label: string;
  name: DaffCartTotalTypeEnum;
}