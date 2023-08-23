import {
  MagentoBillingAddressInput,
  MagentoPaymentMethodInput,
} from '../../models/public_api';

export interface MagentoCartSetSelectedPaymentMethodWithBillingAndEmailQueryVariables {
  cartId: string;
  payment: MagentoPaymentMethodInput;
  address: MagentoBillingAddressInput;
  email: string;
}
