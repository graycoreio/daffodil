import { MagentoCustomerAddressInput } from '@daffodil/customer/driver/magento';

import { MagentoTokenBaseCardPaymentInput } from './payment-input.type';

export interface MagentoTokenBaseCardCreateInput {
  __typename?: 'TokenBaseCardCreateInput';
  address?: MagentoCustomerAddressInput;
  customer_email: string;
  method?: string;
  active?: boolean;
  expires?: string;
  additional?: MagentoTokenBaseCardPaymentInput;
}
