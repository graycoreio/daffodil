import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DaffCart, DaffCartPaymentMethod, DaffCartOrderResult } from '@daffodil/cart';
/**
 * The interface responsible for placing an order for the customer's cart.
 */
export interface DaffCartOrderServiceInterface<T extends DaffCart = DaffCart, V extends DaffCartPaymentMethod = DaffCartPaymentMethod, R extends DaffCartOrderResult = DaffCartOrderResult> {
    /**
     * Place an order and return the order ID.
     */
    placeOrder(id: T['id'], payment?: V): Observable<R>;
}
export declare const DaffCartOrderDriver: InjectionToken<DaffCartOrderServiceInterface<DaffCart, DaffCartPaymentMethod, DaffCartOrderResult>>;
