import {gql} from 'apollo-angular';
import { DocumentNode } from 'graphql';

import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';

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
