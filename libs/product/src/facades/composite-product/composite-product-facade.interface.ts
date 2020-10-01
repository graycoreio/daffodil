import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffStoreFacade } from '@daffodil/core';

import { DaffCompositeProductItemOption, DaffCompositeProductItem } from '../../models/composite-product-item';
import { DaffCompositeProduct } from '../../models/composite-product';

export interface DaffCompositeProductFacadeInterface extends DaffStoreFacade<Action> {

	/**
	 * Get the minimum price possible for a composite product regardless of applied options.
	 * @param id the id of the composite product.
	 */
	getMinPossiblePrice(id: string): Observable<number>;

	/**
	 * Get the maximum price possible for a composite product regardless of applied options and including optional items.
	 * @param id the id of the composite product.
	 */
	getMaxPossiblePrice(id: string): Observable<number>;

	/**
	 * Returns whether the composite product has a price range regardless of applied options and including
	 * optional items.
	 * @param id the id of the composite product.
	 */
	possiblyHasPriceRange(id: string): Observable<boolean>;

	/**
	 * Get the minimum price for a composite product excluding optional items and determined by 
	 * currently applied options.
	 * @param id the id of the composite product.
	 */
	getMinPrice(id: string): Observable<number>;

	/**
	 * Get the maximum price for a composite product excluding optional items and determined by
	 * currently applied options.
	 * @param id the id of the composite product.
	 */
	getMaxPrice(id: string): Observable<number>;

	/**
	 * Returns whether the composite product has a price range depending on applied options and excluding
	 * optional items.
	 * @param id the id of the composite product.
	 */
	hasPriceRange(id: string): Observable<boolean>;

	/**
	 * Get the price of a composite product based on the applied product options.
	 * @param id the id of the composite product.
	 */
	getPrice(id: string): Observable<number>;

	/**
	 * Get the minimum discounted price of a composite product based on the applied product options.
	 * @param id the id of the composite product.
	 */
	getMinDiscountedPrice(id: string): Observable<number>;

	/**
	 * Get the maximum discounted price of a composite product based on the applied product options.
	 * @param id the id of the composite product.
	 */
	getMaxDiscountedPrice(id: string): Observable<number>;

	/**
	 * Returns whether the composite product has a discounted price range depending on applied options and excluding
	 * optional items.
	 * @param id the id of the composite product.
	 */
	hasDiscountedPriceRange(id: string): Observable<boolean>;

	/**
	 * Get the discount amount of a composite product based on the applied product options.
	 * @param id the id of the composite product.
	 * @deprecated
	 */
	getDiscountAmount(id: string): Observable<number>;

	/**
	 * Get the discounted price of a composite product based on the applied product options.
	 * @param id the id of the composite product.
	 * @deprecated Use getMinDiscountAmount and getMaxDiscountAmount instead.
 	 */
	getDiscountedPrice(id: string): Observable<number>;

	/**
	 * Returns whether the composite product has a discount based on the applied product options.
	 * @param id the id of the composite product.
	 */
	hasDiscount(id: string): Observable<boolean>;

	/**
	 * Returns the applied options for a composite product.
	 * @param id the id of the composite product.
	 */
	getAppliedOptions(id: string): Observable<Dictionary<DaffCompositeProductItemOption>>;

	/**
	 * Returns whether the item of a composite product is required.
	 * @param id the id of the composite product.
	 * @param item_id the id of the item_id.
	 */
	isItemRequired(id: DaffCompositeProduct['id'], item_id: DaffCompositeProductItem['id']): Observable<boolean>;
}
