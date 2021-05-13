import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

/**
 * A facade for getting state about the product for the product page.
 */
export interface DaffProductPageFacadeInterface<T extends DaffProduct = DaffProduct> extends DaffStoreFacade<Action> {
	/**
	 * Gets the currently selected product.
	 */
	product$: Observable<T>;
}
