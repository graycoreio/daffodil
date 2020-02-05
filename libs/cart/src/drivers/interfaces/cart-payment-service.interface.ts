import { InjectionToken } from '@angular/core';
import { DaffCartPaymentMethod } from '../../models/cart-payment';

export interface DaffCartPaymentServiceInterface<T extends DaffCartPaymentMethod> {
	get(): T;
	add(payment: T): T;
	update(id: string | number, payment: T): T;
	delete(id?: string | number): void;
}

export const DaffCartPaymentDriver = new InjectionToken<
	DaffCartPaymentServiceInterface<any>
>('DaffCartPaymentDriver');
