import { MemoizedSelector } from '@ngrx/store';
import { DaffAuthToken } from '../../models/auth-token';
import { DaffAuthRegisterReducerState } from '../../reducers/public_api';
export interface DaffAuthRegisterSelectors {
    selectAuthRegisterState: MemoizedSelector<object, DaffAuthRegisterReducerState>;
    selectAuthRegisterLoading: MemoizedSelector<object, boolean>;
    selectAuthRegisterErrors: MemoizedSelector<object, string[]>;
}
export declare const getDaffAuthRegisterSelectors: <T extends DaffAuthToken>() => DaffAuthRegisterSelectors;
