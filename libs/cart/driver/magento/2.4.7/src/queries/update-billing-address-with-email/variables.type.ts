import { MagentoBillingAddressInput } from '../../models/public_api';

export interface MagentoCartUpdateBillingAddressWithEmailQueryVariables {
  cartId: string;
  email: string;
  address: MagentoBillingAddressInput;
}
