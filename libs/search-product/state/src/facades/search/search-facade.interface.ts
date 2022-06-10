import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

/**
 * Exposes the search state selectors.
 */
export interface DaffSearchProductFacadeInterface extends DaffStoreFacade<Action> {
  /**
   * The products returned in the most recent search.
   */
  productResults$: Observable<DaffProduct[]>;
}
