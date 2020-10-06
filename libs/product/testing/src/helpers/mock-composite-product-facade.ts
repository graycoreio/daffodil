import { BehaviorSubject } from 'rxjs';

import { DaffCompositeProductFacadeInterface, DaffCompositeProductItemOption, DaffCompositeProduct, DaffCompositeProductItem } from '@daffodil/product';
import { Dictionary } from '@ngrx/entity';

export class MockDaffCompositeProductFacade implements DaffCompositeProductFacadeInterface {
	getMinPossibleItemPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	getMaxPossibleItemPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	possiblyHasItemPriceRange(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	};
	getMinPossibleItemDiscountedPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	getMaxPossibleItemDiscountedPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	possiblyHasItemDiscountedPriceRange(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	};
	possiblyHasItemDiscount(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	};
	getMinRequiredItemPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	getMaxRequiredItemPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	hasRequiredItemPriceRange(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	};
	getMinRequiredItemDiscountedPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	getMaxRequiredItemDiscountedPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	hasRequiredItemDiscountedPriceRange(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	};
	hasRequiredItemDiscount(id: string): BehaviorSubject<boolean> {
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
