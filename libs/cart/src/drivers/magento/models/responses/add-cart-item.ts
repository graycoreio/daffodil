import { MagentoGetCartResponse } from './get-cart';

export interface MagentoAddSimpleCartItemResponse {
  addSimpleProductsToCart: MagentoGetCartResponse;
}

export interface MagentoAddBundleCartItemResponse {
  addBundleProductsToCart: MagentoGetCartResponse;
}
