import { BehaviorSubject } from 'rxjs';

import { DaffCompositeProductFacadeInterface, DaffCompositeProductItemOption, DaffCompositeProduct, DaffCompositeProductItem } from '@daffodil/product';
import { Dictionary } from '@ngrx/entity';

export class MockDaffCompositeProductFacade implements DaffCompositeProductFacadeInterface {
	getMinOptionalItemPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	getMaxOptionalItemPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	hasOptionalItemPriceRange(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	};
	getMinOptionalItemDiscountedPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	getMaxOptionalItemDiscountedPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	hasOptionalItemDiscountedPriceRange(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	};
	hasOptionalItemDiscount(id: string): BehaviorSubject<boolean> {
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
