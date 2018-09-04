import { BestSellerGridActionTypes, BestSellerGridActions } from '../actions/best-seller-grid.actions';

export interface State {
  loading: boolean,
  errors: string[]
}

export const initialState: State = {
  loading: false,
  errors: []
};

export function reducer(state = initialState, action: BestSellerGridActions): State {
  switch (action.type) {
    case BestSellerGridActionTypes.BestSellerGridLoadAction:
      return {...state, loading: true};
    case BestSellerGridActionTypes.BestSellerGridLoadSuccessAction:
      return {...state, loading: false};
    case BestSellerGridActionTypes.BestSellerGridLoadFailureAction:
      return {...state, 
        loading: false, 
        errors: state.errors.concat(new Array(action.payload))
      };
    default:
      return state;
  }
}

export const getBestSellerGridLoading = (state: State) => state.loading;
