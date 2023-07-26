import { DaffIdentifiable } from '@daffodil/core';
import { DaffCustomerAddress } from '@daffodil/customer';
import { DaffCustomerPaymentAuthorizeNet } from '@daffodil/customer-payment-authorizenet';
import { magentoCustomerAddressInputTransform } from '@daffodil/customer/driver/magento';

import { MagentoTokenBaseCardUpdateInput } from '../../models/public_api';
import { magentoCustomerPaymentAnetCCTypeRequestTransform } from './cc-type';

export const magentoCustomerPaymentUpdateInputTransform = (payment: Partial<DaffCustomerPaymentAuthorizeNet> & DaffIdentifiable, method: string): MagentoTokenBaseCardUpdateInput => ({
  hash: payment.id,
  customer_email: payment.address?.email || undefined,
  method,
  active: true,
  address: payment.address ? magentoCustomerAddressInputTransform(payment.address) : undefined,
  additional: {
    cc_type: magentoCustomerPaymentAnetCCTypeRequestTransform(payment.data.type) || undefined,
    cc_exp_month: payment.data.expMonth || undefined,
    cc_exp_year: payment.data.expYear || undefined,
    cc_last4: payment.data.last4 || undefined,
    cc_owner: payment.owner || undefined,
  },
});
