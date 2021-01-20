import { DaffAuthorizeNetTokenRequest } from '@daffodil/authorizenet';
import { DaffAuthorizeNetReducerState } from './authorize-net-reducer.interface';
import { DaffAuthorizeNetActions } from '../../actions/authorizenet.actions';
export declare const initialState: DaffAuthorizeNetReducerState;
export declare function daffAuthorizeNetReducer<T extends DaffAuthorizeNetTokenRequest>(state: DaffAuthorizeNetReducerState, action: DaffAuthorizeNetActions<T>): DaffAuthorizeNetReducerState;
