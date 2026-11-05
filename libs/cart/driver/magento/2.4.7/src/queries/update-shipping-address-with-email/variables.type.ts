import { MagentoShippingAddressInput } from '../../models/public_api';

export interface MagentoCartUpdateShippingAddressWithEmailQueryVariables {
  cartId: string;
  email: string;
  address: MagentoShippingAddressInput;
}
