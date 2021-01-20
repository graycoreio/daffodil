import { Observable } from 'rxjs';
import { DaffCart, DaffCartPaymentMethod, DaffCartOrderResult } from '@daffodil/cart';
import { DaffCartOrderServiceInterface } from '@daffodil/cart/driver';
export declare class DaffTestingCartOrderService implements DaffCartOrderServiceInterface {
    placeOrder(cartId: DaffCart['id'], payment?: DaffCartPaymentMethod): Observable<DaffCartOrderResult>;
}
