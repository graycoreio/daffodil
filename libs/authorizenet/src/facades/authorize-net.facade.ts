import { Injectable } from '@angular/core';
import { Action, Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffAuthorizeNetModule } from '../authorize-net.module';
import { daffAuthorizeNetSelectors } from '../selectors/authorize-net.selector';
import { DaffAuthorizeNetReducersState } from '../reducers/authorize-net-reducers.interface';
import { DaffAuthorizeNetFacadeInterface } from './authorize-net-facade.interface';

@Injectable({
  providedIn: DaffAuthorizeNetModule
})
export class DaffAuthorizeNetFacade implements DaffAuthorizeNetFacadeInterface {

	isAcceptJsLoaded$: Observable<boolean>;
  loading$: Observable<boolean>;
  paymentError$: Observable<string>;
  acceptJsLoadError$: Observable<string>;
  
  constructor(private store: Store<DaffAuthorizeNetReducersState>) {
		const {
			selectIsAcceptJsLoaded,
			selectLoading,
			selectPaymentError,
			selectAcceptJsLoadError
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
