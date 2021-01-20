import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { DaffQueuedApollo } from '@daffodil/core/graphql';
import { DaffCart, DaffCartCoupon } from '@daffodil/cart';
import { DaffCartCouponServiceInterface } from '@daffodil/cart/driver';
import { DaffMagentoCartCouponResponseTransformer } from './transforms/outputs/cart-coupon-response.service';
/**
 * A service for making Magento GraphQL queries for carts.
 */
export declare class DaffMagentoCartCouponService implements DaffCartCouponServiceInterface {
    private mutationQueue;
    extraCartFragments: DocumentNode[];
    cartTransformer: DaffMagentoCartCouponResponseTransformer;
    constructor(mutationQueue: DaffQueuedApollo, extraCartFragments: DocumentNode[], cartTransformer: DaffMagentoCartCouponResponseTransformer);
    apply(cartId: DaffCart['id'], coupon: DaffCartCoupon): Observable<Partial<DaffCart>>;
    list(cartId: DaffCart['id']): Observable<DaffCartCoupon[]>;
    remove(cartId: DaffCart['id'], coupon: DaffCartCoupon): Observable<Partial<DaffCart>>;
    removeAll(cartId: DaffCart['id']): Observable<Partial<DaffCart>>;
}
