import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffCustomerPaymentClearErrors } from '@daffodil/customer-payment/state';

/**
 * A guard that will clear customer state errors before allowing route deactivation.
 */
@Injectable({ providedIn: 'root' })
export class DaffCustomerPaymentClearErrorsGuard implements CanDeactivate<unknown> {
  constructor(private store: Store<any>) {}

  canDeactivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.store.dispatch(new DaffCustomerPaymentClearErrors());
    return true;
  }
}
