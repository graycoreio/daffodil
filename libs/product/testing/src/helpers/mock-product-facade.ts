import { BehaviorSubject } from 'rxjs';

import { DaffProduct, DaffProductFacadeInterface } from '@daffodil/product';

export class MockDaffProductFacade implements DaffProductFacadeInterface {
	loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	/**
	 * @deprecated use getProduct instead.
	 */
	product$: BehaviorSubject<DaffProduct> = new BehaviorSubject(null);
	getProduct(id: string): BehaviorSubject<DaffProduct> {
		return new BehaviorSubject(null);
	}
	getPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	}
	hasDiscount(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	}
	getDiscountAmount(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	}
	getDiscountedPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	}
	getDiscountPercent(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	}
	isOutOfStock(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	}
	dispatch(action) {};
}
