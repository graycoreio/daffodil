import { MagentoCart } from '../outputs/cart';

export interface MagentoListCartCouponsResponse {
  cart: {
    applied_coupons: MagentoCart['applied_coupons'],
  }
}
