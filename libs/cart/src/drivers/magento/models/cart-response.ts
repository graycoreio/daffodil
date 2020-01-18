import { CartItemResponse } from './cart-item-response'

/**
 * An object for defining what the cart service requests and retrieves from a magento backend.
 */
export interface CartResponse {
  id: number,
  created_at: string,
  updated_at: string,
  items: CartItemResponse[],
  customer: any,
  currency: any,
  billing_address: any,
  extension_attributes: any

  // converted_at: string,
  // is_active: boolean,
  // is_virtual: boolean,
  // items_count: number,
  // items_qty: number,
  // reserved_order_id: string,
  // orig_order_id: number,
  // customer_is_guest: boolean,
  // customer_note: string,
  // customer_note_notify: boolean,
  // customer_tax_class_id: number,
  // store_id: number,
}
