import { CartItemTotalsResponse } from './cart-item-totals-response'

/**
 * An object for defining what the cart service requests and retrieves from a magento backend.
 */
export interface CartTotalsResponse {
  grand_total: number,
  coupon_code: string,
  items: CartItemTotalsResponse[],
  subtotal: number,
  subtotal_with_discount: number,

  // base_grand_total: number,
  // base_subtotal: number,
  // discount_amount: number,
  // base_discount_amount: number,
  // base_subtotal_with_discount: number,
  // shipping_amount: number,
  // base_shipping_amount: number,
  // shipping_discount_amount: number,
  // base_shipping_discount_amount: number,
  // tax_amount: number,
  // base_tax_amount: number,
  // weee_tax_applied_amount: number,
  // shipping_tax_amount: number,
  // base_shipping_tax_amount: number,
  // subtotal_incl_tax: number,
  // base_subtotal_incl_tax: number,
  // shipping_incl_tax: number,
  // base_shipping_incl_tax: number,
  // base_currency_code: string,
  // quote_currency_code: string,
  // items_qty: number,
  // total_segments: any[],
  // extension_attributes: any
}
