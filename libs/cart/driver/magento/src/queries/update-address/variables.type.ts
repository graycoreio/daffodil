import { MagentoCartAddressInput } from '../../models/public_api';

export interface MagentoCartUpdateAddressQueryVariables {
  cartId: string;
  address?: MagentoCartAddressInput;
  addressId?: number;
}
