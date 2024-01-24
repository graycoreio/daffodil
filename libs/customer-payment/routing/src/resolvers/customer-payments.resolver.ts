import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffCustomerPaymentList,
  DaffCustomerPaymentPageFacade,
} from '@daffodil/customer-payment/state';

/**
 * Dispatches customer load.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerPaymentResolver  {
  constructor(
    private facade: DaffCustomerPaymentPageFacade,
  ) {}

  resolve(): Observable<boolean> {
    this.facade.dispatch(new DaffCustomerPaymentList());

    return of(true);
  }
}
