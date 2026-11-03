import { MagentoCartWithStoreCredit } from './cart-with-store-credit.type';

export interface MagentoRemoveStoreCreditResponse {
  removeStoreCreditFromCart: {
    cart: MagentoCartWithStoreCredit;
  };
}
