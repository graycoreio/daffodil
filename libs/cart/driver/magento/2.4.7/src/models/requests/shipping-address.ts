import { MagentoCartAddressInputBase } from './cart-address-base';

export interface MagentoShippingAddressInput extends MagentoCartAddressInputBase {
  customer_notes?: string;
}
