import {
  DaffAuthorizeNetCreditCard,
  DaffAuthorizeNetTokenRequest,
  AuthorizeNetResponse,
} from '@daffodil/authorizenet';
import { DaffAuthorizeNetConfig } from '@daffodil/authorizenet/driver';

import {
  transformMagentoAuthorizeNetRequest,
  transformMagentoAuthorizeNetResponse,
} from './authorize-net-transformer';

describe('AuthorizeNet | Drivers | Magento | Transformers', () => {
  const stubCreditCard: DaffAuthorizeNetCreditCard = {
    cardnumber: 'cardnumber',
    month: 'month',
    year: 'year',
    securitycode: 'securitycode',
  };
  const stubAuthData: DaffAuthorizeNetConfig = {
    apiLoginID: 'apiLoginID',
    clientKey: 'clientKey',
  };

  describe('transformMagentoAuthorizeNetRequest', () => {

    it('should transform the credit card and auth data into an AuthorizeNet request object', () => {
      const request: DaffAuthorizeNetTokenRequest = {
        creditCard: stubCreditCard,
      };
      const expectedRequestObject = {
        cardData: {
          cardNumber: stubCreditCard.cardnumber,
          cardCode: stubCreditCard.securitycode,
          month: stubCreditCard.month,
          year: stubCreditCard.year,
        },
        authData: {
          clientKey: stubAuthData.clientKey,
          apiLoginID: stubAuthData.apiLoginID,
        },
      };
      expect(transformMagentoAuthorizeNetRequest(request, stubAuthData)).toEqual(expectedRequestObject);
    });
  });

  describe('transformMagentoAuthorizeNetResponse', () => {

    it('should return a MagentoAuthorizeNetPayment', () => {
      const authorizeNetResponse: AuthorizeNetResponse = {
        messages: null,
        opaqueData: {
          dataValue: 'paymentNonce',
          dataDescriptor: null,
        },
      };
      const ccNumber = '1243112341234';
      const ccLast4 = '1234';
      expect(transformMagentoAuthorizeNetResponse(authorizeNetResponse, ccNumber)).toEqual(
        {
          code: 'authorizenet_acceptjs',
          authorizenet_acceptjs: {
            cc_last_4: parseInt(ccLast4, 10),
            opaque_data_descriptor: 'COMMON.ACCEPT.INAPP.PAYMENT',
            opaque_data_value: 'paymentNonce',
          },
        },
      );
    });
  });
});
