import { gql } from 'apollo-angular';

import { magentoTokenBaseCardFragment } from './fragments/public_api';

export const MAGENTO_GET_CUSTOMER_PAYMENT_QUERY_NAME = 'MagentoGetCustomerPayment';

export const getCustomerPayment = gql`
  query ${MAGENTO_GET_CUSTOMER_PAYMENT_QUERY_NAME}($id: String!) {
    tokenBaseCards(hash: $id) {
      ...magentoTokenBaseCard
    }
  }
  ${magentoTokenBaseCardFragment}
`;
