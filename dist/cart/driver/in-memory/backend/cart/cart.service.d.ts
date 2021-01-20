import { RequestInfo } from 'angular-in-memory-web-api';
import { DaffInMemoryDataServiceInterface } from '@daffodil/core/testing';
import { DaffCartFactory } from '@daffodil/cart/testing';
export declare class DaffInMemoryBackendCartService implements DaffInMemoryDataServiceInterface {
    private cartFactory;
    constructor(cartFactory: DaffCartFactory);
    get(reqInfo: RequestInfo): import("rxjs").Observable<any>;
    post(reqInfo: RequestInfo): import("rxjs").Observable<any>;
    /**
     * Gets whatever follows the cart ID section of the request URL.
     */
    private getAction;
    private clear;
    private create;
    private getCart;
}
