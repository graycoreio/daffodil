import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { cartFragment } from '../fragments/public_api';
import { MagentoUpdateShippingAddressResponse } from './response.type';
import { MagentoCartUpdateShippingAddressQueryVariables } from './variables.type';

export const updateShippingAddress = (extraCartFragments: DocumentNode[] = []) => gql<MagentoUpdateShippingAddressResponse, MagentoCartUpdateShippingAddressQueryVariables>`
  mutation MagentoUpdateShippingAddress(
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
