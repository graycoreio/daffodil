import { gql } from 'apollo-angular';

import {
  DAFF_MAGENTO_GET_CATEGORY_QUERY_NAME,
  magentoCategoryTreeFragment,
} from '@daffodil/category/driver/magento';

export const categorySearch = () => gql`
  query ${DAFF_MAGENTO_GET_CATEGORY_QUERY_NAME}($query: String!){
    categoryList(filters: {
      name: {
        match: $query
      }
    }) {
      ...categoryTree
    }
  }
  ${magentoCategoryTreeFragment}
`;
