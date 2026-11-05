import { MagentoShippingAddressInput } from '../../models/public_api';

export interface MagentoCartUpdateShippingAddressQueryVariables {
  cartId: string;
  address: MagentoShippingAddressInput;
}
