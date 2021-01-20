import { MemoizedSelector } from '@ngrx/store';
import { AuthSelectors } from './auth/auth.selector';
import { DaffAuthLoginSelectors } from './login/login.selector';
import { DaffAuthRegisterSelectors } from './register/register.selector';
import { DaffAuthToken } from '../models/auth-token';
import { DaffAuthFeatureState } from '../reducers/public_api';
export interface DaffAuthSelectors<T extends DaffAuthToken> extends DaffAuthRegisterSelectors, DaffAuthLoginSelectors<T>, AuthSelectors {
    selectAuthFeatureState: MemoizedSelector<object, DaffAuthFeatureState<T>>;
}
export declare const getDaffAuthSelectors: <T extends DaffAuthToken>() => DaffAuthSelectors<T>;
