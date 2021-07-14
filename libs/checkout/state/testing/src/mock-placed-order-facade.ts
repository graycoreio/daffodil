import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { DaffCheckoutPlacedOrderFacadeInterface } from '@daffodil/checkout/state';
import { DaffOrder } from '@daffodil/order';

/**
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffCheckoutPlacedOrderFacade implements DaffCheckoutPlacedOrderFacadeInterface {
  placedOrder$: BehaviorSubject<DaffOrder> = new BehaviorSubject(null);
  hasPlacedOrder$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  dispatch(action: Action) {};
}
