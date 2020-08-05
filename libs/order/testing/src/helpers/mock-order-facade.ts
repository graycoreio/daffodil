import { BehaviorSubject } from 'rxjs';
import { Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffOrderFacadeInterface, DaffOrder } from '@daffodil/order';

export class MockDaffOrderFacade implements DaffOrderFacadeInterface {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  errors$: BehaviorSubject<string[]> = new BehaviorSubject([]);

  orders$: BehaviorSubject<DaffOrder[]> = new BehaviorSubject([]);
  orderIds$: BehaviorSubject<(string | number)[]> = new BehaviorSubject([]);
  orderCount$: BehaviorSubject<number> = new BehaviorSubject(null);
  orderEntities$: BehaviorSubject<Dictionary<DaffOrder>> = new BehaviorSubject({});

  placedOrder$: BehaviorSubject<DaffOrder> = new BehaviorSubject(null);
  hasPlacedOrder$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  totals$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrder['totals']> {
    return new BehaviorSubject([])
  }

  appliedCodes$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrder['applied_codes']> {
    return new BehaviorSubject([])
  }

  items$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrder['items']> {
    return new BehaviorSubject([])
  }

  addresses$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrder['addresses']> {
    return new BehaviorSubject([])
  }

  shipments$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrder['shipments']> {
    return new BehaviorSubject([])
  }

  payment$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrder['payment']> {
    return new BehaviorSubject(null)
  }

  invoices$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrder['invoices']> {
    return new BehaviorSubject([])
  }

  credits$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrder['credits']> {
    return new BehaviorSubject([])
  }

  dispatch(action: Action) {};
}
