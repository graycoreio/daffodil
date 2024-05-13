import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';


const CATEGORY_NODE_FRAGMENT_NAME = 'categoryNode';

/**
 * Generates a category tree fragment with the specified number of nested child category trees.
 *
 * @param depth The maximum depth to which category children should be added to the fragment.
 */
export function getCategoryNodeFragment(depth: number = 3): DocumentNode {
  const fragmentBody = new Array(depth).fill(null).reduce(acc => `
    ...${CATEGORY_NODE_FRAGMENT_NAME}
    children_count
    children {
      ${acc}
    }
  `, `...${CATEGORY_NODE_FRAGMENT_NAME}`);

  return gql`
    fragment ${CATEGORY_NODE_FRAGMENT_NAME} on CategoryTree {
      uid
      url_path
      url_suffix
      level
      name
      include_in_menu
      breadcrumbs {
        category_uid
        category_name
        category_level
        category_url_path
      }
      position
      product_count
    }

    fragment recursiveCategoryNode on CategoryTree {
      ${fragmentBody}
    }
  `;
}
