import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

export interface DaffProductGridFacadeInterface<T extends DaffProduct = DaffProduct> extends DaffStoreFacade<Action> {
  /**
   * The loading state for retrieving a list of products.
   */
	loading$: Observable<boolean>;
	/**
   * The state for a list of products.
   */
	products$: Observable<T[]>;
}
