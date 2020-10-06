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

/**
 * A facade for accessing composite product state from an application component.
 */
@Injectable({
  providedIn: DaffProductModule
})
export class DaffCompositeProductFacade<T extends DaffProduct = DaffProduct> implements DaffCompositeProductFacadeInterface {

	selectors = getDaffProductSelectors<T>();
	
	constructor(private store: Store<DaffProductReducersState<T>>) {}
	
	getMinPossibleItemPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMinPossibleItemPrice, { id }));
	}

	getMaxPossibleItemPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMaxPossibleItemPrice, { id }));
	}

	possiblyHasItemPriceRange(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectCompositeProductPossiblyHasItemPriceRange, { id }));
	}

	getMinPossibleItemDiscountedPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMinPossibleItemDiscountedPrice, { id }));
	}

	getMaxPossibleItemDiscountedPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMaxPossibleItemDiscountedPrice, { id }));
	}

	possiblyHasItemDiscountedPriceRange(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectCompositeProductPossiblyHasItemDiscountedPriceRange, { id }));
	}

	possiblyHasItemDiscount(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectCompositeProductPossiblyHasItemDiscount, { id }));
	}

	getMinRequiredItemPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMinRequiredItemPrice, { id }));
	}

	getMaxRequiredItemPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMaxRequiredItemPrice, { id }));
	}

	hasRequiredItemPriceRange(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectCompositeProductHasRequiredItemPriceRange, { id }));
	}
	
	getMinRequiredItemDiscountedPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMinRequiredItemDiscountedPrice, { id }));
	}

	getMaxRequiredItemDiscountedPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMaxRequiredItemDiscountedPrice, { id }));
	}

	hasRequiredItemDiscountedPriceRange(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectCompositeProductHasRequiredItemDiscountedPriceRange, { id }));
	}
	
	hasRequiredItemDiscount(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectCompositeProductHasRequiredItemDiscount, { id }));
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
