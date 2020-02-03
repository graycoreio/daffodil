import { DaffCartPayment } from '../../models/cart-payment';
import { InjectionToken } from '@angular/core';

export interface DaffCartPaymentServiceInterface {
	get(): DaffCartPayment;
	add(payment?: any): DaffCartPayment;
	update(id: string | number, payment: any): DaffCartPayment;
	remove(id?: string | number): void;
}

export const DaffCartPaymentDriver = new InjectionToken<
	DaffCartPaymentServiceInterface
>('DaffCartPaymentDriver');
