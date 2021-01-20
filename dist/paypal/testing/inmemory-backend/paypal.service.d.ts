import { InMemoryDbService, RequestInfoUtilities, ParsedRequestUrl } from 'angular-in-memory-web-api';
import { DaffPaypalTokenResponse } from '@daffodil/paypal';
import { DaffPaypalTokenResponseFactory } from '../factories/paypal-token-response.factory';
export declare class DaffInMemoryBackendPaypalService implements InMemoryDbService {
    private paypalTokenResponseFactory;
    paypalTokenResponse: DaffPaypalTokenResponse;
    constructor(paypalTokenResponseFactory: DaffPaypalTokenResponseFactory);
    parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl;
    createDb(): any;
    get(reqInfo: any): any;
}
