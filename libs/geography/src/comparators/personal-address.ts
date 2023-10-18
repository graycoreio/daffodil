import { shallowCompare } from '@daffodil/core';

import { daffCompareAddresses } from './address';
import { DaffPersonalAddress } from '../models/personal-address';

/**
 * Compares two personal addresses and returns true if all of their fields are equal.
 *
 * @param address0 A personal address.
 * @param address1 A personal address.
 */
export function daffComparePersonalAddresses(address0: DaffPersonalAddress, address1: DaffPersonalAddress): boolean {
  return shallowCompare(
    address0,
    address1,
    [
      'prefix',
      'suffix',
      'firstname',
      'middlename',
      'lastname',
      'telephone',
      'email',
    ],
  ) && daffCompareAddresses(address0, address1);
}
