import { gql } from 'apollo-angular';

import { magentoCustomerOrderFragment } from './fragments/public_api';

export const MAGENTO_GET_CUSTOMER_ORDER_QUERY_NAME = 'MagentoGetCustomerOrder';

export const getCustomerOrder = gql`
  query ${MAGENTO_GET_CUSTOMER_ORDER_QUERY_NAME}($id: String!) {
    customer {
      orders(filter: {number: {eq: $id}}) {
        items {
          ...magentoCustomerOrder
        }
      }
    }
  }
  ${magentoCustomerOrderFragment}
`;
