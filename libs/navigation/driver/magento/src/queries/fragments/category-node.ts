import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

/**
 * A category tree fragment with no nested children.
 */
const categoryNodeFragment = `
	id
	level
	name
	include_in_menu
	breadcrumbs {
		category_id
		category_name
		category_level
		category_url_key
	}
	products {
		total_count
	}
`

/**
 * Generates a category tree fragment with the specified number of nested child category trees.
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
  `, categoryNodeFragment)

  return gql`
    fragment recursiveCategoryNode on CategoryTree {
      ${fragmentBody}
    }
  `
}
