import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

/**
 * A facade for getting state about a particular product's related products.
 */
export interface DaffRelatedProductsFacadeInterface<T extends DaffProduct = DaffProduct> extends DaffStoreFacade<Action> {
  /**
   * A list of related products of the current product.
   */
  relatedProducts$: Observable<T[]>;
}
