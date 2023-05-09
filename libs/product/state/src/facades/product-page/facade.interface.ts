import { Observable } from 'rxjs';

import { DaffOperationStateFacadeInterface } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

import { DaffProductReducerState } from '../../reducers/public_api';

/**
 * A facade for getting state about a particular product.
 */
export interface DaffProductPageFacadeInterface<T extends DaffProduct = DaffProduct> extends DaffOperationStateFacadeInterface<DaffProductReducerState> {
  /**
   * The product loaded for the product page.
   */
  product$: Observable<T>;
}
