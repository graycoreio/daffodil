import { DaffPaymentRequest } from '@daffodil/payment';

import { DAFF_AUTHORIZENET_PAYMENT_KIND } from '../constants/public_api';
import { DaffAuthorizeNetTokenRequest } from './request/authorize-net-token-request';

export interface DaffAuthorizenetPaymentRequest extends DaffPaymentRequest<DaffAuthorizeNetTokenRequest> {
  kind: typeof DAFF_AUTHORIZENET_PAYMENT_KIND;
}
