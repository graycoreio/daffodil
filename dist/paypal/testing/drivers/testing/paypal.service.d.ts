import { Observable } from 'rxjs';
import { DaffPaypalTokenRequest, DaffPaypalTokenResponse, DaffPaypalServiceInterface } from '@daffodil/paypal';
import { DaffPaypalTokenResponseFactory } from '../../factories/paypal-token-response.factory';
export declare class DaffTestingPaypalService implements DaffPaypalServiceInterface<DaffPaypalTokenRequest, DaffPaypalTokenResponse> {
    private paypalTokenResponseFactory;
    constructor(paypalTokenResponseFactory: DaffPaypalTokenResponseFactory);
    generateToken(tokenRequest: DaffPaypalTokenRequest): Observable<DaffPaypalTokenResponse>;
}
