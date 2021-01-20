import { MemoizedSelector } from '@ngrx/store';
import { DaffPaypalReducerState } from '../reducers/paypal/paypal-reducer.interface';
import { DaffPaypalReducersState } from '../reducers/paypal-reducers.interface';
import { DaffPaypalTokenResponse } from '../models/paypal-token-response';
export interface DaffPaypalMemoizedSelectors<T extends DaffPaypalTokenResponse = DaffPaypalTokenResponse> {
    selectPaypalFeatureState: MemoizedSelector<object, DaffPaypalReducersState<T>>;
    selectPaypalState: MemoizedSelector<object, DaffPaypalReducerState<T>>;
    selectPaypalTokenResponse: MemoizedSelector<object, T>;
    selectPaypalLoading: MemoizedSelector<object, boolean>;
    selectPaypalError: MemoizedSelector<object, string>;
    selectPaypalToken: MemoizedSelector<object, string>;
    selectPaypalStartUrl: MemoizedSelector<object, string>;
    selectPaypalEditUrl: MemoizedSelector<object, string>;
}
export declare const getDaffPaypalSelectors: <T extends DaffPaypalTokenResponse = DaffPaypalTokenResponse>() => DaffPaypalMemoizedSelectors<T>;
