import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core';

export const setGuestEmail = (extraCartFragments: DocumentNode[] = []) => gql`
  mutation SetGuestEmail($cartId: String!, $email: String!) {
    setGuestEmailOnCart(input: {
      cart_id: $cartId,
      email: $email
    }) {
      cart {
        email
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
