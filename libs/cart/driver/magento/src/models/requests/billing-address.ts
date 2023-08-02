import { MagentoCartAddressInputBase } from './cart-address-base';

export interface MagentoBillingAddressInput extends MagentoCartAddressInputBase {
  same_as_shipping?: boolean;
  use_for_shipping?: boolean;
}
