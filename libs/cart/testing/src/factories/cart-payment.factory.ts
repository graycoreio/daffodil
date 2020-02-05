import { Injectable } from '@angular/core';

import { DaffCartPaymentMethod } from '@daffodil/cart';

import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCartPayment implements DaffCartPaymentMethod {
	method = 'credit-card';
}

@Injectable({
	providedIn: 'root',
})
export class DaffCartPaymentFactory extends DaffModelFactory<DaffCartPaymentMethod> {
	constructor() {
		super(MockCartPayment);
	}
}
