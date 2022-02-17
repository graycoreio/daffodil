import { gql } from 'apollo-angular';

import { magentoProductSearchResultFragment } from './fragments/product-result';

export const DAFF_MAGENTO_SEARCH_FOR_PRODUCTS_QUERY_NAME = 'MagentoSearchForProducts';

export const productSearch = gql`
  query {DAFF_MAGENTO_SEARCH_FOR_PRODUCTS_QUERY_NAME}($query: String!){
    products(search: $query) {
      items {
        ...magentoProductSearchResult
      }
    }
  }
  ${magentoProductSearchResultFragment}
`;
