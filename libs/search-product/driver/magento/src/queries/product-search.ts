import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';
import {
  DAFF_MAGENTO_GET_A_PRODUCT_QUERY_NAME,
  magentoProductFragment,
} from '@daffodil/product/driver/magento';

export const productSearch = (extraProductFragments: DocumentNode[] = []) => gql`
  query ${DAFF_MAGENTO_GET_A_PRODUCT_QUERY_NAME}($query: String!){
    products(search: $query) {
      items {
        ...product
        ${daffBuildFragmentNameSpread(...extraProductFragments)}
      }
    }
  }
  ${magentoProductFragment}
  ${daffBuildFragmentDefinition(...extraProductFragments)}
`;
