import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffConfigurableProductVariant } from '../../models/configurable-product';

/**
 * An interface for a facade that accesses configurable product state.
 */
export interface DaffConfigurableProductFacadeInterface extends DaffStoreFacade<Action> {

	/**
	 * All attributes of a configurable product.
	 * @param id the id of the configurable product.
	 */
	getAllAttributes(id: string): Observable<Dictionary<string[]>>;

	/**
	 * The applied attributes of a configurable product.
	 * @param id the id of the configurable product.
	 */
	getAppliedAttributes(id: string): Observable<Dictionary<string>>;

	/**
	 * Get the current minimum price possible based on the applied attributes and remaining variants.
	 * @param id the id of the configurable product.
	 */
	getMinimumPrice(id: string): Observable<number>;

	/**
	 * Get the current maximum price possible based on the applied attributes and remaining variants.
	 * @param id the id of the configurable product.
	 */
	getMaximumPrice(id: string): Observable<number>;

	/**
	 * Get the current minimum discounted price possible based on the applied attributes and remaining variants.
	 * @param id the id of the configurable product.
	 */
	getMinimumDiscountedPrice(id: string): Observable<number>;

	/**
	 * Get the current maximum discounted price possible based on the applied attributes and remaining variants.
	 * @param id the id of the configurable product.
	 */
	getMaximumDiscountedPrice(id: string): Observable<number>;

	/**
	 * Get the current minimum percent discount possible based on the applied attributes and remaining variants.
	 * @param id the id of the configurable product.
	 */
	getMinimumPercentDiscount(id: string): Observable<number>;

	/**
	 * Get the current maximum percent discount possible based on the applied attributes and remaining variants.
	 * @param id the id of the configurable product.
	 */
	getMaximumPercentDiscount(id: string): Observable<number>;

	/**
	 * Returns whether the possible price for the configurable product is a range of different prices
	 * @param id the id of the configurable product.
	 */
	isPriceRanged(id: string): Observable<boolean>;

	/**
	 * Returns whether the variants of the configurable product have (a) discount(s)
	 * @param id the id of the configurable product.
	 */
	hasDiscount(id: string): Observable<boolean>;

	/**
	 * Selectable configurable product attributes derived from the remaining variants and the order of currently applied attributes.
	 * The remaining variants of the product are derived from the currently applied attributes.
	 * @param id the id of the configurable product.
	 */
	getSelectableAttributes(id: string): Observable<Dictionary<string[]>>;

	/**
	 * The variants that match the applied attributes of a configurable product.
	 * @param id the id of the configurable product.
	 */
	getMatchingVariants(id: string): Observable<DaffConfigurableProductVariant[]>;
}
