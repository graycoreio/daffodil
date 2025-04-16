import { ActionReducer } from '@ngrx/store';

import {
  daffCompleteOperation,
  daffOperationFailed,
  daffOperationInitialState,
  DaffOperationState,
  daffStartMutation,
} from '@daffodil/core/state';

import {
  DaffNewsletterActions,
  DaffNewsletterActionTypes,
} from './../actions/newsletter.actions';
import { DAFF_NEWSLETTER_STORE_FEATURE_KEY } from './newsletter-store-feature-key';

export interface DaffNewsletterState extends DaffOperationState {
  success: boolean;
}

export interface DaffNewsletterStateRootSlice {
  [DAFF_NEWSLETTER_STORE_FEATURE_KEY]: DaffNewsletterState;
}

export const daffNewsletterReducerInitialState: DaffNewsletterState = {
  ...daffOperationInitialState,
  success: false,
};

export const daffNewsletterStateReducer: ActionReducer<DaffNewsletterState, DaffNewsletterActions> = (state: DaffNewsletterState = daffNewsletterReducerInitialState, action: DaffNewsletterActions): DaffNewsletterState => {
  switch (action.type) {
    case DaffNewsletterActionTypes.Retry:
    case DaffNewsletterActionTypes.Subscribe:
      return daffStartMutation(state);

    case DaffNewsletterActionTypes.SubscribeFailure:
      return daffOperationFailed(action.payload, state);

    case DaffNewsletterActionTypes.Cancel:
      return daffCompleteOperation(state);

    case DaffNewsletterActionTypes.SubscribeSuccess:
      return { ...daffCompleteOperation(state), success: true };

    case DaffNewsletterActionTypes.Reset:
      return daffNewsletterReducerInitialState;

    default:
      return state;
  }
};
