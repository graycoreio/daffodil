import { MagentoCartItemUpdateInput } from '../../models/public_api';

export interface MagentoCartUpdateItemQueryVariables {
  cartId: string;
  input: MagentoCartItemUpdateInput;
}
