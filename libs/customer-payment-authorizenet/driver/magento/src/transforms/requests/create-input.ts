import { MagentoAuthorizeNetPayment } from '@daffodil/authorizenet/driver/magento';
import { DaffCustomerPaymentAuthorizeNetRequest } from '@daffodil/customer-payment-authorizenet';
import { magentoCustomerAddressInputTransform } from '@daffodil/customer/driver/magento';

import { MagentoTokenBaseCardCreateInput } from '../../models/public_api';
import { magentoCustomerPaymentAnetCCTypeRequestTransform } from './cc-type';

export const magentoCustomerPaymentCreateInputTransform = (payment: DaffCustomerPaymentAuthorizeNetRequest, token: MagentoAuthorizeNetPayment, method: string): MagentoTokenBaseCardCreateInput => ({
  customer_email: payment.data.email,
  method,
  active: true,
  address: magentoCustomerAddressInputTransform(payment.address),
  additional: {
    cc_type: magentoCustomerPaymentAnetCCTypeRequestTransform(payment.data.type),
    cc_cid: payment.data.creditCard.securitycode,
    cc_exp_month: payment.data.creditCard.month,
    cc_exp_year: payment.data.creditCard.year,
    cc_last4: payment.data.creditCard.cardnumber.slice(payment.data.creditCard.cardnumber.length - 4),
    cc_owner: payment.owner,
    acceptjs_key: token.authorizenet_acceptjs.opaque_data_descriptor,
    acceptjs_value: token.authorizenet_acceptjs.opaque_data_value,
  },
});
