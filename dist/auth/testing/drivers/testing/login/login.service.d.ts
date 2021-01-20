import { Observable } from 'rxjs';
import { DaffLoginServiceInterface, DaffLoginInfo, DaffAuthToken } from '@daffodil/auth';
import { DaffAuthTokenFactory } from '../../../factories/auth-token.factory';
export declare class DaffTestingLoginService implements DaffLoginServiceInterface<DaffLoginInfo, DaffAuthToken> {
    private factory;
    constructor(factory: DaffAuthTokenFactory);
    login(loginInfo: DaffLoginInfo): Observable<DaffAuthToken>;
    logout(): Observable<void>;
}
