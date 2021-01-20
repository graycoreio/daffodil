import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DaffCartShippingRate, DaffCart } from '@daffodil/cart';
/**
 * The interface responsible for retrieving the available shipping methods of a cart.
 */
export interface DaffCartShippingMethodsServiceInterface<T extends DaffCartShippingRate = DaffCartShippingRate> {
    /**
     * List the available shipping methods for a cart.
     */
    list(cartId: DaffCart['id']): Observable<T[]>;
}
export declare const DaffCartShippingMethodsDriver: InjectionToken<DaffCartShippingMethodsServiceInterface<any>>;
