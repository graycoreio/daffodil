import { CartShippingMethod } from './cart-shipping-method';

export interface CartAddress {
  id: number,
  region: string,
  region_id: number,
  region_code: string,
  country_id: string,
  street: string[],
  company: string,
  telephone: string,
  fax: string,
  postcode: string,
  city: string,
  firstname: string,
  lastname: string,
  middlename: string,
  prefix: string,
  suffix: string,
  vat_id: string,
  customer_id: number,
  email: string,
  same_as_billing: number,
  customer_address_id: number,
  save_in_address_book: number,
  extension_attributes: any,
  custom_attributes: any[],

  method: CartShippingMethod,
  type: string,
}
