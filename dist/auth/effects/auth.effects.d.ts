import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { DaffAuthLogin, DaffAuthLoginSuccess, DaffAuthLoginFailure, DaffAuthCheckSuccess, DaffAuthCheckFailure, DaffAuthLogoutSuccess, DaffAuthLogoutFailure, DaffAuthGuardCheckCompletion, DaffAuthStorageFailure } from '../actions/auth.actions';
import { DaffRegisterServiceInterface } from '../drivers/interfaces/register-service.interface';
import { DaffLoginServiceInterface } from '../drivers/interfaces/login-service.interface';
import { DaffAuthToken } from '../models/auth-token';
import { DaffAccountRegistration } from '../models/account-registration';
import { DaffLoginInfo } from '../models/login-info';
import { DaffAuthServiceInterface } from '../drivers/interfaces/auth-service.interface';
import { DaffAuthStorageService } from '../storage/auth-storage.service';
export declare class DaffAuthEffects<T extends DaffLoginInfo, U extends DaffAuthToken, S extends DaffAccountRegistration> {
    private actions$;
    private registerDriver;
    private loginDriver;
    private authDriver;
    private storage;
    constructor(actions$: Actions, registerDriver: DaffRegisterServiceInterface<S, T>, loginDriver: DaffLoginServiceInterface<T, U>, authDriver: DaffAuthServiceInterface, storage: DaffAuthStorageService);
    check$: Observable<DaffAuthCheckSuccess | DaffAuthCheckFailure>;
    login$: Observable<DaffAuthLoginSuccess<U> | DaffAuthLoginFailure>;
    storeAuthToken$: Observable<DaffAuthStorageFailure>;
    logout$: Observable<DaffAuthLogoutSuccess | DaffAuthLogoutFailure>;
    loginAfterRegister$: Observable<DaffAuthLogin<T>>;
    register$: Observable<any>;
    guardCheck$: Observable<DaffAuthGuardCheckCompletion>;
    private checkToken;
}
