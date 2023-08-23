import { MagentoPaymentMethodInput } from '../../models/public_api';

export interface MagentoCartSetSelectedPaymentMethodQueryVariables {
  cartId: string;
  payment: MagentoPaymentMethodInput;
}
