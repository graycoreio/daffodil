import {
  DaffAuthorizeNetTokenRequest,
  AuthorizeNetResponse,
  AuthorizeNetRequest,
} from '@daffodil/authorizenet';
import { DaffAuthorizeNetConfig } from '@daffodil/authorizenet/driver';

import { MagentoAuthorizeNetPayment } from '../models/authorize-net-payment';

export function transformMagentoAuthorizeNetRequest(
  request: DaffAuthorizeNetTokenRequest,
  config: DaffAuthorizeNetConfig,
): AuthorizeNetRequest {
  return {
    cardData: {
      cardNumber: request.creditCard.cardnumber,
      cardCode: request.creditCard.securitycode,
      month: request.creditCard.month,
      year: request.creditCard.year,
    },
    authData: {
      clientKey: config.clientKey,
      apiLoginID: config.apiLoginID,
    },
  };
};

export function transformMagentoAuthorizeNetResponse(response: AuthorizeNetResponse, ccNumber: string): MagentoAuthorizeNetPayment {
  return {
    code: 'authorizenet_acceptjs',
    authorizenet_acceptjs: {
      cc_last_4: parseInt(ccNumber.slice(ccNumber.length - 4), 10),
      opaque_data_descriptor: 'COMMON.ACCEPT.INAPP.PAYMENT',
      opaque_data_value: response.opaqueData.dataValue,
    },
  };
}
