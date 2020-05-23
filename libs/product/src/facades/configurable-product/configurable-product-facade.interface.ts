import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffStoreFacade } from '@daffodil/core';

export interface DaffConfigurableProductFacadeInterface extends DaffStoreFacade<Action> {

	/**
	 * The applied attributes of a configurable product.
	 * @param id the id of the configurable product.
	 */
	getAppliedAttributes(id: string): Observable<Dictionary<string>>;

	/**
	 * Get the current price/price-range of a configurable product based on the applied
	 * attributes.
	 * @param id the id of the configurable product.
	 */
	getPrice(id: string): Observable<string>;

	/**
	 * The attributes that have not been determined by selected attributes. These are determined
	 * by the variants that are still possible.
	 * @param id the id of the configurable product.
	 */
	getUndeterminedAttributes(id: string): Observable<Dictionary<string[]>>;
}
