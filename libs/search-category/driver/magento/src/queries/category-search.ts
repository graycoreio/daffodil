import { gql } from 'apollo-angular';

import { magentoCategoryTreeFragment } from '@daffodil/category/driver/magento';

export const DAFF_MAGENTO_SEARCH_FOR_CATEGORIES_QUERY_NAME = 'MagentoSearchForCategories';

export const categorySearch = () => gql`
  query ${DAFF_MAGENTO_SEARCH_FOR_CATEGORIES_QUERY_NAME}($query: String!, $pageSize: Int){
    categories(filters: {
      name: {
        match: $query
      }
    }, pageSize: $pageSize) {
      items {
        ...categoryTree
      }
    }
  }
  ${magentoCategoryTreeFragment}
`;
