import { MagentoShippingMethodInput } from '../../models/public_api';

export interface MagentoCartSetSelectedShippingMethodQueryVariables {
  cartId: string;
  method: MagentoShippingMethodInput;
}
