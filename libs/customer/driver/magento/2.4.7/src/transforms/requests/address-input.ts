import { DaffCustomerAddress } from '@daffodil/customer';

import { MagentoCustomerAddressInput } from '../../models/public_api';

export const magentoCustomerAddressInputTransform = (address: Partial<DaffCustomerAddress>): MagentoCustomerAddressInput => ({
  city: address.city,
  country_code: address.country,
  country_id: address.country,
  default_billing: address.defaultBilling,
  default_shipping: address.defaultShipping,
  firstname: address.firstname,
  lastname: address.lastname,
  middlename: address.middlename,
  postcode: address.postcode,
  prefix: address.prefix,
  region: {
    region_id: Number(address.region),
  },
  street: [
    address.street,
    ...(address.street2 ? [address.street2] : []),
  ],
  suffix: address.suffix,
  telephone: address.telephone,
});
