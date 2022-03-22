import { gql } from '@damienwebdev/apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { magentoProductFragment } from './fragments/product';

export const DAFF_MAGENTO_GET_A_PRODUCT_BY_URL_QUERY_NAME = 'MagentoGetAProductByUrl';

export const getProductByUrl = (extraProductFragments: DocumentNode[] = []) => gql`
  query ${DAFF_MAGENTO_GET_A_PRODUCT_BY_URL_QUERY_NAME}($url: String!){
    products(filter: {
      url_key: {
        eq: $url
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
