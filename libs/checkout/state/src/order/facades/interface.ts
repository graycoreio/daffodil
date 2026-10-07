import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffCheckoutOrderResult } from '@daffodil/checkout';
import { DaffStoreFacade } from '@daffodil/core/state';

export interface DaffCheckoutOrderFacadeInterface<
  T extends DaffCheckoutOrderResult = DaffCheckoutOrderResult,
> extends DaffStoreFacade<Action> {
  orderResult$: Observable<T>;
  hasOrderResult$: Observable<boolean>;
}
