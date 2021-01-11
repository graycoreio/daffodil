import {gql} from 'apollo-angular';

import { getCategoryNodeFragment } from './fragments/category-node';

/**
 * Generates a category tree query with the specified number of nested child category tree fragments.
 * @param depth The maximum depth to which category children should be added to the fragment.
 */
export function daffMagentoGetCategoryTree(depth: number = 3) {
  return gql`
    query GetCategoryTree($filters: CategoryFilterInput!){
      categoryList(filters: $filters) {
        ...recursiveCategoryNode
      }
    }
    ${getCategoryNodeFragment(depth)}
  `;
}
