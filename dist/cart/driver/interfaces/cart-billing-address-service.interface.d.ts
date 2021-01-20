import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DaffCartAddress, DaffCart } from '@daffodil/cart';
/**
 * The interface responsible for managing the billing address of a cart.
 */
export interface DaffCartBillingAddressServiceInterface<T extends DaffCartAddress = DaffCartAddress, V extends DaffCart = DaffCart> {
    /**
     * Retrieve the billing address of a cart
     */
    get(cartId: V['id']): Observable<T>;
    /**
     * Update the billing address of a cart
     */
    update(cartId: V['id'], address: Partial<T>): Observable<Partial<V>>;
}
export declare const DaffCartBillingAddressDriver: InjectionToken<DaffCartBillingAddressServiceInterface<any, any>>;
