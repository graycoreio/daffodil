import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { MagentoGetCustomerOrderResponse } from './response.type';
import { MagentoCustomerOrderGetQueryVariables } from './variables.type';
import { magentoCustomerOrderFragment } from '../fragments/public_api';

export const MAGENTO_GET_CUSTOMER_ORDER_QUERY_NAME = 'MagentoGetCustomerOrder';

export const getCustomerOrder = (extraProductFragments: DocumentNode[] = []) => gql<MagentoGetCustomerOrderResponse, MagentoCustomerOrderGetQueryVariables>`
  query ${MAGENTO_GET_CUSTOMER_ORDER_QUERY_NAME}($id: String!) {
    customer {
      email
      orders(filter: {number: {eq: $id}}) {
        items {
          ...magentoCustomerOrder
          ${daffBuildFragmentNameSpread(...extraProductFragments)}
        }
      }
    }
  }
  ${magentoCustomerOrderFragment}
  ${daffBuildFragmentDefinition(...extraProductFragments)}
`;
