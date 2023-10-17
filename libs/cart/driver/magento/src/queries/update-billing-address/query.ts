import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { MagentoUpdateBillingAddressResponse } from './response.type';
import { MagentoCartUpdateBillingAddressQueryVariables } from './variables.type';
import { cartFragment } from '../fragments/public_api';

export const updateBillingAddress = (extraCartFragments: DocumentNode[] = []) => gql<MagentoUpdateBillingAddressResponse, MagentoCartUpdateBillingAddressQueryVariables>`
  mutation MagentoUpdateBillingAddress(
    $cartId: String!,
    $address: BillingAddressInput!
  ) {
    setBillingAddressOnCart(input: {
      cart_id: $cartId
      billing_address: $address
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
