import { DaffPaymentResponse } from '@daffodil/payment';

import { DaffPaypalExpressTokenResponse } from './express-token-response.type';

export type DaffPaypalPaymentResponse = DaffPaymentResponse<DaffPaypalExpressTokenResponse>;
