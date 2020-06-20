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

  loading$: Observable<boolean>;
  error$: Observable<string>;
  
  constructor(private store: Store<DaffAuthorizeNetReducersState>) {
		const {
			selectLoading,
			selectError
		} = daffAuthorizeNetSelectors();

    this.loading$ = this.store.pipe(select(selectLoading));
    this.error$ = this.store.pipe(select(selectError));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
