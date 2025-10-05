import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import { getMenuItemFragment } from './fragment/menu-item';

export function getCollectionMenuQuery(depth: number = 3): DocumentNode {
  return gql`
    query GetCollectionMenu($handle: String!) {
      menu(handle: $handle) {
        id
        title
        items {
          ...recursiveMenuItem
        }
      }
    }
    ${getMenuItemFragment(depth)}
  `;
}
