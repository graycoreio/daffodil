import { gql } from 'apollo-angular';

import { magentoCategoryFragment } from './category';

export const magentoCategoryTreeFragment = gql`
  fragment categoryTree on CategoryTree {
    ...category
		children_count
  }
  ${magentoCategoryFragment}
`;
