import { DaffCustomerAddress } from '@daffodil/customer';

import { MagentoCustomerAddress } from '../../models/public_api';

export const magentoCustomerAddressTransform = (address: MagentoCustomerAddress): DaffCustomerAddress => ({
  id: address.id,
  street: address.street[0],
  city: address.city,
  region: address.region.region_code,
  country: address.country_code,
  country_id: address.country_code,
  postcode: address.postcode,
  firstname: address.firstname,
  lastname: address.lastname,
  telephone: address.telephone,
  email: address.email,
});
