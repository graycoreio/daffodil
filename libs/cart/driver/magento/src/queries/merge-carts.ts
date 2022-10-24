import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { cartFragment } from './fragments/public_api';

export const magentoMergeCartsMutation = (extraCartFragments: DocumentNode[] = []) => gql`
  mutation MagentoMergeCarts($source: String!, $destination: String) {
    mergeCarts(
      source_cart_id: $source,
      destination_cart_id: $destination
    ) {
      ...cart
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
