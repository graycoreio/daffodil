import { gql } from 'apollo-angular';

import { magentoCustomerFragment } from './fragments/public_api';

export const MAGENTO_UPDATE_CUSTOMER_QUERY_NAME = 'MagentoUpdateCustomer';

export const updateCustomer = gql`
  mutation ${MAGENTO_UPDATE_CUSTOMER_QUERY_NAME}($customer: CustomerUpdateInput!) {
    updateCustomerV2(input: $customer) {
      customer {
        ...magentoCustomer
      }
    }
  }
  ${magentoCustomerFragment}
`;
