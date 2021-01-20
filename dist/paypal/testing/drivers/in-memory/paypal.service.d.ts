import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffPaypalServiceInterface, DaffPaypalTokenRequest, DaffPaypalTokenResponse } from '@daffodil/paypal';
export declare class DaffInMemoryPaypalService implements DaffPaypalServiceInterface<DaffPaypalTokenRequest, DaffPaypalTokenResponse> {
    private http;
    url: string;
    constructor(http: HttpClient);
    generateToken(tokenRequest: DaffPaypalTokenRequest): Observable<DaffPaypalTokenResponse>;
}
