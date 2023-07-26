import { gql } from 'apollo-angular';

import { magentoTokenBaseCardFragment } from './fragments/public_api';

export const MAGENTO_GET_CUSTOMER_PAYMENTS_QUERY_NAME = 'MagentoGetCustomerPayments';

export const getCustomerPayments = gql`
  query ${MAGENTO_GET_CUSTOMER_PAYMENTS_QUERY_NAME} {
    tokenBaseCards {
      ...magentoTokenBaseCard
    }
  }
  ${magentoTokenBaseCardFragment}
`;
