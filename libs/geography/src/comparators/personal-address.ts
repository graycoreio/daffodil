import { DaffPersonalAddress } from '../models/personal-address';
import { daffCompareAddresses } from './address';

/**
 * Compares two personal addresses and returns true if all of their fields are equal.
 *
 * @param address0 A personal address.
 * @param address1 A personal address.
 */
export function daffComparePersonalAddresses(address0: DaffPersonalAddress, address1: DaffPersonalAddress) {
  return address0 && address1 &&
    address0.prefix === address1.prefix &&
    address0.suffix === address1.suffix &&
    address0.firstname === address1.firstname &&
    address0.middlename === address1.middlename &&
    address0.lastname === address1.lastname &&
    address0.telephone === address1.telephone &&
    address0.email === address1.email &&
    daffCompareAddresses(address0, address1)
}
