import { MagentoCart } from '../../models/responses/cart';
export interface MagentoApplyCouponResponse {
    applyCouponToCart: {
        cart: {
            id: MagentoCart['id'];
            items: MagentoCart['items'];
            applied_coupons: MagentoCart['applied_coupons'];
            prices: MagentoCart['prices'];
            shipping_addresses: Partial<MagentoCart['shipping_addresses']>;
        };
    };
}
