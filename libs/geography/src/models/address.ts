/**
 * A basic model of an address
 */
export interface DaffAddress {
	street: string;
	street2?: string;
  city: string;
  region: string | number;
  /**
   * Use DaffAddress#region instead.
   *
   * @deprecated
   */
  region_id?: string | number;
  country?: string;
  country_id?: string | number;
  postcode: string;
}
