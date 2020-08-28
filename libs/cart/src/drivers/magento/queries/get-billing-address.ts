import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core';

import { cartAddressFragment } from './fragments/public_api';

export const getBillingAddress = (extraCartFragments: DocumentNode[] = []) => gql`
  query GetBillingAddress($cartId: String!) {
    cart(cart_id: $cartId) {
      billing_address {
        ...cartAddress
      }
      email
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${cartAddressFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
