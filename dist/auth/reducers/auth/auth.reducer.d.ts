import { DaffAuthActions } from '../../actions/auth.actions';
import { DaffAuthReducerState } from './auth-reducer-state.interface';
import { DaffAuthToken } from '../../models/auth-token';
import { DaffLoginInfo } from '../../models/login-info';
import { DaffAccountRegistration } from '../../models/account-registration';
export declare function daffAuthReducer<T extends DaffLoginInfo, U extends DaffAuthToken, S extends DaffAccountRegistration>(state: DaffAuthReducerState, action: DaffAuthActions<T, U, S>): DaffAuthReducerState;
