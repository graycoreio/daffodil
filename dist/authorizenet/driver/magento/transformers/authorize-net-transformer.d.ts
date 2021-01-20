import { DaffAuthorizeNetTokenRequest, AuthorizeNetResponse, AuthorizeNetRequest } from '@daffodil/authorizenet';
import { DaffAuthorizeNetConfig } from '@daffodil/authorizenet/driver';
import { MagentoAuthorizeNetPayment } from '../models/authorize-net-payment';
export declare function transformMagentoAuthorizeNetRequest(request: DaffAuthorizeNetTokenRequest, config: DaffAuthorizeNetConfig): AuthorizeNetRequest;
export declare function transformMagentoAuthorizeNetResponse(response: AuthorizeNetResponse, ccNumber: string): MagentoAuthorizeNetPayment;
