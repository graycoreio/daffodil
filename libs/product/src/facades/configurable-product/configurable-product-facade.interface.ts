import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffStoreFacade } from '@daffodil/core';

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
	 * Returns whether the possible price for the configurable product is a range of different prices
	 * @param id the id of the configurable product.
	 */
	isPriceRanged(id: string): Observable<boolean>;

	/**
	 * Selectable configurable product attributes derived from the remaining variants and the order of currently applied attributes.
	 * The remaining variants of the product are derived from the currently applied attributes.
	 * @param id the id of the configurable product.
	 */
	getSelectableAttributes(id: string): Observable<Dictionary<string[]>>;
}
