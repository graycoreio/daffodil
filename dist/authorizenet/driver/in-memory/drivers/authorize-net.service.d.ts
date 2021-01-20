import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffAuthorizeNetTokenRequest } from '@daffodil/authorizenet';
import { DaffAuthorizeNetService } from '@daffodil/authorizenet/driver';
export declare class DaffInMemoryAuthorizeNetService implements DaffAuthorizeNetService<DaffAuthorizeNetTokenRequest> {
    private http;
    url: string;
    constructor(http: HttpClient);
    generateToken(paymentTokenRequest: DaffAuthorizeNetTokenRequest): Observable<any>;
}
