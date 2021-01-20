import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DaffCart } from '@daffodil/cart';
import { DaffOrder } from '@daffodil/order';
export declare const DaffOrderDriver: InjectionToken<DaffOrderServiceInterface<DaffOrder, DaffCart>>;
/**
 * Query order objects accessible by the logged-in user.
 */
export interface DaffOrderServiceInterface<T extends DaffOrder = DaffOrder, V extends DaffCart = DaffCart> {
    /**
     * Get an order object with the specified order ID.
     */
    get(orderId: T['id'], cartId?: V['id']): Observable<T>;
    /**
     * List all order objects for the logged-in user.
     */
    list(cartId?: V['id']): Observable<T[]>;
}
