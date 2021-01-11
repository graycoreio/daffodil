import { BehaviorSubject } from 'rxjs';
import { Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { Injectable } from '@angular/core';

import { DaffOrder, DaffOrderTotal } from '@daffodil/order';
import { DaffOrderFacadeInterface } from '@daffodil/order/state';

@Injectable({providedIn: 'root'})
export class MockDaffOrderFacade implements DaffOrderFacadeInterface {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  errors$: BehaviorSubject<string[]> = new BehaviorSubject([]);

  orders$: BehaviorSubject<DaffOrder[]> = new BehaviorSubject([]);
  orderIds$: BehaviorSubject<(string | number)[]> = new BehaviorSubject([]);
  orderCount$: BehaviorSubject<number> = new BehaviorSubject(null);
  orderEntities$: BehaviorSubject<Dictionary<DaffOrder>> = new BehaviorSubject({});

  placedOrder$: BehaviorSubject<DaffOrder> = new BehaviorSubject(null);
  hasPlacedOrder$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  getOrder$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrder> {
    return new BehaviorSubject(null)
  }

  getTotals$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrder['totals']> {
    return new BehaviorSubject([])
  }

  getAppliedCodes$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrder['applied_codes']> {
    return new BehaviorSubject([])
  }

  getItems$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrder['items']> {
    return new BehaviorSubject([])
  }

  getBillingAddresses$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrder['billing_addresses']> {
    return new BehaviorSubject([])
  }

  getShippingAddresses$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrder['shipping_addresses']> {
    return new BehaviorSubject([])
  }

  getShipments$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrder['shipments']> {
    return new BehaviorSubject([])
  }

  getPayment$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrder['payment']> {
    return new BehaviorSubject(null)
  }

  getInvoices$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrder['invoices']> {
    return new BehaviorSubject([])
  }

  getCredits$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrder['credits']> {
    return new BehaviorSubject([])
  }
  getGrandTotal$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrderTotal> {
    return new BehaviorSubject(null)
  };
  getSubtotal$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrderTotal> {
    return new BehaviorSubject(null)
  };
  getShippingTotal$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrderTotal> {
    return new BehaviorSubject(null)
  };
  getDiscountTotal$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrderTotal> {
    return new BehaviorSubject(null)
  };
  hasDiscount$(orderId: DaffOrder['id']): BehaviorSubject<boolean> {
    return new BehaviorSubject(false);
  };
  getTaxTotal$(orderId: DaffOrder['id']): BehaviorSubject<DaffOrderTotal> {
    return new BehaviorSubject(null)
  };

  dispatch(action: Action) {};
}
