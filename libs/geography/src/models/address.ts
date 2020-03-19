/**
 * A basic model of an address
 */
export interface DaffAddress {
	street: string;
	street2: string;
  city: string;
  region: string;
  region_id?: string | number;
  country?: string;
  country_id?: string | number;
  postcode: string;
}