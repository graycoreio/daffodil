import { DaffStateError } from '@daffodil/core/state';

import { DAFF_CONTACT_STORE_FEATURE_KEY } from './contact-store-feature-key';
import {
  DaffContactActions,
  DaffContactActionTypes,
} from '../actions/contact.actions';

export interface DaffContactState {
  success: boolean;
  loading: boolean;
  errors: DaffStateError[];
}

export interface DaffContactStateRootSlice {
  [DAFF_CONTACT_STORE_FEATURE_KEY]: DaffContactState;
}

const initialState: DaffContactState = {
  success: false,
  loading: false,
  errors: [],
};

export function reducer<T>(state: DaffContactState = initialState,
  action: DaffContactActions<T>){
  switch(action.type){
    case DaffContactActionTypes.ContactRetryAction:
    case DaffContactActionTypes.ContactSubmitAction:
      return { ...state, loading: true };
    case DaffContactActionTypes.ContactFailedSubmitAction:
      return { ...state, loading: false, errors: action.payload };
    case DaffContactActionTypes.ContactSuccessSubmitAction:
      return { ...state, success: true, loading: false };
    case DaffContactActionTypes.ContactCancelAction:
      return { ...state, loading: false };
    case DaffContactActionTypes.ContactResetAction:
      return { ...state, ... initialState };
    default:
      return state;
  }
}
