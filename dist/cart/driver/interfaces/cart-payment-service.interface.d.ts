import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DaffCartPaymentMethod, DaffCart, DaffCartAddress } from '@daffodil/cart';
/**
 * The interface responsible for managing the selected payment method of a cart.
 */
export interface DaffCartPaymentServiceInterface<T extends DaffCartPaymentMethod = DaffCartPaymentMethod, V extends DaffCart = DaffCart, R extends DaffCartAddress = DaffCartAddress> {
    /**
     * Get the currently applied payment method of a cart.
     */
    get(cartId: V['id']): Observable<T>;
    /**
     * Update the payment method applied to a cart.
     */
    update(cartId: V['id'], payment: Partial<T>): Observable<Partial<V>>;
    /**
       * Update the billing address and payment method applied to a cart.
       */
    updateWithBilling(cartId: V['id'], payment: Partial<T>, address: Partial<R>): Observable<Partial<V>>;
    /**
     * Remove the payment method applied to a cart.
     */
    remove(cartId: V['id']): Observable<void>;
}
export declare const DaffCartPaymentDriver: InjectionToken<DaffCartPaymentServiceInterface<any, any, DaffCartAddress>>;
