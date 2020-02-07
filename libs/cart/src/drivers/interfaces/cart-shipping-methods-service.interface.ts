import { InjectionToken } from '@angular/core';
import { DaffCartShippingRate } from '../../models/cart-shipping-rate';

export interface DaffCartShippingMethodsServiceInterface<T extends DaffCartShippingRate> {
	list(): T[];
}

export const DaffCartShippingMethodsDriver = new InjectionToken<
	DaffCartShippingMethodsServiceInterface<any>
>('DaffCartShippingMethodsDriver');
