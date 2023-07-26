import { DaffCustomerPaymentAuthorizeNetCCType } from '@daffodil/customer-payment-authorizenet';

import {
  MagentoTokenBaseCardLongType,
  MagentoTokenBaseCardTypeCode,
} from '../../models/public_api';

const MAPPING = {
  [MagentoTokenBaseCardLongType.AMERICAN_EXPRESS]: MagentoTokenBaseCardTypeCode.AMERICAN_EXPRESS,
  [MagentoTokenBaseCardLongType.DISCOVER]: MagentoTokenBaseCardTypeCode.DISCOVER,
  [MagentoTokenBaseCardLongType.DINERS_CLUB]: MagentoTokenBaseCardTypeCode.DINERS_CLUB,
  [MagentoTokenBaseCardLongType.JCB]: MagentoTokenBaseCardTypeCode.JCB,
  [MagentoTokenBaseCardLongType.MASTERCARD]: MagentoTokenBaseCardTypeCode.MASTERCARD,
  [MagentoTokenBaseCardLongType.VISA]: MagentoTokenBaseCardTypeCode.VISA,
};

export function magentoCustomerPaymentAuthorizeNetCardTypeTransform(longType: MagentoTokenBaseCardLongType): MagentoTokenBaseCardTypeCode {
  return MAPPING[longType];
}

export function magentoCustomerPaymentAnetCCTypeResponseTransform(type: MagentoTokenBaseCardTypeCode): DaffCustomerPaymentAuthorizeNetCCType {
  switch (type) {
    case MagentoTokenBaseCardTypeCode.AMERICAN_EXPRESS:
      return DaffCustomerPaymentAuthorizeNetCCType.AMERICAN_EXPRESS;

    case MagentoTokenBaseCardTypeCode.DISCOVER:
      return DaffCustomerPaymentAuthorizeNetCCType.DISCOVER;

    case MagentoTokenBaseCardTypeCode.DINERS_CLUB:
      return DaffCustomerPaymentAuthorizeNetCCType.DINERS_CLUB;

    case MagentoTokenBaseCardTypeCode.JCB:
      return DaffCustomerPaymentAuthorizeNetCCType.JCB;

    case MagentoTokenBaseCardTypeCode.MASTERCARD:
      return DaffCustomerPaymentAuthorizeNetCCType.MASTERCARD;

    case MagentoTokenBaseCardTypeCode.VISA:
      return DaffCustomerPaymentAuthorizeNetCCType.VISA;
  }
}
