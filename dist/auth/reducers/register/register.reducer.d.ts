import { DaffAuthActions } from '../../actions/auth.actions';
import { DaffAuthRegisterReducerState } from './register-reducer-state.interface';
import { DaffAuthToken } from '../../models/auth-token';
import { DaffLoginInfo } from '../../models/login-info';
import { DaffAccountRegistration } from '../../models/account-registration';
export declare function daffAuthRegisterReducer<T extends DaffLoginInfo, U extends DaffAuthToken, S extends DaffAccountRegistration>(state: DaffAuthRegisterReducerState, action: DaffAuthActions<T, U, S>): DaffAuthRegisterReducerState;
