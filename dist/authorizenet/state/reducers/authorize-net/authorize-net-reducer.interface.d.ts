import { DaffStateError } from '@daffodil/core/state';
export interface DaffAuthorizeNetReducerState {
    isAcceptLoaded: boolean;
    paymentError: DaffStateError;
    acceptJsLoadError: DaffStateError;
    loading: boolean;
}
