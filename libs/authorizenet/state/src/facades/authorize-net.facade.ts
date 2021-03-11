import { Injectable } from '@angular/core';
import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';

import { DaffAuthorizeNetReducersState } from '../reducers/authorize-net-reducers.interface';
import { daffAuthorizeNetSelectors } from '../selectors/authorize-net.selector';
import { DaffAuthorizeNetFacadeInterface } from './authorize-net-facade.interface';

@Injectable({
  providedIn: 'root',
})
export class DaffAuthorizeNetFacade implements DaffAuthorizeNetFacadeInterface {

  isAcceptJsLoaded$: Observable<boolean>;
  loading$: Observable<boolean>;
  paymentError$: Observable<DaffStateError>;
  acceptJsLoadError$: Observable<DaffStateError>;

  constructor(private store: Store<DaffAuthorizeNetReducersState>) {
    const {
      selectIsAcceptJsLoaded,
      selectLoading,
      selectPaymentError,
      selectAcceptJsLoadError,
    } = daffAuthorizeNetSelectors();

    this.isAcceptJsLoaded$ = this.store.pipe(select(selectIsAcceptJsLoaded));
    this.loading$ = this.store.pipe(select(selectLoading));
    this.paymentError$ = this.store.pipe(select(selectPaymentError));
    this.acceptJsLoadError$ = this.store.pipe(select(selectAcceptJsLoadError));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
