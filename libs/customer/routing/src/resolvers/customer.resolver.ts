import { Injectable } from '@angular/core';

import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffCustomerLoad,
  DaffCustomerPageFacade,
} from '@daffodil/customer/state';

/**
 * Dispatches customer load.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerResolver  {
  constructor(
    private facade: DaffCustomerPageFacade,
  ) {}

  resolve(): Observable<boolean> {
    this.facade.dispatch(new DaffCustomerLoad());

    return of(true);
  }
}
