import { Injectable } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffCompositeConfigurationItem } from '../../models/composite-configuration-item';
import {
  DaffCompositeProductItemOption,
  DaffCompositeProductItem,
} from '../../models/composite-product-item';
import { DaffPriceRange } from '../../models/prices';
import { DaffProduct } from '../../models/product';
import { DaffProductModule } from '../../product.module';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { getDaffProductSelectors } from '../../selectors/public_api';
import {
  productPriceRangeHasDiscount,
  productPriceRangeHasPriceRange,
} from '../helpers';
import { DaffCompositeProductFacadeInterface } from './composite-product-facade.interface';

/**
 * A facade for interacting with the composite product state.
 * Exposes many parts of the state for easy access and allows dispatching of actions.
 *
 * See the <a href="docs/api/product/DaffCompositeProductFacadeInterface">DaffCompositeProductFacadeInterface docs</a> for more details.
 */
@Injectable({
  providedIn: DaffProductModule,
})
export class DaffCompositeProductFacade<T extends DaffProduct = DaffProduct> implements DaffCompositeProductFacadeInterface {

  constructor(private store: Store<DaffProductReducersState<T>>) {}

	selectors = getDaffProductSelectors<T>();

	/**
	 * Returns whether a DaffPriceRange has a discount.
	 *
	 * @param priceRange a DaffPriceRange
	 */
	hasDiscount = productPriceRangeHasDiscount;

	/**
	 * Returns whether the min and max prices of a DaffPriceRange are different.
	 *
	 * @param priceRange a DaffPriceRange
	 */
	hasPriceRange = productPriceRangeHasPriceRange;

	getRequiredItemPricesForConfiguration(id: T['id'], configuration?: Dictionary<DaffCompositeConfigurationItem>): Observable<DaffPriceRange> {
	  return this.store.pipe(select(this.selectors.selectCompositeProductRequiredItemPricesForConfiguration, { id, configuration }));
	}

	getOptionalItemPricesForConfiguration(id: T['id'], configuration?: Dictionary<DaffCompositeConfigurationItem>): Observable<DaffPriceRange> {
	  return this.store.pipe(select(this.selectors.selectCompositeProductOptionalItemPricesForConfiguration, { id, configuration }));
	}

	getPricesAsCurrentlyConfigured(id: T['id']): Observable<DaffPriceRange> {
	  return this.store.pipe(select(this.selectors.selectCompositeProductPricesAsCurrentlyConfigured, { id }));
	}

	getAppliedOptions(id: T['id']): Observable<Dictionary<DaffCompositeProductItemOption>> {
	  return this.store.pipe(select(this.selectors.selectCompositeProductAppliedOptions, { id }));
	}

	isItemRequired(id: T['id'], item_id: DaffCompositeProductItem['id']) {
	  return this.store.pipe(select(this.selectors.selectIsCompositeProductItemRequired, { id, item_id }));
	}

	/**
	 * Dispatches an action to the rxjs action stream.
	 */
	dispatch(action: Action) {
	  this.store.dispatch(action);
	}
}
