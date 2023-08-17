import { DaffAuthorizeNetReducerState } from './authorize-net-reducer.interface';

export const daffAuthorizeNetReducerInitialState: DaffAuthorizeNetReducerState = {
  isAcceptLoaded: false,
  paymentError: null,
  acceptJsLoadError: null,
  loading: false,
};
