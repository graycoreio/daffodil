import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { MagentoCartPaymentMethod } from '@daffodil/cart';

import { DaffModelFactory } from '@daffodil/core/testing';

export class MockMagentoCartPaymentMethod implements MagentoCartPaymentMethod {
	code = faker.random.word();
	title = faker.random.word();
	purchase_order_number = faker.random.word();
}

@Injectable({
	providedIn: 'root',
})
export class MagentoCartPaymentMethodFactory extends DaffModelFactory<MagentoCartPaymentMethod> {
	constructor() {
		super(MockMagentoCartPaymentMethod);
	}
}
