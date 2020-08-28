import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core';

import { cartFragment } from './fragments/public_api';

export const updateShippingAddress = (extraCartFragments: DocumentNode[] = []) => gql`
  mutation UpdateShippingAddress(
    $cartId: String!,
    $address: ShippingAddressInput!
  ) {
    setShippingAddressesOnCart(input: {
      cart_id: $cartId
      shipping_addresses: [$address]
    }) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
