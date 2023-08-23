import { MagentoCart } from '../../models/responses/cart';

export interface MagentoApplyCouponResponse {
  applyCouponToCart: {
    cart: MagentoCart;
  };
}
