import { BehaviorSubject } from 'rxjs';

import { DaffCompositeProductFacadeInterface, DaffCompositeProductItemOption, DaffCompositeProduct, DaffCompositeProductItem } from '@daffodil/product';
import { Dictionary } from '@ngrx/entity';

export class MockDaffCompositeProductFacade implements DaffCompositeProductFacadeInterface {
	getMinPossiblePrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	getMaxPossiblePrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	possiblyHasPriceRange(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	};
	getMinPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	getMaxPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	hasPriceRange(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	};
	getPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	getMinDiscountedPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	getMaxDiscountedPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	/**
	 * @deprecated
	 */
	getDiscountAmount(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	/**
	 * @deprecated Use getMinDiscountedPrice and getMaxDiscountedPrice instead
	 */
	getDiscountedPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	hasDiscount(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	};
	getAppliedOptions(id: string): BehaviorSubject<Dictionary<DaffCompositeProductItemOption>> {
		return new BehaviorSubject({});
	}
	isItemRequired(id: DaffCompositeProduct['id'], item_id: DaffCompositeProductItem['id']): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	}
	dispatch(action) {};
}
