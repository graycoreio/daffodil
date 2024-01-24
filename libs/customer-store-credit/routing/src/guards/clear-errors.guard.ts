import { Injectable } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffCustomerStoreCreditClearErrors } from '@daffodil/customer-store-credit/state';

/**
 * A guard that will clear customer state errors before allowing route deactivation.
 */
@Injectable({ providedIn: 'root' })
export class DaffCustomerStoreCreditClearErrorsGuard  {
  constructor(private store: Store<any>) {}

  canDeactivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.store.dispatch(new DaffCustomerStoreCreditClearErrors());
    return true;
  }
}
