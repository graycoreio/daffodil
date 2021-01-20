import { InMemoryDbService } from 'angular-in-memory-web-api';
import { DaffProductImageFactory } from '@daffodil/product/testing';
import { DaffOrderFactory } from '../order/factories/order.factory';
import { DaffOrderItemFactory } from '../order/factories/order-item.factory';
export declare class DaffInMemoryBackendCheckoutService implements InMemoryDbService {
    private orderFactory;
    private orderItemFactory;
    private productImageFactory;
    private order;
    constructor(orderFactory: DaffOrderFactory, orderItemFactory: DaffOrderItemFactory, productImageFactory: DaffProductImageFactory);
    post(reqInfo: any): any;
    createDb(): {
        order: any;
    };
    private populateOrder;
}
