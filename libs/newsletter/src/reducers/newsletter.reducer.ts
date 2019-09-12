import { Action } from '@ngrx/store';
import { DaffNewsletter } from './../models/newsletter.model';
import { DaffNewsletterActions, DaffNewsletterActionTypes } from './../actions/newsletter.actions';

export interface DaffNewsletterState {
  success: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: DaffNewsletterState = {
  success: false,
  loading: false,
  error: null
}

export function reducer(state: DaffNewsletterState = initialState, action: DaffNewsletterActions) {
  switch (action.type) {
    case DaffNewsletterActionTypes.NewsletterRetry:
    case DaffNewsletterActionTypes.NewsletterSubscribeAction:
      return {...state, loading: true};
    case DaffNewsletterActionTypes.NewsletterFailedSubscribeAction:
      return { ...state, loading: false, error: action.payload };
    case DaffNewsletterActionTypes.NewsletterCancelAction:
      return { ...state, loading: false};
    case DaffNewsletterActionTypes.NewsletterSuccessSubscribeAction:
        return { ...state, success: true, loading: false};
    case DaffNewsletterActionTypes.NewsletterReset:
        return {...state, ...initialState};
    default:
      return state;
  }
}