import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { MagentoUpdateBillingAddressWithEmailResponse } from './response.type';
import { MagentoCartUpdateBillingAddressWithEmailQueryVariables } from './variables.type';
import { cartFragment } from '../fragments/public_api';

export const updateBillingAddressWithEmail = (extraCartFragments: DocumentNode[] = []) => gql<MagentoUpdateBillingAddressWithEmailResponse, MagentoCartUpdateBillingAddressWithEmailQueryVariables>`
  mutation MagentoUpdateBillingAddressWithEmail(
    $cartId: String!,
    $address: BillingAddressInput!,
    $email: String!
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
