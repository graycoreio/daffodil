import { MemoizedSelector } from '@ngrx/store';
import { DaffAuthToken } from '../../models/auth-token';
import { DaffAuthLoginReducerState } from '../../reducers/public_api';
export interface DaffAuthLoginSelectors<T extends DaffAuthToken> {
    selectAuthLoginState: MemoizedSelector<object, DaffAuthLoginReducerState<T>>;
    selectAuthLoginLoading: MemoizedSelector<object, boolean>;
    selectAuthLoginErrors: MemoizedSelector<object, string[]>;
    selectAuthLoginToken: MemoizedSelector<object, T>;
    selectAuthLoginTokenValue: MemoizedSelector<object, T['token']>;
}
export declare const getDaffAuthLoginSelectors: <T extends DaffAuthToken>() => DaffAuthLoginSelectors<T>;
