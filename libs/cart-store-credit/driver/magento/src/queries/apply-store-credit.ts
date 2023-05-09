import { DocumentNode } from '@apollo/client/core';
import { gql } from 'apollo-angular';

import { cartFragment } from '@daffodil/cart/driver/magento';
import {
  daffBuildFragmentDefinition,
  daffBuildFragmentNameSpread,
} from '@daffodil/core/graphql';

export const magentoApplyStoreCredit = (extraCartFragments: DocumentNode[] = []) => gql`
  mutation MagentoApplyStoreCredit($id: String!) {
    applyStoreCreditToCart(input: {cart_id: $id}) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
