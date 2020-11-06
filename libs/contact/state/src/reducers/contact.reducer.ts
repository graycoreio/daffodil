import { DaffContactActions, DaffContactActionTypes} from '../actions/contact.actions';

export interface DaffContactState {
  success: boolean;
  loading: boolean;
  errors: string[] | null;
}

const initialState: DaffContactState = {
  success: false,
  loading: false,
  errors: null
}

export function reducer<T>(state: DaffContactState = initialState, 
  action: DaffContactActions<T>){
    switch(action.type){
      case DaffContactActionTypes.ContactRetryAction:
      case DaffContactActionTypes.ContactSubmitAction:
        return {...state, loading: true};
      case DaffContactActionTypes.ContactFailedSubmitAction:
        return {...state, loading: false, errors: action.payload};
      case DaffContactActionTypes.ContactSuccessSubmitAction:
        return {...state, success: true, loading: false}
      case DaffContactActionTypes.ContactCancelAction:
        return {...state, loading: false};
      case DaffContactActionTypes.ContactResetAction:
        return {...state, ... initialState};
      default:
        return state;
    }
  }