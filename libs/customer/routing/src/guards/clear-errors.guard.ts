import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffCustomerClearErrors } from '@daffodil/customer/state';

/**
 * A guard that will clear customer state errors before allowing route deactivation.
 */
@Injectable({ providedIn: 'root' })
export class DaffClearErrorsGuard implements CanDeactivate<unknown> {
  constructor(private store: Store<any>) {}

  canDeactivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.store.dispatch(new DaffCustomerClearErrors());
    return true;
  }
}
