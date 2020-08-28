import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core';

import { cartAddressFragment } from './fragments/public_api';

export const getShippingAddress = (extraCartFragments: DocumentNode[] = []) => gql`
  query GetShippingAddress($cartId: String!) {
    cart(cart_id: $cartId) {
      shipping_addresses {
        ...cartAddress
      }
      email
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${cartAddressFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
