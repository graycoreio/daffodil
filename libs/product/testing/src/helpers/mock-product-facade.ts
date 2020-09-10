import { BehaviorSubject } from 'rxjs';

import { DaffProduct, DaffProductFacadeInterface } from '@daffodil/product';
import { Injectable } from '@angular/core';

@Injectable()
export class MockDaffProductFacade implements DaffProductFacadeInterface {
	loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	/**
	 * @deprecated use getProduct instead.
	 */
	product$: BehaviorSubject<DaffProduct> = new BehaviorSubject(null);
	getProduct(id: string): BehaviorSubject<DaffProduct> {
		return new BehaviorSubject(null);
	}
	hasDiscount(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	}
	isOutOfStock(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	}
	dispatch(action) {};
}
