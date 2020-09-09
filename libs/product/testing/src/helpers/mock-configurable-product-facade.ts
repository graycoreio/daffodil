import { BehaviorSubject } from 'rxjs';
import { Dictionary } from '@ngrx/entity';

import { DaffConfigurableProductFacadeInterface, DaffConfigurableProductVariant } from '@daffodil/product';
import { Injectable } from "@angular/core";

@Injectable()
export class MockDaffConfigurableProductFacade implements DaffConfigurableProductFacadeInterface {
	getAllAttributes(id: string): BehaviorSubject<Dictionary<string[]>> {
		return new BehaviorSubject({});
	};
	getAppliedAttributes(id: string): BehaviorSubject<Dictionary<string>> {
		return new BehaviorSubject({});
	};
	getMinimumPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	getMaximumPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	getMinimumDiscountedPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	getMaximumDiscountedPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	isPriceRanged(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(null);
	};
	hasDiscount(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(null);
	};
	getSelectableAttributes(id: string): BehaviorSubject<Dictionary<string[]>> {
		return new BehaviorSubject({});
	};
	getMatchingVariants(id: string): BehaviorSubject<DaffConfigurableProductVariant[]> {
		return new BehaviorSubject([]);
	};
	dispatch(action) {};
}
