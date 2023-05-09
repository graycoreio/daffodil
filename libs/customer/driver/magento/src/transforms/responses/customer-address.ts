import { DaffCustomerAddress } from '@daffodil/customer';

import { MagentoCustomerAddress } from '../../models/public_api';

export const magentoCustomerAddressTransform = (address: MagentoCustomerAddress): DaffCustomerAddress => ({
  id: String(address.id),
  street: address.street[0],
  street2: address.street[1],
  city: address.city,
  region: String(address.region.region_id),
  region_code: address.region.region_code,
  country: address.country_code,
  country_id: address.country_code,
  postcode: address.postcode,
  firstname: address.firstname,
  lastname: address.lastname,
  telephone: address.telephone,
  email: address.email,
  defaultBilling: address.default_billing,
  defaultShipping: address.default_shipping,
});
