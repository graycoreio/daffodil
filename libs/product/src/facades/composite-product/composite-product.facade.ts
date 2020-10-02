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
	
	getMinOptionalPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMinOptionalPrice, { id }));
	}

	getMaxOptionalPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMaxOptionalPrice, { id }));
	}

	hasOptionalPriceRange(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectCompositeProductHasOptionalPriceRange, { id }));
	}

	getMinOptionalDiscountedPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMinOptionalDiscountedPrice, { id }));
	}

	getMaxOptionalDiscountedPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMaxOptionalDiscountedPrice, { id }));
	}

	hasOptionalDiscountedPriceRange(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectCompositeProductHasOptionalDiscountedPriceRange, { id }));
	}

	hasOptionalDiscount(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectCompositeProductHasOptionalDiscount, { id }));
	}

	getMinRequiredPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMinRequiredPrice, { id }));
	}

	getMaxRequiredPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMaxRequiredPrice, { id }));
	}

	hasRequiredPriceRange(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectCompositeProductHasRequiredPriceRange, { id }));
	}
	
	getMinRequiredDiscountedPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMinRequiredDiscountedPrice, { id }));
	}

	getMaxRequiredDiscountedPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMaxRequiredDiscountedPrice, { id }));
	}

	hasRequiredDiscountedPriceRange(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectCompositeProductHasRequiredDiscountedPriceRange, { id }));
	}
	
	hasRequiredDiscount(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectCompositeProductHasRequiredDiscount, { id }));
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
