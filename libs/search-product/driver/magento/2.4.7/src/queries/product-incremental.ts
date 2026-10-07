import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';
import { magentoProductFragment } from '@daffodil/product/driver/magento';

export const DAFF_SEARCH_PRODUCT_MAGENTO_INCREMENTAL_QUERY_NAME = 'MagentoIncrementalSearchForProducts';

export const daffSearchProductIncrementalQuery = (extraProductFragments: DocumentNode[] = []) => gql`
  query ${DAFF_SEARCH_PRODUCT_MAGENTO_INCREMENTAL_QUERY_NAME}(
    $search: String,
    $pageSize: Int,
  ) {
    products(search: $search, pageSize: $pageSize) {
      items {
        ...product
        ${daffBuildFragmentNameSpread(...extraProductFragments)}
      }
		  total_count
    }
  }
  ${magentoProductFragment}
  ${daffBuildFragmentDefinition(...extraProductFragments)}
`;
