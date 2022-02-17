import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import { magentoProductSearchResultFragment } from './fragments/product-result';

export const productSearch = (extraProductFragments: DocumentNode[] = []) => gql`
  query MagentoSearchForProducts($query: String!){
    products(search: $query) {
      items {
        ...magentoProductSearchResult
      }
    }
  }
  ${magentoProductSearchResultFragment}
`;
