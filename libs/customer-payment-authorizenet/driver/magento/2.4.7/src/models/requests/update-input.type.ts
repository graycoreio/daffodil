import { MagentoCustomerAddressInput } from '@daffodil/customer/driver/magento/2.4.7';

import { MagentoTokenBaseCardPaymentInput } from './payment-input.type';

export interface MagentoTokenBaseCardUpdateInput {
  __typename?: 'TokenBaseCardUpdateInput';
  hash: string;
  address?: MagentoCustomerAddressInput;
  customer_email?: string;
  method?: string;
  active?: boolean;
  expires?: string;
  additional?: MagentoTokenBaseCardPaymentInput;
}
