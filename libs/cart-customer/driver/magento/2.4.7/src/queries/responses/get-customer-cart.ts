import { MagentoCart } from '@daffodil/cart/driver/magento/2.4.7';

export interface MagentoGetCustomerCartResponse {
  __typename: string;
  customerCart: MagentoCart;
}
