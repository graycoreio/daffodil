import { Observable } from 'rxjs';
import { DaffCart, DaffCartCoupon } from '@daffodil/cart';
import { DaffCartCouponServiceInterface } from '@daffodil/cart/driver';
import { DaffCartFactory, DaffCartCouponFactory } from '@daffodil/cart/testing';
export declare class DaffTestingCartCouponService implements DaffCartCouponServiceInterface {
    private couponFactory;
    private cartFactory;
    constructor(couponFactory: DaffCartCouponFactory, cartFactory: DaffCartFactory);
    list(cartId: DaffCart['id']): Observable<DaffCartCoupon[]>;
    apply(cartId: DaffCart['id'], coupon: DaffCartCoupon): Observable<Partial<DaffCart>>;
    remove(cartId: DaffCart['id'], coupon: DaffCartCoupon): Observable<Partial<DaffCart>>;
    removeAll(cartId: DaffCart['id']): Observable<Partial<DaffCart>>;
}
