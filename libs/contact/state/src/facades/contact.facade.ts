import { Injectable } from '@angular/core';
import {
  Action,
  Store,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffContactStateModule } from '../contact.module';
import {
  DaffContactFeatureState,
  selectDaffContactLoading,
  selectDaffContactError,
  selectDaffContactSuccess,
} from '../selectors/contact.selector';
import { DaffContactFacadeInterface } from './contact-facade.interface';

@Injectable({ providedIn: DaffContactStateModule })
export class DaffContactFacade implements DaffContactFacadeInterface {
  success$: Observable<boolean> = this.store.select(selectDaffContactSuccess);
  error$: Observable<string[]> = this.store.select(selectDaffContactError);
  loading$: Observable<boolean> = this.store.select(selectDaffContactLoading);

  constructor(private store: Store<DaffContactFeatureState>) { }
  dispatch(action: Action) {
	  this.store.dispatch(action);
  }
}
