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

	/**
	 * Get the minimum price for a composite product, excluding optional items and regardless of applied options.
	 * This would be useful for a quick preview of a product.
	 * @param id the id of the composite product.
	 */
	getMinPossiblePrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMinPossiblePrice, { id }));
	}

	/**
   * Get the maximum price for a composite product, including optional items and regardless of applied options.
	 * This would be useful for a quick preview of a product.
	 * @param id the id of the composite product.
	 */
	getMaxPossiblePrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMaxPossiblePrice, { id }));
	}

	/**
	 * Returns whether the composite product could have a price range in any configuration,
	 * including the optional items and regardless of the current item option selection.
	 * This could be useful for a quick preview of the product.
	 * @param id the id of the composite product.
	 */
	possiblyHasPriceRange(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectCompositeProductPossiblyHasPriceRange, { id }));
	}

	/**
	 * Get the minimum discounted price for a composite product, excluding optional items and regardless of the current selection of item options.
	 * This could be useful for a quick preview of the product.
	 * @param id the id of the composite product.
	 */
	getMinPossibleDiscountedPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMinPossibleDiscountedPrice, { id }));
	}

	/**
	 * Get the maximum discounted price for a composite product, including optional items and regardless of the current selection of item options.
	 * This could be useful for a quick preview of the product.
	 * @param id the id of the composite product.
	 */
	getMaxPossibleDiscountedPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMaxPossibleDiscountedPrice, { id }));
	}

	/**
	 * Selector for whether the composite product could have a discounted price range in any configuration,
	 * including the optional items and regardless of the current item option selection.
	 * This could be useful for a quick preview of the product.
	 * @param id the id of the composite product.
	 */
	possiblyHasDiscountedPriceRange(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectCompositeProductPossiblyHasDiscountedPriceRange, { id }));
	}

	/**
	 * Returns whether the minimum and maximum composite product discounted prices equal the minimum and maximum
	 * pre discount prices, including optional items. Note: this intentionally misses a usecase where there is a discount
	 * in between the minimum and maximum prices. This is because the resulting UI would be non-sensical to the customer for
	 * this usecase. For example, if we have a set of item options' prices: (price, discount), (10, 0), (20, 0), (15, 4).
	 * While it is true that there is a discounted price (15, 4), the user would see the original price range (10-20) followed
	 * by the discounted price range (10-20). This would happen, because the 15-4=11 price would fall between the two extremes
	 * of the discounted prices and it wouldn't make sense to the customer what is happening.
	 * @param id the id of the composite product.
	 */
	possiblyHasDiscount(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectCompositeProductPossiblyHasDiscount, { id }));
	}

	/**
	 * Get the minimum price for a composite product, excluding unselected optional items and depending on the current selection of item options.
	 * This will be equal to getMaxRequiredItemPrice when all required items already have default selections.
	 * @param id the id of the composite product.
	 */
	getMinRequiredItemPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMinRequiredItemPrice, { id }));
	}

	/**
	 * Get the maximum price for a composite product, excluding unselected optional items and depending on the current selection of item options.
	 * This will be equal to getMinRequiredItemPrice when all required items already have default selections.
	 * @param id the id of the composite product.
	 */
	getMaxRequiredItemPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMaxRequiredItemPrice, { id }));
	}

	/**
	 * Selector for whether the composite product has a price range, excluding unselected optional items and based on the currently applied item options.
	 * @param id the id of the composite product.
	 */
	hasRequiredItemPriceRange(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectCompositeProductHasRequiredItemPriceRange, { id }));
	}

	/**
	 * Get the minimum discounted price for a composite product, excluding unselected optional items and depending on the current selection of item options.
	 * This would be used for a composite product that has required items without default selections or just the final price of a product with no price range.
	 * @param id the id of the composite product.
	 */
	getMinRequiredItemDiscountedPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMinRequiredItemDiscountedPrice, { id }));
	}

	/**
	 * Get the maximum discounted price for a composite product, excluding unselected optional items and depending on the current selection of item options.
	 * This would be used for a composite product that has required items without default selections or just the final price of a product with no price range.
	 * @param id the id of the composite product.
	 */
	getMaxRequiredItemDiscountedPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectCompositeProductMaxRequiredItemDiscountedPrice, { id }));
	}

	/**
	 * Returns whether the composite product has a discounted price range, excluding unselected optional items and based on the currently applied item options.
	 * @param id the id of the composite product.
	 */
	hasRequiredItemDiscountedPriceRange(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectCompositeProductHasRequiredItemDiscountedPriceRange, { id }));
	}

	/**
	 * Returns whether the minimum and maximum composite product discounted prices equal the minimum and maximum
	 * pre discount prices, excluding unselected optional items. Note: this intentionally misses a usecase where there is a discount
	 * in between the minimum and maximum prices. This is because the resulting UI would be non-sensical to the customer for
	 * this usecase. For example, if we have a set of item options' prices: (price, discount), (10, 0), (20, 0), (15, 4).
	 * While it is true that there is technically a discounted price, the user would see the original price range (10-20) followed
	 * by the discounted price range (10-20). This would happen, because the 15-4=11 price would fall between the two extremes
	 * of the discounted prices and it wouldn't make sense to the customer what is happening.
	 * @param id the id of the composite product.
	 */
	hasRequiredItemDiscount(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectCompositeProductHasRequiredItemDiscount, { id }));
	}

	/**
	 * Returns the applied options for a composite product.
	 * @param id the id of the composite product.
	 */
	getAppliedOptions(id: string): Observable<Dictionary<DaffCompositeProductItemOption>> {
		return this.store.pipe(select(this.selectors.selectCompositeProductAppliedOptions, { id }));
	}

	/**
	 * Returns whether the item of a composite product is required.
	 * @param id the id of the composite product.
	 * @param item_id the id of the item_id.
	 */
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
