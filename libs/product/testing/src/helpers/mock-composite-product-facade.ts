import { BehaviorSubject } from 'rxjs';

import { DaffCompositeProductFacadeInterface, DaffCompositeProductItemOption, DaffCompositeProduct, DaffCompositeProductItem } from '@daffodil/product';
import { Dictionary } from '@ngrx/entity';

export class MockDaffCompositeProductFacade implements DaffCompositeProductFacadeInterface {
	getMinOptionalPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	getMaxOptionalPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	hasOptionalPriceRange(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	};
	getMinOptionalDiscountedPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	getMaxOptionalDiscountedPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	hasOptionalDiscountedPriceRange(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	};
	hasOptionalDiscount(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	};
	getMinRequiredPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	getMaxRequiredPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	hasRequiredPriceRange(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	};
	getMinRequiredDiscountedPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	getMaxRequiredDiscountedPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	hasRequiredDiscountedPriceRange(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	};
	hasRequiredDiscount(id: string): BehaviorSubject<boolean> {
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
