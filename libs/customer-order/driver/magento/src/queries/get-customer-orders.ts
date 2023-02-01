import { gql } from 'apollo-angular';

import { magentoSearchResultPageInfoFragment } from '@daffodil/driver/magento';

import { magentoCustomerOrderFragment } from './fragments/public_api';

export const MAGENTO_GET_CUSTOMER_ORDERS_QUERY_NAME = 'MagentoGetCustomerOrders';

export const getCustomerOrders = gql`
  query ${MAGENTO_GET_CUSTOMER_ORDERS_QUERY_NAME}($currentPage: Int, $pageSize: Int) {
    customer {
      orders(currentPage: $currentPage, pageSize: $pageSize) {
        items {
          ...magentoCustomerOrder
        }
        page_info {
          ...magentoSearchResultPageInfo
        }
        total_count
      }
    }
  }
  ${magentoCustomerOrderFragment}
  ${magentoSearchResultPageInfoFragment}
`;
