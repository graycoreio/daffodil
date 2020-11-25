import { BehaviorSubject } from 'rxjs';
import { Dictionary } from '@ngrx/entity';
import { Injectable } from '@angular/core';

import {
	DaffCompositeProductFacadeInterface,
	DaffCompositeProductItemOption,
	DaffCompositeProduct,
	DaffCompositeProductItem,
	DaffProductPriceRange,
	DaffCompositeConfigurationItem
} from '@daffodil/product';

@Injectable({providedIn: 'root'})
export class MockDaffCompositeProductFacade implements DaffCompositeProductFacadeInterface {
	getRequiredItemPricesForConfiguration(id: string, configuration?: Dictionary<DaffCompositeConfigurationItem>): BehaviorSubject<DaffProductPriceRange> {
		return new BehaviorSubject(null);
	}
	getOptionalItemPricesForConfiguration(id: string, configuration?: Dictionary<DaffCompositeConfigurationItem>): BehaviorSubject<DaffProductPriceRange> {
		return new BehaviorSubject(null);
	}
	getPricesAsCurrentlyConfigured(id: string): BehaviorSubject<DaffProductPriceRange> {
		return new BehaviorSubject(null);
	}
	getAppliedOptions(id: string): BehaviorSubject<Dictionary<DaffCompositeProductItemOption>> {
		return new BehaviorSubject({});
	}
	isItemRequired(id: DaffCompositeProduct['id'], item_id: DaffCompositeProductItem['id']): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	}
	dispatch(action) {};
	hasDiscount(priceRange: DaffProductPriceRange): boolean {
		return false;
	};
	hasPriceRange(priceRange: DaffProductPriceRange): boolean {
		return false;
	};
}
