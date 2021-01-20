import { RequestInfo } from 'angular-in-memory-web-api';
import { DaffInMemoryDataServiceInterface } from '@daffodil/core/testing';
export declare class DaffInMemoryBackendCartAddressService implements DaffInMemoryDataServiceInterface {
    put(reqInfo: RequestInfo): import("rxjs").Observable<any>;
    private getCart;
    private updateAddress;
}
