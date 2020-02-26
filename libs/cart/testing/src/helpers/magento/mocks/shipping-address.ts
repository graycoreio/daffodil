import { DaffCartAddress, MagentoShippingAddress } from '@daffodil/cart';

import { DaffCartAddressFactory } from '../../../factories/cart-address.factory';
import { MagentoShippingAddressFactory } from '../../../factories/magento/shipping-address.factory';

/**
 * Creates mocked DaffCartAddress and MagentoShippingAddress with matching fields.
 */
export function shippingAddressMocks(): {
  daff: DaffCartAddress;
  magento: MagentoShippingAddress;
} {
  const daff: DaffCartAddress = (new DaffCartAddressFactory()).create();
  const magento: MagentoShippingAddress = (new MagentoShippingAddressFactory()).create();

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
  magento.selected_shipping_method = null;
  magento.available_shipping_methods = [];

  return {daff, magento}
}
