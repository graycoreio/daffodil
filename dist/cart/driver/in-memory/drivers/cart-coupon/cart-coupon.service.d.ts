import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffCart, DaffCartCoupon } from '@daffodil/cart';
import { DaffCartCouponServiceInterface } from '@daffodil/cart/driver';
export declare class DaffInMemoryCartCouponService implements DaffCartCouponServiceInterface {
    private http;
    url: string;
    constructor(http: HttpClient);
    list(cartId: DaffCart['id']): Observable<DaffCartCoupon[]>;
    apply(cartId: DaffCart['id'], coupon: DaffCartCoupon): Observable<Partial<DaffCart>>;
    remove(cartId: DaffCart['id'], coupon: DaffCartCoupon): Observable<Partial<DaffCart>>;
    removeAll(cartId: DaffCart['id']): Observable<Partial<DaffCart>>;
}
