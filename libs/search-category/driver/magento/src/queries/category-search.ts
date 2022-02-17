import { gql } from 'apollo-angular';

import { magentoSearchCategoryResultFragment } from './fragments/public_api';

export const DAFF_MAGENTO_SEARCH_FOR_CATEGORIES_QUERY_NAME = 'MagentoSearchForCategories';

export const categorySearch = () => gql`
  query ${DAFF_MAGENTO_SEARCH_FOR_CATEGORIES_QUERY_NAME}($query: String!){
    categoryList(filters: {
      name: {
        match: $query
      }
    }) {
      ...categoryResult
    }
  }
  ${magentoSearchCategoryResultFragment}
`;
