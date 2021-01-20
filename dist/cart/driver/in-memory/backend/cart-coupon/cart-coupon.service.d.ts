import { RequestInfo } from 'angular-in-memory-web-api';
import { DaffInMemoryDataServiceInterface } from '@daffodil/core/testing';
export declare class DaffInMemoryBackendCartCouponService implements DaffInMemoryDataServiceInterface {
    get(reqInfo: RequestInfo): import("rxjs").Observable<any>;
    post(reqInfo: RequestInfo): import("rxjs").Observable<any>;
    delete(reqInfo: RequestInfo): import("rxjs").Observable<any>;
    /**
     * Gets whatever follows the cart ID section of the request URL.
     */
    private getAction;
    private getCart;
    private listCoupons;
    private applyCoupon;
    private removeCoupon;
    private removeAllCoupons;
}
