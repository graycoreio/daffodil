import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

/**
 * A facade for getting state about a particular product's upsell products.
 */
export interface DaffUpsellProductsFacadeInterface<T extends DaffProduct = DaffProduct> extends DaffStoreFacade<Action> {
	/**
	 * A list of upsell products of the current product.
	 */
	upsellProducts$: Observable<T[]>;
}
