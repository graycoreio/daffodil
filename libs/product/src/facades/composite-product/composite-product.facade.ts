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
	
	getMinPossiblePrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMinPossiblePrice, { id }));
	}

	getMaxPossiblePrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMaxPossiblePrice, { id }));
	}

	possiblyHasPriceRange(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectCompositeProductPossiblyHasPriceRange, { id }));
	}

	getMinPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMinPrice, { id }));
	}

	getMaxPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMaxPrice, { id }));
	}

	hasPriceRange(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectCompositeProductHasPriceRange, { id }));
	}

	getPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductPrice, { id }));
	}
	
	getDiscountAmount(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductDiscountAmount, { id }));
	}

	getDiscountedPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductDiscountedPrice, { id }));
	}
	
	hasDiscount(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectCompositeProductHasDiscount, { id }));
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
