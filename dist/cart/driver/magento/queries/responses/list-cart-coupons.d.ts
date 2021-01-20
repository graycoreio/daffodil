import { MagentoCart } from '../../models/responses/cart';
export interface MagentoListCartCouponsResponse {
    cart: {
        applied_coupons: MagentoCart['applied_coupons'];
    };
}
