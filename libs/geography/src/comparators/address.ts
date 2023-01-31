import { shallowCompare } from '@daffodil/core';

import { DaffAddress } from '../models/address';

/**
 * Compares two addresses and returns true if all of their fields are equal.
 *
 * @param address0 An address.
 * @param address1 An address.
 */
export function daffCompareAddresses(address0: DaffAddress, address1: DaffAddress): boolean {
  return shallowCompare(
    address0,
    address1,
    [
      'street',
      'street2',
      'city',
      'region',
      'country',
      'country_id',
      'postcode',
    ],
  );
}
