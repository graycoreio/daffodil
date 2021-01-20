import { DaffCart } from '@daffodil/cart';
import { MagentoCart } from '../../models/responses/cart';
/**
 * Transforms magento carts into an object usable by daffodil.
 */
export declare class DaffMagentoCartCouponResponseTransformer {
    private transformCartItems;
    private transformTotals;
    private transformCoupons;
    /**
     * Transforms the MagentoCart from the cart coupon operations into a DaffCart partial.
     * @param cart the cart from a magento cart query.
     */
    transform(cart: Partial<MagentoCart>): Partial<DaffCart>;
}
