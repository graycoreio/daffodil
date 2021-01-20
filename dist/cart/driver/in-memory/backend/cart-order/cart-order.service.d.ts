import { RequestInfo } from 'angular-in-memory-web-api';
import { DaffInMemoryDataServiceInterface } from '@daffodil/core/testing';
export declare class DaffInMemoryBackendCartOrderService implements DaffInMemoryDataServiceInterface {
    post(reqInfo: RequestInfo): import("rxjs").Observable<any>;
    private placeOrder;
}
