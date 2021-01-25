import { ID } from '@daffodil/core';

/**
 * A basic model of an address
 */
export interface DaffAddress {
	street: string;
	street2?: string;
  city: string;
  region: ID;
  /**
   * Use DaffAddress#region instead.
   *
   * @deprecated
   */
  region_id?: ID;
  country?: ID;
  country_id?: ID;
  postcode: string;
}
