import { gql } from 'apollo-angular';

import { magentoProductSearchResultFragment } from './fragments/product-result';

export const DAFF_MAGENTO_SEARCH_FOR_PRODUCTS_QUERY_NAME = 'MagentoSearchForProducts';

export const productSearch = gql`
  query ${DAFF_MAGENTO_SEARCH_FOR_PRODUCTS_QUERY_NAME}($query: String!, $pageSize: Int){
    products(search: $query, pageSize: $pageSize) {
      items {
        ...magentoProductSearchResult
      }
    }
  }
  ${magentoProductSearchResultFragment}
`;
