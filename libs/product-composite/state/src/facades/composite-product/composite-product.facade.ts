import { Injectable } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffProduct,
  DaffPriceRange,
  DaffCompositeConfigurationItem,
  DaffCompositeProductItemOption,
  DaffCompositeProductItem,
  productPriceRangeHasDiscount,
  productPriceRangeHasPriceRange,
} from '@daffodil/product';

import { DaffCompositeProductStateRootSlice } from '../../reducers/composite-product-reducers-state.interface';
import { getDaffCompositeProductSelectors } from '../../selectors/all-selectors.selectors';
import { DaffCompositeProductFacadeInterface } from './composite-product-facade.interface';

/**
 * A facade for interacting with the composite product state.
 * Exposes many parts of the state for easy access and allows dispatching of actions.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCompositeProductFacade<T extends DaffProduct = DaffProduct> implements DaffCompositeProductFacadeInterface {

  constructor(private store: Store<DaffCompositeProductStateRootSlice<T>>) {}

	compositeProductSelectors = getDaffCompositeProductSelectors<T>();

	hasDiscount = productPriceRangeHasDiscount;

	hasPriceRange = productPriceRangeHasPriceRange;

	getRequiredItemPricesForConfiguration(id: T['id'], configuration?: Dictionary<DaffCompositeConfigurationItem>): Observable<DaffPriceRange> {
	  return this.store.pipe(select(this.compositeProductSelectors.selectCompositeProductRequiredItemPricesForConfiguration(id, configuration)));
	}

	getOptionalItemPricesForConfiguration(id: T['id'], configuration?: Dictionary<DaffCompositeConfigurationItem>): Observable<DaffPriceRange> {
	  return this.store.pipe(select(this.compositeProductSelectors.selectCompositeProductOptionalItemPricesForConfiguration(id, configuration)));
	}

	getPricesAsCurrentlyConfigured(id: T['id']): Observable<DaffPriceRange> {
	  return this.store.pipe(select(this.compositeProductSelectors.selectCompositeProductPricesAsCurrentlyConfigured(id)));
	}

	getAppliedOptions(id: T['id']): Observable<Dictionary<DaffCompositeProductItemOption>> {
	  return this.store.pipe(select(this.compositeProductSelectors.selectCompositeProductAppliedOptions(id)));
	}

	getDiscountAmount(id: T['id']): Observable<number> {
	  return this.store.pipe(select(this.compositeProductSelectors.selectCompositeProductDiscountAmount(id)));
	}

	getDiscountPercent(id: T['id']): Observable<number> {
	  return this.store.pipe(select(this.compositeProductSelectors.selectCompositeProductDiscountPercent(id)));
	}

	isItemRequired(id: T['id'], item_id: DaffCompositeProductItem['id']) {
	  return this.store.pipe(select(this.compositeProductSelectors.selectIsCompositeProductItemRequired(id, item_id)));
	}

	dispatch(action: Action) {
	  this.store.dispatch(action);
	}
}
