import { gql } from 'apollo-angular';

import { magentoCustomerStoreCreditFragment } from './fragments/public_api';

export const MAGENTO_GET_CUSTOMER_STORE_CREDIT_QUERY_NAME = 'MagentoGetCustomerStoreCredit';

export const getCustomerStoreCredit = gql`
  query ${MAGENTO_GET_CUSTOMER_STORE_CREDIT_QUERY_NAME} {
    customer {
      store_credit {
        ...magentoCustomerStoreCredit
      }
    }
  }
  ${magentoCustomerStoreCreditFragment}
`;
