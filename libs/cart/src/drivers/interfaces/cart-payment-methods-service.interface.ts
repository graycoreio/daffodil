import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCartPaymentMethod } from '../../models/cart-payment';
import { DaffCart } from '../../models/cart';

/**
 * The interface responsible for retrieving the available payment methods of a cart.
 */
export interface DaffCartPaymentMethodsServiceInterface<T extends DaffCartPaymentMethod> {
	/**
	 * List the available payment methods of a cart.
	 */
	list(cartId: DaffCart['id']): Observable<T[]>;
}

export const DaffCartPaymentMethodsDriver = new InjectionToken<
	DaffCartPaymentMethodsServiceInterface<any>
>('DaffCartPaymentMethodsDriver');
