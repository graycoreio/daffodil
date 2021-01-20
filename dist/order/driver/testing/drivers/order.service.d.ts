import { Observable } from 'rxjs';
import { DaffOrder } from '@daffodil/order';
import { DaffOrderServiceInterface } from '@daffodil/order/driver';
import { DaffOrderFactory } from '@daffodil/order/testing';
export declare class DaffTestingOrderService implements DaffOrderServiceInterface {
    private orderFactory;
    constructor(orderFactory: DaffOrderFactory);
    get(orderId: DaffOrder['id']): Observable<DaffOrder>;
    list(): Observable<DaffOrder[]>;
}
