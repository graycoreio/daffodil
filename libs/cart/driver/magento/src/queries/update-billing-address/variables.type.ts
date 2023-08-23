import { MagentoBillingAddressInput } from '../../models/public_api';

export interface MagentoCartUpdateBillingAddressQueryVariables {
  cartId: string;
  address: MagentoBillingAddressInput;
}
