import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffOrder } from '@daffodil/order';

export interface DaffCheckoutPlacedOrderFacadeInterface<T extends DaffOrder = DaffOrder> extends DaffStoreFacade<Action> {
  /**
   * The most recently placed order (if any).
   */
  placedOrder$: Observable<T>;
  /**
   * Whether there is a placed order.
   */
  hasPlacedOrder$: Observable<boolean>;
}
