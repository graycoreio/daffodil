import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DaffCartShippingRate, DaffCart } from '@daffodil/cart';
/**
 * The interface responsible for mediating the interaction of the shipping
 * information of a cart with a given platform.
 */
export interface DaffCartShippingInformationServiceInterface<T extends DaffCartShippingRate = DaffCartShippingRate, V extends DaffCart = DaffCart> {
    /**
     * Get the currently selected shipping method of a cart.
     */
    get(cartId: V['id']): Observable<T>;
    /**
     * Update the currently selected shipping method of a cart.
     */
    update(cartId: V['id'], shippingInfo: Partial<T>): Observable<Partial<V>>;
    /**
     * Remove the currently selected shipping method from a cart.
     */
    delete(cartId: V['id'], id?: T['id']): Observable<Partial<V>>;
}
export declare const DaffCartShippingInformationDriver: InjectionToken<DaffCartShippingInformationServiceInterface<any, any>>;
