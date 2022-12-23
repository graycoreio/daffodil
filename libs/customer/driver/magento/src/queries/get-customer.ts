import { gql } from 'apollo-angular';

import { magentoCustomerFragment } from './fragments/public_api';

export const MAGENTO_CUSTOMER_LIST_QUERY_NAME = 'MagentoCustomer';

export const getCustomer = gql`
  query ${MAGENTO_CUSTOMER_LIST_QUERY_NAME} {
    customer {
      ...magentoCustomer
    }
  }
  ${magentoCustomerFragment}
`;
