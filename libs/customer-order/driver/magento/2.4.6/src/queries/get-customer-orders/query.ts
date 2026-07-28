import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';
import { magentoSearchResultPageInfoFragment } from '@daffodil/driver/magento';

import { MagentoGetCustomerOrdersResponse } from './response.type';
import { MagentoCustomerOrderListQueryVariables } from './variables.type';
import { magentoCustomerOrderFragment } from '../fragments/public_api';

export const MAGENTO_GET_CUSTOMER_ORDERS_QUERY_NAME = 'MagentoGetCustomerOrders';

export const getCustomerOrders = (extraProductFragments: DocumentNode[] = []) => gql<MagentoGetCustomerOrdersResponse, MagentoCustomerOrderListQueryVariables>`
  query ${MAGENTO_GET_CUSTOMER_ORDERS_QUERY_NAME}(
    $currentPage: Int,
    $pageSize: Int,
    $sort: CustomerOrderSortInput
  ) {
    customer {
      email
      orders(currentPage: $currentPage, pageSize: $pageSize, sort: $sort) {
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
