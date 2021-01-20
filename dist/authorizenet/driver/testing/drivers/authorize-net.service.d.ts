import { Observable } from 'rxjs';
import { DaffAuthorizeNetTokenRequest } from '@daffodil/authorizenet';
import { DaffAuthorizeNetService } from '@daffodil/authorizenet/driver';
export declare class DaffTestingAuthorizeNetService implements DaffAuthorizeNetService {
    generateToken(tokenRequest: DaffAuthorizeNetTokenRequest): Observable<any>;
}
