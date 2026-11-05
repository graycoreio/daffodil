import { DocumentNode } from '@apollo/client';
import { gql } from 'apollo-angular';

import { cartFragment } from '@daffodil/cart/driver/magento/2.4.7';
import {
  daffBuildFragmentDefinition,
  daffBuildFragmentNameSpread,
} from '@daffodil/core/graphql';

export const magentoRemoveStoreCredit = (extraCartFragments: DocumentNode[] = []) => gql`
  mutation MagentoRemoveStoreCredit($id: String!) {
    removeStoreCreditFromCart(input: {cart_id: $id}) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
