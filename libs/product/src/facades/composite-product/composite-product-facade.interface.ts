import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffStoreFacade } from '@daffodil/core';

import { DaffCompositeProductItemOption } from '../../models/composite-product-item';

export interface DaffCompositeProductFacadeInterface extends DaffStoreFacade<Action> {

	/**
	 * Get the price of a composite product based on the applied product options.
	 * @param id the id of the composite product.
	 */
	getPrice(id: string): Observable<number>;

	/**
	 * Get the discount amount of a composite product based on the applied product options.
	 * @param id the id of the composite product.
	 */
	getDiscountAmount(id: string): Observable<number>;

	/**
	 * Get the discounted price of a composite product based on the applied product options.
	 * @param id the id of the composite product.
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
	getAppliedOptions(id: string): Observable<Dictionary<DaffCompositeProductItemOption['id']>>;
}
