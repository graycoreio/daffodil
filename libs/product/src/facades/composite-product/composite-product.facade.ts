import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select, Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffProductModule } from '../../product.module';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { DaffProduct } from '../../models/product';
import { getDaffProductSelectors } from '../../selectors/public_api';
import { DaffCompositeProductFacadeInterface } from './composite-product-facade.interface';
import { DaffCompositeProductItemOption, DaffCompositeProductItem } from '../../models/composite-product-item';
import { DaffCompositeProduct } from '../../models/composite-product';
import { DaffCompositeConfigurationItem } from '../../models/composite-configuration-item';
import { productPriceRangeHasDiscount, productPriceRangeHasPriceRange } from '../helpers';
import { DaffProductPriceRange } from '../../models/pricing/public_api';

/**
 * A facade for interacting with the composite product state.
 * Exposes many parts of the state for easy access and allows dispatching of actions.
 * 
 * See the <a href="docs/api/product/DaffCompositeProductFacadeInterface">DaffCompositeProductFacadeInterface docs</a> for more details.
 */
@Injectable({
  providedIn: DaffProductModule
})
export class DaffCompositeProductFacade<T extends DaffProduct = DaffProduct> implements DaffCompositeProductFacadeInterface {
	
	constructor(private store: Store<DaffProductReducersState<T>>) {}

	selectors = getDaffProductSelectors<T>();

	/**
	 * Returns whether a DaffProductPriceRange has a discount.
	 * @param priceRange a DaffProductPriceRange
	 */
	hasDiscount = productPriceRangeHasDiscount;

	/**
	 * Returns whether the min and max prices of a DaffProductPriceRange are different.
	 * @param priceRange a DaffProductPriceRange
	 */
	hasPriceRange = productPriceRangeHasPriceRange;

	getRequiredItemPricesForConfiguration(id: string, configuration?: Dictionary<DaffCompositeConfigurationItem>): Observable<DaffProductPriceRange> {
		return this.store.pipe(select(this.selectors.selectCompositeProductRequiredItemPricesForConfiguration, { id, configuration }));
	}

	getOptionalItemPricesForConfiguration(id: string, configuration?: Dictionary<DaffCompositeConfigurationItem>): Observable<DaffProductPriceRange> {
		return this.store.pipe(select(this.selectors.selectCompositeProductOptionalItemPricesForConfiguration, { id, configuration }));
	}

	getPricesAsCurrentlyConfigured(id: string): Observable<DaffProductPriceRange> {
		return this.store.pipe(select(this.selectors.selectCompositeProductPricesAsCurrentlyConfigured, { id }));
	}

	getAppliedOptions(id: string): Observable<Dictionary<DaffCompositeProductItemOption>> {
		return this.store.pipe(select(this.selectors.selectCompositeProductAppliedOptions, { id }));
	}

	isItemRequired(id: DaffCompositeProduct['id'], item_id: DaffCompositeProductItem['id']) {
		return this.store.pipe(select(this.selectors.selectIsCompositeProductItemRequired, { id, item_id }));
	}

  /**
   * Dispatches an action to the rxjs action stream.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
