import { Dictionary } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffConfigurableProduct,
  DaffConfigurableProductVariant,
} from '@daffodil/configurable-product';
import { DaffStoreFacade } from '@daffodil/core/state';

/**
 * An interface for a facade that accesses configurable product state.
 * Exposes many parts of the state for easy access and allows dispatching of actions.
 */
export interface DaffConfigurableProductFacadeInterface extends DaffStoreFacade<Action> {

	/**
	 * All attributes of a configurable product.
	 *
	 * @param id the id of the configurable product.
	 */
	getAllAttributes(id: DaffConfigurableProduct['id']): Observable<Dictionary<string[]>>;

	/**
	 * All variants of a configurable product.
	 *
	 * @param id the id of the configurable product.
	 */
	getAllVariants(id: DaffConfigurableProduct['id']): Observable<DaffConfigurableProductVariant[]>;

	/**
	 * The applied attributes of a configurable product.
	 *
	 * @param id the id of the configurable product.
	 */
	getAppliedAttributes(id: DaffConfigurableProduct['id']): Observable<Dictionary<string>>;

	/**
	 * Get the current minimum price possible based on the applied attributes and remaining variants.
	 *
	 * @param id the id of the configurable product.
	 */
	getMinimumPrice(id: DaffConfigurableProduct['id']): Observable<number>;

	/**
	 * Get the current maximum price possible based on the applied attributes and remaining variants.
	 *
	 * @param id the id of the configurable product.
	 */
	getMaximumPrice(id: DaffConfigurableProduct['id']): Observable<number>;

	/**
	 * Get the current minimum discounted price possible based on the applied attributes and remaining variants.
	 *
	 * @param id the id of the configurable product.
	 */
	getMinimumDiscountedPrice(id: DaffConfigurableProduct['id']): Observable<number>;

	/**
	 * Get the current maximum discounted price possible based on the applied attributes and remaining variants.
	 *
	 * @param id the id of the configurable product.
	 */
	getMaximumDiscountedPrice(id: DaffConfigurableProduct['id']): Observable<number>;

	/**
	 * Get the current minimum percent discount possible based on the applied attributes and remaining variants.
	 *
	 * @param id the id of the configurable product.
	 */
	getMinimumPercentDiscount(id: DaffConfigurableProduct['id']): Observable<number>;

	/**
	 * Get the current maximum percent discount possible based on the applied attributes and remaining variants.
	 *
	 * @param id the id of the configurable product.
	 */
	getMaximumPercentDiscount(id: DaffConfigurableProduct['id']): Observable<number>;

	/**
	 * Returns whether the possible price for the configurable product is a range of different prices
	 *
	 * @param id the id of the configurable product.
	 */
	isPriceRanged(id: DaffConfigurableProduct['id']): Observable<boolean>;

	/**
	 * Returns whether the variants of the configurable product have (a) discount(s)
	 *
	 * @param id the id of the configurable product.
	 */
	hasDiscount(id: DaffConfigurableProduct['id']): Observable<boolean>;

	/**
	 * Selectable configurable product attributes derived from the remaining variants and the order of currently applied attributes.
	 * The remaining variants of the product are derived from the currently applied attributes.
	 *
	 * @param id the id of the configurable product.
	 */
	getSelectableAttributes(id: DaffConfigurableProduct['id']): Observable<Dictionary<string[]>>;

	/**
	 * The variants that match the applied attributes of a configurable product.
	 *
	 * @param id the id of the configurable product.
	 */
	getMatchingVariants(id: DaffConfigurableProduct['id']): Observable<DaffConfigurableProductVariant[]>;
}
