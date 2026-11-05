import { MagentoCartItemInput } from '../../models/public_api';

export interface MagentoCartAddItemQueryVariables {
  cartId: string;
  input: MagentoCartItemInput;
}
