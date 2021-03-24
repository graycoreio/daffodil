import { Injectable } from '@angular/core';

import {
  DaffPaypalTokenRequest,
  DaffPaypalTokenResponse,
} from '@daffodil/paypal';
import { DaffPaypalTransformerInterface } from '@daffodil/paypal/driver';

import {
  DaffMagentoPaypalConfig,
  MagentoPaypalTokenRequest,
  MagentoPaypalExpressToken,
} from '../models/public_api';

@Injectable({
  providedIn: 'root',
})
export class DaffMagentoPaypalTransformerService implements DaffPaypalTransformerInterface<DaffPaypalTokenRequest, DaffPaypalTokenResponse> {
  transformOut(tokenRequest: DaffPaypalTokenRequest, config: DaffMagentoPaypalConfig): MagentoPaypalTokenRequest {
    return {
      cart_id: tokenRequest.cartId,
      code: config.code ? config.code : 'paypal_express',
      urls: {
        cancel_url: config.cancel_url,
        return_url: config.return_url,
        pending_url: config.pending_url,
        success_url: config.success_url,
      },
      express_button: config.express_button ? config.express_button : false,
      use_paypal_credit: config.use_paypal_credit ? config.use_paypal_credit : false,
    };
  }

  transformIn(tokenResponse: MagentoPaypalExpressToken): DaffPaypalTokenResponse {
    return {
      token: tokenResponse.token,
      urls: {
        start: tokenResponse.paypal_urls.start,
        edit: tokenResponse.paypal_urls.edit,
      },
    };
  }
}
