import { RequestInfo } from 'angular-in-memory-web-api';
import { DaffInMemoryDataServiceInterface } from '@daffodil/core/testing';
export declare class DaffInMemoryBackendCartPaymentMethodsService implements DaffInMemoryDataServiceInterface {
    get(reqInfo: RequestInfo): import("rxjs").Observable<any>;
    private getCart;
    private listPaymentMethods;
}
