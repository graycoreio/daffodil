import { gql } from 'apollo-angular';

import { magentoProductSearchResultFragment } from './fragments/product-result';

export const productSearch = gql`
  query MagentoSearchForProducts($query: String!){
    products(search: $query) {
      items {
        ...magentoProductSearchResult
      }
    }
  }
  ${magentoProductSearchResultFragment}
`;
