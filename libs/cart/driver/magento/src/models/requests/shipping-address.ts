import { MagentoCartAddressInput } from './cart-address';

export interface MagentoShippingAddressInput {
  address: MagentoCartAddressInput;
  customer_address_id?: number;
  customer_notes?: string;
}
