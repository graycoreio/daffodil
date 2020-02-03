import { DaffPersonalAddress } from '@daffodil/geography';
import { DaffCartAddress } from '../../models/cart-address';
import { InjectionToken } from '@angular/core';

/**
 * The interface responsible for managing the shipping address of a cart.
 */
export interface DaffCartShippingAddressServiceInterface<
	T extends DaffPersonalAddress,
	V extends DaffCartAddress
> {
	get(): V;
	update(address: T): V;
}

export const DaffCartShippingAddressDriver = new InjectionToken<
	DaffCartShippingAddressServiceInterface<any, any>
>('DaffCartShippingAddressDriver');
