import { gql } from 'apollo-angular';

import { magentoCustomerFragment } from './fragments/public_api';

export const MAGENTO_GET_CUSTOMER_QUERY_NAME = 'MagentoGetCustomer';

export const getCustomer = gql`
  query ${MAGENTO_GET_CUSTOMER_QUERY_NAME} {
    customer {
      ...magentoCustomer
    }
  }
  ${magentoCustomerFragment}
`;
