import { MagentoGetCartResponse } from './get-cart';

export interface MagentoUpdateAddressResponse {
  setBillingAddressOnCart: MagentoGetCartResponse;
  setShippingAddressesOnCart: MagentoGetCartResponse;
}
