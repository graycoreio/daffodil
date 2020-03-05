import { MagentoCartAddressInput } from './cart-address';

export interface MagentoBillingAddressInput {
  address: MagentoCartAddressInput;
  customer_address_id?: number;
  same_as_shipping?: boolean;
  use_for_shipping?: boolean;
}
