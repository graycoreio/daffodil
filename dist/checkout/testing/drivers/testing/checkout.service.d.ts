import { Observable } from 'rxjs';
import { DaffOrder, DaffCheckoutServiceInterface } from '@daffodil/checkout';
import { DaffOrderFactory } from '../../order/factories/order.factory';
import { DaffOrderItemFactory } from '../../order/factories/order-item.factory';
export declare class DaffTestingCheckoutService implements DaffCheckoutServiceInterface {
    private orderFactory;
    private orderItemFactory;
    constructor(orderFactory: DaffOrderFactory, orderItemFactory: DaffOrderItemFactory);
    placeOrder(cartId: string): Observable<DaffOrder>;
}
