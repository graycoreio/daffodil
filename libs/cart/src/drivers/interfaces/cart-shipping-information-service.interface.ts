import { InjectionToken } from '@angular/core';
import { DaffCartShippingRate } from '../../models/cart-shipping-rate';

/**
 * The interface responsible for mediating the interaction of the shipping
 * information of a cart with a given platform.
 */
export interface DaffCartShippingInformationServiceInterface<T extends DaffCartShippingRate>{
	get(): T;
}

export const DaffCartShippingInformationDriver = new InjectionToken<
	DaffCartShippingInformationServiceInterface<any>
>('DaffCartShippingInformationDriver');
