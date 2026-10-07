import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { MagentoListPaymentMethodsResponse } from './response.type';
import { MagentoCartListPaymentMethodsQueryVariables } from './variables.type';
import { availablePaymentMethodFragment } from '../fragments/public_api';

export const listPaymentMethods = (extraCartFragments: DocumentNode[] = []) => gql<MagentoListPaymentMethodsResponse, MagentoCartListPaymentMethodsQueryVariables>`
  query MagentoListPaymentMethods($cartId: String!) {
    cart(cart_id: $cartId) {
      available_payment_methods {
        ...availablePaymentMethod
      }
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${availablePaymentMethodFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`;
