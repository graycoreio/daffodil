import { DaffAuthorizeNetReducerState } from './authorize-net/authorize-net-reducer.interface';
import { DAFF_AUTHORIZENET_STORE_FEATURE_KEY } from './authorizenet-store-feature-key';

export interface DaffAuthorizeNetReducersState {
	authorizeNet: DaffAuthorizeNetReducerState;
}

export interface DaffAuthorizeNetStateRootSlice {
  [DAFF_AUTHORIZENET_STORE_FEATURE_KEY]: DaffAuthorizeNetReducersState;
}
