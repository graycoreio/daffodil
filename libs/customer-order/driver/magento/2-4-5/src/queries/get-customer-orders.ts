import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';
import { magentoSearchResultPageInfoFragment } from '@daffodil/driver/magento';

import { magentoCustomerOrderFragment } from './fragments/public_api';

export const MAGENTO_GET_CUSTOMER_ORDERS_QUERY_NAME = 'MagentoGetCustomerOrders';

export const getCustomerOrders = (extraProductFragments: DocumentNode[] = []) => gql`
  query ${MAGENTO_GET_CUSTOMER_ORDERS_QUERY_NAME}($currentPage: Int, $pageSize: Int) {
    customer {
      email
      orders(currentPage: $currentPage, pageSize: $pageSize) {
        items {
          ...magentoCustomerOrder
          ${daffBuildFragmentNameSpread(...extraProductFragments)}
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
  ${daffBuildFragmentDefinition(...extraProductFragments)}
`;
