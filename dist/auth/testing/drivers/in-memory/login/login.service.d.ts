import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffLoginServiceInterface, DaffLoginInfo, DaffAuthToken } from '@daffodil/auth';
export declare class DaffInMemoryLoginService implements DaffLoginServiceInterface<DaffLoginInfo, DaffAuthToken> {
    private http;
    url: string;
    constructor(http: HttpClient);
    login(request: DaffLoginInfo): Observable<DaffAuthToken>;
    logout(): Observable<void>;
}
