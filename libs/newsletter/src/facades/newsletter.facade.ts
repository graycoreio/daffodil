import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';

import { State, selectDaffNewsletterSuccess, selectDaffNewsletterError, selectDaffNewsletterLoading } from '../selectors/newsletter.selector';
import { DaffNewsletterModule } from '../newsletter.module';
import { DaffNewsletterFacadeInterface } from './newsletter-facade.interface';

@Injectable( {providedIn: DaffNewsletterModule} )
export class DaffNewsletterFacade implements DaffNewsletterFacadeInterface {
  success$ : Observable<boolean> = this.store.select(selectDaffNewsletterSuccess);
  error$: Observable<string> = this.store.select(selectDaffNewsletterError);
  loading$: Observable<boolean> = this.store.select(selectDaffNewsletterLoading);

  constructor(private store: Store<State>){

  }
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}