import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { MagentoProductGetByUrlReponse } from './response.type';
import { MagentoProductGetByUrlVariables } from './variables.type';
import { magentoProductPageFragment } from '../fragments/public_api';

export const DAFF_MAGENTO_GET_A_PRODUCT_BY_URL_QUERY_NAME = 'MagentoGetAProductByUrl';

export const getProductByUrl = (extraProductFragments: DocumentNode[] = []) => gql<MagentoProductGetByUrlReponse, MagentoProductGetByUrlVariables>`
  query ${DAFF_MAGENTO_GET_A_PRODUCT_BY_URL_QUERY_NAME}($url: String!){
		route(url: $url) {
      ... on ProductInterface {
        ...magentoProductPage
        ${daffBuildFragmentNameSpread(...extraProductFragments)}
      }
    }
  }
  ${magentoProductPageFragment}
  ${daffBuildFragmentDefinition(...extraProductFragments)}
`;
