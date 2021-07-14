import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffOrder } from '@daffodil/order';

export interface DaffCheckoutPlacedOrderFacadeInterface<T extends DaffOrder = DaffOrder> extends DaffStoreFacade<Action> {
  placedOrder$: Observable<T>;
  hasPlacedOrder$: Observable<boolean>;
}
