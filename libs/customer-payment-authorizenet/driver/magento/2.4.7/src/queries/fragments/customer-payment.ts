import { gql } from 'apollo-angular';

import { magentoCustomerPaymentAuthorizenetAddressFragment } from './customer-address';

export const magentoTokenBaseCardFragment = gql`
  fragment magentoTokenBaseCard on TokenBaseCard {
    hash
    address {
      ...magentoCustomerPaymentAuthorizenetAddress
    }
    customer_email
    customer_id
    method
    active
    created_at
    updated_at
    last_use
    expires
    label
    additional {
      cc_type
      cc_owner
      cc_last4
      cc_exp_year
      cc_exp_month
    }
  }
  ${magentoCustomerPaymentAuthorizenetAddressFragment}
`;
