import { MemoizedSelector } from '@ngrx/store';
import { DaffStateError } from '@daffodil/core/state';
import { DaffAuthorizeNetReducersState } from '../reducers/authorize-net-reducers.interface';
import { DaffAuthorizeNetReducerState } from '../reducers/authorize-net/authorize-net-reducer.interface';
export interface DaffAuthorizeNetMemoizedSelectors {
    selectAuthorizeNetFeatureState: MemoizedSelector<object, DaffAuthorizeNetReducersState>;
    selectAuthorizeNetState: MemoizedSelector<object, DaffAuthorizeNetReducerState>;
    selectLoading: MemoizedSelector<object, boolean>;
    selectPaymentError: MemoizedSelector<object, DaffStateError>;
    selectAcceptJsLoadError: MemoizedSelector<object, DaffStateError>;
    selectIsAcceptJsLoaded: MemoizedSelector<object, boolean>;
}
export declare const daffAuthorizeNetSelectors: () => DaffAuthorizeNetMemoizedSelectors;
