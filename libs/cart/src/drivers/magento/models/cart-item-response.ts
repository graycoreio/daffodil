/**
 * An object for defining what the cart service requests and retrieves from a magento backend.
 */
export interface CartItemResponse {
  item_id: number,
  sku: string,
  qty: number,
  name: string,
  price: number,
  quote_id: string,
  extension_attributes: any

  // product_type: string,
  // product_option: any,
}
