import { Injectable } from '@angular/core';
import {
  Action,
  Store,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';

import { DaffContactFacadeInterface } from './contact-facade.interface';
import { DaffContactStateModule } from '../contact.module';
import { DaffContactStateRootSlice } from '../reducers/contact.reducer';
import {
  selectDaffContactLoading,
  selectDaffContactError,
  selectDaffContactSuccess,
} from '../selectors/contact.selector';

/**
 * @inheritdoc
 */
@Injectable({ providedIn: DaffContactStateModule })
export class DaffContactFacade implements DaffContactFacadeInterface {
  success$: Observable<boolean> = this.store.select(selectDaffContactSuccess);
  error$: Observable<DaffStateError[]> = this.store.select(selectDaffContactError);
  loading$: Observable<boolean> = this.store.select(selectDaffContactLoading);

  constructor(private store: Store<DaffContactStateRootSlice>) { }
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
