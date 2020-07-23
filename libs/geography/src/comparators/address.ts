import { DaffAddress } from '../models/address';

/**
 * Compares two addresses and returns true if all of their fields are equal.
 *
 * @param address0 An address.
 * @param address1 An address.
 */
export function daffCompareAddresses(address0: DaffAddress, address1: DaffAddress) {
  return address0 && address1 &&
    address0.street === address1.street &&
    address0.street2 === address1.street2 &&
    address0.city === address1.city &&
    address0.region === address1.region &&
    address0.country === address1.country &&
    address0.country_id === address1.country_id &&
    address0.postcode === address1.postcode
}
