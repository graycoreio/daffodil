import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { magentoProductFragment } from './fragments/product';

export const DAFF_MAGENTO_GET_A_PRODUCT_QUERY_NAME = 'MagentoGetAProduct';

export const getProduct = (extraProductFragments: DocumentNode[] = []) => gql`
  query ${DAFF_MAGENTO_GET_A_PRODUCT_QUERY_NAME}($sku: String!){
    products(filter: {
      sku: {
        eq: $sku
      }
    }){
      items {
        ...product
        ${daffBuildFragmentNameSpread(...extraProductFragments)}
      }
    }
  }
  ${magentoProductFragment}
  ${daffBuildFragmentDefinition(...extraProductFragments)}
`;
