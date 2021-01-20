import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffRegisterServiceInterface, DaffAccountRegistration, DaffLoginInfo } from '@daffodil/auth';
export declare class DaffInMemoryRegisterService implements DaffRegisterServiceInterface<DaffAccountRegistration, DaffLoginInfo> {
    private http;
    url: string;
    constructor(http: HttpClient);
    register(registration: DaffAccountRegistration): Observable<DaffLoginInfo>;
}
