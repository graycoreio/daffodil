import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { DaffInMemoryDataServiceInterface } from '@daffodil/core/testing';
import { DaffOrder } from '@daffodil/order';
import { DaffOrderFactory } from '@daffodil/order/testing';
/**
 * An in-memory service that stubs out the backend services for getting orders.
 */
export declare class DaffInMemoryBackendOrderService implements InMemoryDbService, DaffInMemoryDataServiceInterface {
    private orderFactory;
    orders: DaffOrder[];
    constructor(orderFactory: DaffOrderFactory);
    /**
     * Creates a fake database of orders for the order inmemory backend service.
     *
     * @returns A fake database of an array of orders
     */
    createDb(reqInfo: RequestInfo): any;
    /**
     * Responds to GET requests.
     */
    get(reqInfo: RequestInfo): any;
    private getOrder;
    private listOrders;
}
