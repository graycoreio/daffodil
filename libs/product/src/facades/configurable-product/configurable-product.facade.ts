import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select, Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffProductModule } from '../../product.module';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { DaffProduct } from '../../models/product';
import { getDaffProductSelectors } from '../../selectors/public_api';
import { DaffConfigurableProductFacadeInterface } from './configurable-product-facade.interface';
import { DaffConfigurableProductVariant } from '../../models/configurable-product';

/**
 * A facade for accessing configurable product state from an application component.
 */
@Injectable({
  providedIn: DaffProductModule
})
export class DaffConfigurableProductFacade<T extends DaffProduct = DaffProduct> implements DaffConfigurableProductFacadeInterface {

	selectors = getDaffProductSelectors<T>();
	
	constructor(private store: Store<DaffProductReducersState<T>>) {}
	
	/**
	 * All attributes of a configurable product.
	 * @param id the id of the configurable product.
	 */
	getAllAttributes(id: string): Observable<Dictionary<string[]>> {
		return this.store.pipe(select(this.selectors.selectAllConfigurableProductAttributes, { id }));
	}
	
	/**
	 * The applied attributes of a configurable product.
	 * @param id the id of the configurable product.
	 */
	getAppliedAttributes(id: string): Observable<Dictionary<string>> {
		return this.store.pipe(select(this.selectors.selectConfigurableProductAppliedAttributesAsDictionary, { id }));
	}

	/**
	 * Get the current minimum price possible based on the applied attributes and remaining variants.
	 * @param id the id of the configurable product.
	 */
	getMinimumPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectConfigurableProductMinimumPrice, { id }));
	}

	/**
	 * Get the current maximum price possible based on the applied attributes and remaining variants.
	 * @param id the id of the configurable product.
	 */
	getMaximumPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectConfigurableProductMaximumPrice, { id }));
	}

	/**
	 * Get the current minimum discounted price possible based on the applied attributes and remaining variants.
	 * @param id the id of the configurable product.
	 */
	getMinimumDiscountedPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectConfigurableProductMinimumDiscountedPrice, { id }));
	}

	/**
	 * Get the current maximum discounted price possible based on the applied attributes and remaining variants.
	 * @param id the id of the configurable product.
	 */
	getMaximumDiscountedPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectConfigurableProductMaximumDiscountedPrice, { id }));
	}

	/**
	 * Get the current minimum percent discount possible based on the applied attributes and remaining variants.
	 * @param id the id of the configurable product.
	 */
	getMinimumPercentDiscount(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectConfigurableProductMinimumPercentDiscount, { id }));
	}

	/**
	 * Get the current maximum percent discount possible based on the applied attributes and remaining variants.
	 * @param id the id of the configurable product.
	 */
	getMaximumPercentDiscount(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectConfigurableProductMaximumPercentDiscount, { id }));
	}

	/**
	 * Returns whether the possible price for the configurable product is a range of different prices
	 * @param id the id of the configurable product.
	 */
	isPriceRanged(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.isConfigurablePriceRanged, { id }));
	}

	/**
	 * Returns whether the variants of the configurable product have (a) discount(s)
	 * @param id the id of the configurable product.
	 */
	hasDiscount(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectConfigurableProductHasDiscount, { id }));
	}

	/**
	 * Selectable configurable product attributes derived from the remaining variants and the order of currently applied attributes.
	 * The remaining variants of the product are derived from the currently applied attributes.
	 * @param id the id of the configurable product.
	 */
	getSelectableAttributes(id: string): Observable<Dictionary<string[]>> {
		return this.store.pipe(select(this.selectors.selectSelectableConfigurableProductAttributes, { id }));
	}

	/**
	 * The variants that match the applied attributes of a configurable product.
	 * @param id the id of the configurable product.
	 */
	getMatchingVariants(id: string): Observable<DaffConfigurableProductVariant[]> {
		return this.store.pipe(select(this.selectors.selectMatchingConfigurableProductVariants, { id }));
	}

  /**
   * Dispatches an action to the rxjs action stream.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
