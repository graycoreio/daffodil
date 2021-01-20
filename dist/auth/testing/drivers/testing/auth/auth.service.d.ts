import { Observable } from 'rxjs';
import { DaffAuthServiceInterface } from '@daffodil/auth';
export declare class DaffTestingAuthService implements DaffAuthServiceInterface {
    check(): Observable<void>;
}
