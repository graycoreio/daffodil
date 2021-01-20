import { Observable } from 'rxjs';
import { DaffAuthorizeNetTokenRequest, DaffAcceptJsLoadingService } from '@daffodil/authorizenet';
import { DaffAuthorizeNetService, DaffAuthorizeNetConfig } from '@daffodil/authorizenet/driver';
import { MagentoAuthorizeNetPayment } from './models/authorize-net-payment';
export declare class DaffMagentoAuthorizeNetService implements DaffAuthorizeNetService {
    config: DaffAuthorizeNetConfig;
    private acceptJsLoader;
    constructor(config: DaffAuthorizeNetConfig, acceptJsLoader: DaffAcceptJsLoadingService);
    generateToken(paymentTokenRequest: DaffAuthorizeNetTokenRequest): Observable<MagentoAuthorizeNetPayment>;
}
