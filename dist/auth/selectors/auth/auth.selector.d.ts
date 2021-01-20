import { MemoizedSelector } from '@ngrx/store';
import { DaffAuthToken } from '../../models/auth-token';
import { DaffAuthReducerState } from '../../reducers/public_api';
export interface AuthSelectors {
    selectAuthState: MemoizedSelector<object, DaffAuthReducerState>;
    selectAuthLoading: MemoizedSelector<object, boolean>;
    selectAuthErrors: MemoizedSelector<object, string[]>;
}
export declare const getAuthSelectors: <T extends DaffAuthToken>() => AuthSelectors;
