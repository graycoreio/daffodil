import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core';

import { DaffProduct } from '../../models/product';

export interface DaffProductFacadeInterface<T extends DaffProduct = DaffProduct> extends DaffStoreFacade<Action> {
	loading$: Observable<boolean>;
	/**
	 * @deprecated use getProduct instead.
	 */
	product$: Observable<T>;

	getProduct(id: string): Observable<T>;
	hasDiscount(id: string): Observable<boolean>;
	isOutOfStock(id: string): Observable<boolean>;
}
