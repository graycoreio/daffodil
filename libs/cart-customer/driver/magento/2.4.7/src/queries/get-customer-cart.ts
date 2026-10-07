import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import { cartFragment } from '@daffodil/cart/driver/magento';
import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

export const getCustomerCart = (extraCartFragments: DocumentNode[] = []) => gql`
  query MagentoGetCustomerCart {
    customerCart {
      ...cart
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
