import { BehaviorSubject } from 'rxjs';

import { 
	DaffCompositeProductFacadeInterface, 
	DaffCompositeProductItemOption, 
	DaffCompositeProduct, 
	DaffCompositeProductItem,
	DaffPriceRange,
	DaffCompositeConfigurationItem
} from '@daffodil/product';
import { Dictionary } from '@ngrx/entity';
import { Injectable } from "@angular/core";

@Injectable()
export class MockDaffCompositeProductFacade implements DaffCompositeProductFacadeInterface {
	getRequiredItemPricesForConfiguration(id: string, configuration?: Dictionary<DaffCompositeConfigurationItem>): BehaviorSubject<DaffPriceRange> {
		return new BehaviorSubject(null);
	}
	getOptionalItemPricesForConfiguration(id: string, configuration?: Dictionary<DaffCompositeConfigurationItem>): BehaviorSubject<DaffPriceRange> {
		return new BehaviorSubject(null);
	}
	getPricesAsCurrentlyConfigured(id: string): BehaviorSubject<DaffPriceRange> {
		return new BehaviorSubject(null);
	}
	getAppliedOptions(id: string): BehaviorSubject<Dictionary<DaffCompositeProductItemOption>> {
		return new BehaviorSubject({});
	}
	isItemRequired(id: DaffCompositeProduct['id'], item_id: DaffCompositeProductItem['id']): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	}
	dispatch(action) {};
	hasDiscount(priceRange: DaffPriceRange): boolean {
		return false;
	};
	hasPriceRange(priceRange: DaffPriceRange): boolean {
		return false;
	};
}
