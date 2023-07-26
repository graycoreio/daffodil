import { DaffCustomerPaymentAuthorizeNetCCType } from '@daffodil/customer-payment-authorizenet';

import { MagentoTokenBaseCardTypeCode } from '../../models/public_api';

export function magentoCustomerPaymentAnetCCTypeRequestTransform(type: DaffCustomerPaymentAuthorizeNetCCType): MagentoTokenBaseCardTypeCode {
  switch (type) {
    case DaffCustomerPaymentAuthorizeNetCCType.AMERICAN_EXPRESS:
      return MagentoTokenBaseCardTypeCode.AMERICAN_EXPRESS;

    case DaffCustomerPaymentAuthorizeNetCCType.DISCOVER:
      return MagentoTokenBaseCardTypeCode.DISCOVER;

    case DaffCustomerPaymentAuthorizeNetCCType.DINERS_CLUB:
      return MagentoTokenBaseCardTypeCode.DINERS_CLUB;

    case DaffCustomerPaymentAuthorizeNetCCType.JCB:
      return MagentoTokenBaseCardTypeCode.JCB;

    case DaffCustomerPaymentAuthorizeNetCCType.MASTERCARD:
      return MagentoTokenBaseCardTypeCode.MASTERCARD;

    case DaffCustomerPaymentAuthorizeNetCCType.VISA:
      return MagentoTokenBaseCardTypeCode.VISA;
  }
}
