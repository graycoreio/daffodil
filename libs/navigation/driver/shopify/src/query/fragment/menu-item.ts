import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

/**
 * A menu item fragment with no nested children.
 */
const menuItemFragment = `
  id
  title
  resourceId
  resource {
    ...on Article {
      handle
    }
    ...on Blog {
      handle
    }
    ...on Collection {
      handle
    }
    ...on Page {
      handle
    }
    ...on Product {
      handle
    }
    ...on ShopPolicy {
      handle
    }
  }
  type
  url
`;

/**
 * Generates a menu item fragment..
 *
 * @param depth The maximum depth to which menu item children should be added to the fragment.
 */
export function getMenuItemFragment(depth: number = 3): DocumentNode {
  const fragmentBody = new Array(Math.max(0, depth - 1)).fill(null).reduce(acc => `
    ${menuItemFragment}
    items {
      ${acc}
    }
  `, menuItemFragment);

  return gql`
    fragment recursiveMenuItem on MenuItem {
      ${fragmentBody}
    }
  `;
}
