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
  /**
   * Use DaffAddress#region instead.
   *
   * @deprecated Deprecated in version 0.78.0. Will be removed in version 0.81.0.
   */
  region_id?: ID;
  country?: ID;
  country_id?: ID;
  postcode: string;
}
