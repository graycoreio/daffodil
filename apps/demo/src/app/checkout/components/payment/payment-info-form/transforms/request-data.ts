import { DaffAuthorizeNetTokenRequest } from '@daffodil/authorizenet';

import { PaymentInfoFormGroup } from '../models/payment-form.type';

export function demoCheckoutPaymentInfoRequestDataTransform(form: PaymentInfoFormGroup['value']): DaffAuthorizeNetTokenRequest {
  return {
    creditCard: {
      cardnumber: form.cardnumber,
      month: form.month,
      year: form.year,
      securitycode: form.securitycode,
    },
  };
}
