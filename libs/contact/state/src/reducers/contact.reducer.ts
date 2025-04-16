import { ActionReducer } from '@ngrx/store';

import {
  daffCompleteOperation,
  daffOperationFailed,
  daffOperationInitialState,
  DaffOperationState,
  daffStartMutation,
} from '@daffodil/core/state';

import { DAFF_CONTACT_STORE_FEATURE_KEY } from './contact-store-feature-key';
import {
  DaffContactActions,
  DaffContactActionTypes,
} from '../actions/contact.actions';

export interface DaffContactState extends DaffOperationState {
  success: boolean;
}

export interface DaffContactStateRootSlice {
  [DAFF_CONTACT_STORE_FEATURE_KEY]: DaffContactState;
}

export const daffContactReducerInitialState: DaffContactState = {
  ...daffOperationInitialState,
  success: false,
};

export const daffContactStateReducer: ActionReducer<DaffContactState, DaffContactActions> = (state: DaffContactState = daffContactReducerInitialState, action: DaffContactActions): DaffContactState => {
  switch(action.type) {
    case DaffContactActionTypes.Retry:
    case DaffContactActionTypes.Submit:
      return daffStartMutation(state);

    case DaffContactActionTypes.SubmitFailure:
      return daffOperationFailed(action.payload, state);

    case DaffContactActionTypes.SubmitSuccess:
      return { ...daffCompleteOperation(state), success: true };

    case DaffContactActionTypes.Cancel:
      return daffCompleteOperation(state);

    case DaffContactActionTypes.Reset:
      return daffContactReducerInitialState;

    default:
      return state;
  }
};
