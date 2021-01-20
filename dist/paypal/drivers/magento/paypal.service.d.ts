import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { DaffPaypalServiceInterface } from '../interfaces/paypal-service.interface';
import { DaffPaypalTransformerInterface } from '../interfaces/paypal-transformer.interface';
import { DaffPaypalTokenRequest } from '../../models/paypal-token-request';
import { DaffPaypalTokenResponse } from '../../models/paypal-token-response';
import { DaffMagentoPaypalConfig } from './models/config';
export declare class DaffMagentoPaypalService implements DaffPaypalServiceInterface {
    private apollo;
    private transformer;
    private config;
    constructor(apollo: Apollo, transformer: DaffPaypalTransformerInterface<DaffPaypalTokenRequest, DaffPaypalTokenResponse>, config: DaffMagentoPaypalConfig);
    generateToken(tokenRequest: DaffPaypalTokenRequest): Observable<DaffPaypalTokenResponse>;
}
