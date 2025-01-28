import { ID } from '@daffodil/core';

import { DaffSubdivision } from './subdivision';

/**
 * A basic model of an address
 */
export interface DaffAddress {
  street: string;
  street2?: string;
  city: string;
  /**
   * The ID of the {@link DaffSubdivision}.
   */
  region: DaffSubdivision['id'];
  region_code?: DaffSubdivision['iso_3166_2'];
  country?: ID;
  country_id?: ID;
  postcode: string;
}
