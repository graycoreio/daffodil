import {gql} from 'apollo-angular';

import { getCategoryNodeFragment } from './fragments/category-node';

export const DAFF_MAGENTO_GET_CATEGORY_TREE_QUERY_NAME = 'MagentoGetCategoryTree';

/**
 * Generates a category tree query with the specified number of nested child category tree fragments.
 * @param depth The maximum depth to which category children should be added to the fragment.
 */
export function daffMagentoGetCategoryTree(depth: number = 3) {
  return gql`
    query ${DAFF_MAGENTO_GET_CATEGORY_TREE_QUERY_NAME}($filters: CategoryFilterInput!){
      categoryList(filters: $filters) {
        ...recursiveCategoryNode
      }
    }
    ${getCategoryNodeFragment(depth)}
  `;
}
