import { DaffPaypalTokenRequest } from '../../../models/paypal-token-request';
import { DaffPaypalTokenResponse } from '../../../models/paypal-token-response';
import { MagentoPaypalTokenRequest } from '../models/request/magento-paypal-token-request';
import { DaffMagentoPaypalConfig } from '../models/config';
import { DaffPaypalTransformerInterface } from '../../interfaces/paypal-transformer.interface';
import { MagentoPaypalExpressToken } from '../models/response/magento-paypal-express-token';
export declare class DaffMagentoPaypalTransformerService implements DaffPaypalTransformerInterface<DaffPaypalTokenRequest, DaffPaypalTokenResponse> {
    transformOut(tokenRequest: DaffPaypalTokenRequest, config: DaffMagentoPaypalConfig): MagentoPaypalTokenRequest;
    transformIn(tokenResponse: MagentoPaypalExpressToken): DaffPaypalTokenResponse;
}
