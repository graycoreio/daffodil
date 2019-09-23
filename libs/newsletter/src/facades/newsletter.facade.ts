import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';

import { State, selectDaffNewsletterSuccess, selectDaffNewsletterError, selectDaffNewsletterLoading } from '../selectors/newsletter.selector';
import { DaffStoreFacade } from '@daffodil/core';


@Injectable()
export class DaffNewsletterFacade implements DaffStoreFacade<Action>{
  success$ : Observable<boolean> = this.store.select(selectDaffNewsletterSuccess);
  error$: Observable<string> = this.store.select(selectDaffNewsletterError);
  loading$: Observable<boolean> = this.store.select(selectDaffNewsletterLoading);

  constructor(private store: Store<State>){

  }
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}