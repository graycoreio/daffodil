import { magentoCustomerAddressTransform } from '@daffodil/customer/driver/magento';
import { DaffCustomerPaymentAuthorizeNet } from '@daffodil/customer-payment-authorizenet';

import { magentoCustomerPaymentAnetCCTypeResponseTransform } from './card-type';
import { MagentoTokenBaseCard } from '../../models/public_api';

export const magentoCustomerPaymentAuthorizeNetTransform = (payment: MagentoTokenBaseCard): DaffCustomerPaymentAuthorizeNet => ({
  method: payment.method,
  id: payment.hash,
  default: false,
  address: magentoCustomerAddressTransform(payment.address),
  nickname: payment.label,
  createdAt: payment.created_at,
  owner: payment.additional.cc_owner,
  data: {
    last4: payment.additional.cc_last4,
    expMonth: payment.additional.cc_exp_month,
    expYear: payment.additional.cc_exp_year,
    type: magentoCustomerPaymentAnetCCTypeResponseTransform(payment.additional.cc_type),
  },
});
