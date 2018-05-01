export interface MagentoCartAddress {
  address_id: number;
  quote_id: number;
  created_at: Date;
  updated_at: Date;
  customer_id: number;
  save_in_address_book: boolean;
  customer_address_id: number;
  address_type: string; //todo: is actually an enum
  email: string;
  prefix: string;
  firstname: string;
  middlename: string;
  lastname: string;
  suffix: string;
  company: string;
  street: string;
  city: string;
  region: string;
  region_id: number;
  postcode: string;
  country_id: string; //todo: ISO code
  telephone: string;
  fax: string;
  same_as_billing: boolean;
  free_shipping: boolean;
  collect_shipping_rates: boolean;
  shipping_method: string;
  shipping_description: string;
}