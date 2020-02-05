import { DaffCartPayment } from '../../models/cart-payment';
import { InjectionToken } from '@angular/core';

export interface DaffCartPaymentServiceInterface<T extends DaffCartPayment> {
	get(): T;
	add(payment: T): T;
	update(id: string | number, payment: T): T;
	delete(id?: string | number): void;
}

export const DaffCartPaymentDriver = new InjectionToken<
	DaffCartPaymentServiceInterface<any>
>('DaffCartPaymentDriver');
