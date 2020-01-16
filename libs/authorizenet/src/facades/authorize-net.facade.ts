import { Injectable } from '@angular/core';
import { Action, Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core';

import { DaffAuthorizeNetModule } from '../authorize-net.module';
import { selectPaymentNonce } from '../selectors/authorize-net.selector';
import { selectPaymentNonceRequestError } from '../selectors/authorize-net.selector';
import { DaffAuthorizeNetReducersState } from '../reducers/authorize-net-reducers.interface';

@Injectable({
  providedIn: DaffAuthorizeNetModule
})
export class DaffAuthorizeNetFacade implements DaffStoreFacade<Action> {

  paymentNonce$: Observable<string>;
  error$: Observable<string>;
  
  constructor(private store: Store<DaffAuthorizeNetReducersState>) {
    this.paymentNonce$ = this.store.pipe(select(selectPaymentNonce));
    this.error$ = this.store.pipe(select(selectPaymentNonceRequestError));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
