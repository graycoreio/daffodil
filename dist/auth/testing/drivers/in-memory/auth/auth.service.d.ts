import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffAuthServiceInterface } from '@daffodil/auth';
export declare class DaffInMemoryAuthService implements DaffAuthServiceInterface {
    private http;
    url: string;
    constructor(http: HttpClient);
    check(): Observable<void>;
}
