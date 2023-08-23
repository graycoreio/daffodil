import {
  MagentoBillingAddressInput,
  MagentoPaymentMethodInput,
} from '../../models/public_api';

export interface MagentoCartSetSelectedPaymentMethodWithBillingQueryVariables {
  cartId: string;
  payment: MagentoPaymentMethodInput;
  address: MagentoBillingAddressInput;
}
