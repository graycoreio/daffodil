import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';

import { DaffNewsletterFeatureState, selectDaffNewsletterSuccess, selectDaffNewsletterError, selectDaffNewsletterLoading } from '../selectors/newsletter.selector';
import { DaffNewsletterStateModule } from '../newsletter-state.module';
import { DaffNewsletterFacadeInterface } from './newsletter-facade.interface';

@Injectable( {providedIn: DaffNewsletterStateModule} )
export class DaffNewsletterFacade implements DaffNewsletterFacadeInterface {
  success$ : Observable<boolean> = this.store.select(selectDaffNewsletterSuccess);
  error$: Observable<string> = this.store.select(selectDaffNewsletterError);
  loading$: Observable<boolean> = this.store.select(selectDaffNewsletterLoading);

  constructor(private store: Store<DaffNewsletterFeatureState>){

  }
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}