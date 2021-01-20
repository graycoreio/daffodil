import { RequestInfo } from 'angular-in-memory-web-api';
import { DaffInMemoryDataServiceInterface } from '@daffodil/core/testing';
import { DaffCartItemFactory } from '@daffodil/cart/testing';
export declare class DaffInMemoryBackendCartItemsService implements DaffInMemoryDataServiceInterface {
    private cartItemFactory;
    constructor(cartItemFactory: DaffCartItemFactory);
    get(reqInfo: RequestInfo): import("rxjs").Observable<any>;
    put(reqInfo: RequestInfo): import("rxjs").Observable<any>;
    post(reqInfo: RequestInfo): import("rxjs").Observable<any>;
    delete(reqInfo: RequestInfo): import("rxjs").Observable<any>;
    /**
     * Gets whatever follows the cart ID section of the request URL.
     */
    private getAction;
    private getCart;
    private transformItemInput;
    private listItems;
    private getItem;
    private updateItem;
    private addItem;
    private deleteItem;
}
