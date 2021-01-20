import { DaffPaypalReducerState } from './paypal-reducer.interface';
import { DaffPaypalTokenResponse } from '../../models/paypal-token-response';
import { DaffPaypalActions } from '../../actions/paypal.actions';
import { DaffPaypalTokenRequest } from '../../models/paypal-token-request';
export declare const initialState: DaffPaypalReducerState<any>;
export declare function daffPaypalReducer<T extends DaffPaypalTokenRequest, V extends DaffPaypalTokenResponse>(state: DaffPaypalReducerState<V>, action: DaffPaypalActions<T, V>): DaffPaypalReducerState<V>;
