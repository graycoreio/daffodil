import { MagentoCart } from '@daffodil/cart/driver/magento';

export interface MagentoGetCustomerCartResponse {
  __typename: string;
  customerCart: MagentoCart;
}
