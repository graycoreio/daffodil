import { DaffCartAddress, MagentoCartAddress } from '@daffodil/cart';

import { MagentoCartAddressFactory } from '../../../factories/magento/cart-address.factory';
import { DaffCartAddressFactory } from '../../../factories/cart-address.factory';

/**
 * Creates mocked DaffCartAddress and MagentoCartAddress with matching fields.
 */
export function cartAddressMocks(): {
  daff: DaffCartAddress;
  magento: MagentoCartAddress;
} {
  const daff: DaffCartAddress = (new DaffCartAddressFactory()).create();
  const magento: MagentoCartAddress = (new MagentoCartAddressFactory()).create();

  magento.region.code = String(daff.region_id);
  magento.region.label = daff.region;
  magento.country.code = String(daff.country_id);
  magento.country.label = daff.country;
  magento.street = [daff.street];
  magento.telephone = daff.telephone;
  magento.postcode = daff.postcode;
  magento.city = daff.city;
  magento.firstname = daff.firstname;
  magento.lastname = daff.lastname;

  return {daff, magento}
}
