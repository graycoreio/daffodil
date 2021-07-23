import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

/**
 * A facade for getting state about a particular product.
 */
export interface DaffProductPageFacadeInterface<T extends DaffProduct = DaffProduct> extends DaffStoreFacade<Action> {
	/**
	 * Whether a product is being loaded.
	 */
	loading$: Observable<boolean>;

  /**
   * The product loaded for the product page.
   */
  product$: Observable<T>;
}
