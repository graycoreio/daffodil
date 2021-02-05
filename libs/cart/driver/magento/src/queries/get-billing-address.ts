import {gql} from 'apollo-angular';
import { DocumentNode } from 'graphql';

import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';

import { cartAddressFragment } from './fragments/public_api';

export const getBillingAddress = (extraCartFragments: DocumentNode[] = []) => gql`
  query MagentoGetBillingAddress($cartId: String!) {
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
