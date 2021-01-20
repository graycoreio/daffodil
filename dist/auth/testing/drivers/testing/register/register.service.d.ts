import { Observable } from 'rxjs';
import { DaffAccountRegistration, DaffLoginInfo, DaffRegisterServiceInterface } from '@daffodil/auth';
export declare class DaffTestingRegisterService implements DaffRegisterServiceInterface<DaffAccountRegistration, DaffLoginInfo> {
    register(registration: DaffAccountRegistration): Observable<DaffLoginInfo>;
}
