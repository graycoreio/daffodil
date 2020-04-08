import { Injectable } from '@angular/core';
import { Action, Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core';

import { DaffAuthorizeNetModule } from '../authorize-net.module';
import { getDaffAuthorizeNetSelectors } from '../selectors/authorize-net.selector';
import { DaffAuthorizeNetReducersState } from '../reducers/authorize-net-reducers.interface';
import { DaffAuthorizeNetTokenResponse } from '../models/response/authorize-net-token-response';

@Injectable({
  providedIn: DaffAuthorizeNetModule
})
export class DaffAuthorizeNetFacade<T extends DaffAuthorizeNetTokenResponse> implements DaffStoreFacade<Action> {

	authorizeTokenResponse$: Observable<T>
  tokenNonce$: Observable<string>;
  error$: Observable<string>;
  
  constructor(private store: Store<DaffAuthorizeNetReducersState<T>>) {
		const {
			selectTokenResponse,
			selectToken,
			selectError
		} = getDaffAuthorizeNetSelectors<T>();

    this.authorizeTokenResponse$ = this.store.pipe(select(selectTokenResponse));
    this.tokenNonce$ = this.store.pipe(select(selectToken));
    this.error$ = this.store.pipe(select(selectError));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
