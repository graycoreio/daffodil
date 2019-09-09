import { Action } from '@ngrx/store';
import { DaffNewsletter } from './../models/newsletter.model';
import { DaffNewsletterActions, DaffNewsletterActionTypes } from './../actions/newsletter.actions';

const intialState: DaffNewsletter = {
  firstName: "",
  lastName: "",
  address: ""
}

export function newsletter_reducer(state: DaffNewsletter[] = [intialState], action: DaffNewsletterActions) {
  switch (action.type) {
    case DaffNewsletterActionTypes.NewsletterSubscribeAction:
      return [...state, action.payload];
    case DaffNewsletterActionTypes.NewsletterCloseAction:
      return [...state, action.payload];
    case DaffNewsletterActionTypes.NewsletterFailedSubscribeAction:
      return [...state, action.payload];
    default:
      return state;

  }
}