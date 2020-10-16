import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core/state';

import { DaffProduct } from '../../models/product';

/**
 * A facade for getting state about a particular product.
 */
export interface DaffProductFacadeInterface<T extends DaffProduct = DaffProduct> extends DaffStoreFacade<Action> {
	/**
	 * Whether a product is being loaded.
	 */
	loading$: Observable<boolean>;
	/**
	 * deprecated - use getProduct instead.
	 * @deprecated use getProduct instead.
	 */
	product$: Observable<T>;

	/**
	 * Get a product.
	 * @param id a product id
	 */
	getProduct(id: string): Observable<T>;

	/**
	 * Whether a particular product has a discount.
	 * @param id a product id
	 */
	hasDiscount(id: string): Observable<boolean>;

	/**
	 * Get the discount amount of a product.
	 * @param id a product id
	 */
	getDiscountAmount(id: string): Observable<number>;

	/**
	 * Get the discount percent of a product.
	 * @param id a product id
	 */
	getDiscountPercent(id: string): Observable<number>;

	/**
	 * Whether a product is out of stock.
	 * @param id a product id
	 */
	isOutOfStock(id: string): Observable<boolean>;
}
