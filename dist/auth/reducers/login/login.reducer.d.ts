import { DaffAuthActions } from '../../actions/auth.actions';
import { DaffAuthLoginReducerState } from './login-reducer-state.interface';
import { DaffAuthToken } from '../../models/auth-token';
import { DaffLoginInfo } from '../../models/login-info';
import { DaffAccountRegistration } from '../../models/account-registration';
export declare function daffAuthLoginReducer<T extends DaffLoginInfo, U extends DaffAuthToken, S extends DaffAccountRegistration>(state: DaffAuthLoginReducerState<any>, action: DaffAuthActions<T, U, S>): DaffAuthLoginReducerState<U>;
