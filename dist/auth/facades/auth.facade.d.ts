import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { DaffAuthFeatureState } from '../reducers/public_api';
import { DaffAuthToken } from '../models/auth-token';
import { DaffAuthFacadeInterface } from '../interfaces/auth-facade.interface';
export declare class DaffAuthFacade<T extends DaffAuthToken = DaffAuthToken> implements DaffAuthFacadeInterface<T> {
    private store;
    auth$: Observable<T>;
    token$: Observable<T['token']>;
    authLoading$: Observable<boolean>;
    authErrors$: Observable<string[]>;
    loginLoading$: Observable<boolean>;
    loginErrors$: Observable<string[]>;
    registerLoading$: Observable<boolean>;
    registerErrors$: Observable<string[]>;
    constructor(store: Store<DaffAuthFeatureState<T>>);
    dispatch(action: Action): void;
}
