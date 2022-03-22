import { gql } from '@damienwebdev/apollo-angular';
import { DocumentNode } from 'graphql';


/**
 * A category tree fragment with no nested children.
 */
const categoryNodeFragment = `
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
`;

/**
 * Generates a category tree fragment with the specified number of nested child category trees.
 *
 * @param depth The maximum depth to which category children should be added to the fragment.
 */
//todo: use nested fragments when this bug is fixed: https://github.com/magento/magento2/issues/31086
export function getCategoryNodeFragment(depth: number = 3): DocumentNode {
  const fragmentBody = new Array(depth).fill(null).reduce(acc => `
    ${categoryNodeFragment}
    children_count
    children {
      ${acc}
    }
  `, categoryNodeFragment);

  return gql`
    fragment recursiveCategoryNode on CategoryTree {
      ${fragmentBody}
    }
  `;
}
