import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { MagentoUpdateShippingAddressWithEmailResponse } from './response.type';
import { MagentoCartUpdateShippingAddressWithEmailQueryVariables } from './variables.type';
import { cartFragment } from '../fragments/public_api';

export const updateShippingAddressWithEmail = (extraCartFragments: DocumentNode[] = []) => gql<MagentoUpdateShippingAddressWithEmailResponse, MagentoCartUpdateShippingAddressWithEmailQueryVariables>`
  mutation MagentoUpdateShippingAddressWithEmail(
    $cartId: String!,
    $address: ShippingAddressInput!,
    $email: String!
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
    setGuestEmailOnCart(input: {
      cart_id: $cartId,
      email: $email
    }) {
      cart {
        email
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
