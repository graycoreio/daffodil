import { MagentoCartAddressInput } from '../../models/public_api';

export interface MagentoCartUpdateAddressWithEmailQueryVariables {
  cartId: string;
  email: string;
  address?: MagentoCartAddressInput;
  addressId?: number;
}
