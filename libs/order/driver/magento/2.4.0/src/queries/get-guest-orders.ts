import {gql} from 'apollo-angular';
import { DocumentNode } from 'graphql';

import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';

import { orderFragment } from './fragments/public_api';

export const getGuestOrders = (extraOrderFragments: DocumentNode[] = []) => gql`
  query GetGuestOrders($cartId: String!) {
    graycoreGuestOrders(cartId: $cartId) {
      orders {
        ...order
        ${daffBuildFragmentNameSpread(...extraOrderFragments)}
      }
    }
  }
  ${orderFragment}
  ${daffBuildFragmentDefinition(...extraOrderFragments)}
`;
