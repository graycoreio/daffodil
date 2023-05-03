import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffCartStoreCreditClearErrors } from '@daffodil/cart-store-credit/state';

/**
 * A guard that will clear cart state errors before allowing route deactivation.
 */
@Injectable({ providedIn: 'root' })
export class DaffCartStoreCreditClearErrorsGuard implements CanDeactivate<unknown> {
  constructor(private store: Store<any>) {}

  canDeactivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.store.dispatch(new DaffCartStoreCreditClearErrors());
    return true;
  }
}
