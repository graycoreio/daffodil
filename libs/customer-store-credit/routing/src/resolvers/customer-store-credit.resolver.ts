import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffCustomerStoreCreditLoad,
  DaffCustomerStoreCreditPageFacade,
} from '@daffodil/customer-store-credit/state';

/**
 * Dispatches customer load.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerStoreCreditResolver implements Resolve<Observable<boolean>> {
  constructor(
    private facade: DaffCustomerStoreCreditPageFacade,
  ) {}

  resolve(): Observable<boolean> {
    this.facade.dispatch(new DaffCustomerStoreCreditLoad());

    return of(true);
  }
}
