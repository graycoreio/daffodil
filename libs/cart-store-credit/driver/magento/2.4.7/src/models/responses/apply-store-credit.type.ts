import { MagentoCartWithStoreCredit } from './cart-with-store-credit.type';

export interface MagentoApplyStoreCreditResponse {
  applyStoreCreditToCart: {
    cart: MagentoCartWithStoreCredit;
  };
}
