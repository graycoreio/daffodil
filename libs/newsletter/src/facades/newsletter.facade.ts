import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select, Action } from '@ngrx/store';

import { DaffNewsletter } from '../models/newsletter.model';
import { DaffNewsletterModule } from '../newsletter.module';
import { isObject } from 'util';

import { selectNewsletterFirstName, selectNewsletterLastName, selectNewsletterAddress } from '../selectors/newsletter.selector';


@Injectable()
export class DaffNewsletterFacade{
  firstName$ = this.store.select(selectNewsletterFirstName);
  lastName$ = this.store.select(selectNewsletterLastName);
  address$ = this.store.select(selectNewsletterAddress);


  constructor(private store: Store<DaffNewsletter>){

  }
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}