import { RequestInfo } from 'angular-in-memory-web-api';
import { DaffInMemoryDataServiceInterface } from '@daffodil/core/testing';
export declare class DaffInMemoryBackendCartShippingInformationService implements DaffInMemoryDataServiceInterface {
    get(reqInfo: RequestInfo): import("rxjs").Observable<any>;
    put(reqInfo: RequestInfo): import("rxjs").Observable<any>;
    delete(reqInfo: RequestInfo): import("rxjs").Observable<any>;
    private getCart;
    private getShippingInformation;
    private updateShippingInformation;
    private removeShippingInformation;
}
