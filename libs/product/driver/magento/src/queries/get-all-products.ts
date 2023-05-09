import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { magentoProductPageFragment } from './fragments/public_api';

export const DAFF_MAGENTO_GET_ALL_PRODUCTS_QUERY_NAME = 'MagentoGetAllProducts';

export const getAllProducts = (extraProductFragments: DocumentNode[] = []) => gql`
  query ${DAFF_MAGENTO_GET_ALL_PRODUCTS_QUERY_NAME}($pageSize: Int) {
    products(pageSize: $pageSize) {
      total_count
      items {
        ...magentoProductPage
        ${daffBuildFragmentNameSpread(...extraProductFragments)}
      }
      page_info {
        page_size
        current_page
      }
    }
  }
  ${magentoProductPageFragment}
  ${daffBuildFragmentDefinition(...extraProductFragments)}
`;
