import { MagentoCart } from '../../models/responses/cart';

export interface MagentoRemoveAllCouponsResponse {
  removeCouponFromCart: {
    cart: MagentoCart;
  };
}
