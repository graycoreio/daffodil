import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentNameSpread,
  daffBuildFragmentDefinition,
} from '@daffodil/core/graphql';

import { cartFragment } from './fragments/public_api';

export const addSimpleCartItem = (extraCartFragments: DocumentNode[] = []) => gql`
  mutation MagentoAddSimpleCartItem($cartId: String!, $input: CartItemInput!) {
    addSimpleProductsToCart(input: {
      cart_id: $cartId,
      cart_items: [{
        data: $input
      }]
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

export const addBundleCartItem = (extraCartFragments: DocumentNode[] = []) => gql`
  mutation MagentoAddBundleCartItem($cartId: String!, $input: CartItemInput!, $options: [BundleOptionInput]!) {
    addBundleProductsToCart(input: {
      cart_id: $cartId,
      cart_items: [{
				data: $input,
				bundle_options: $options
      }]
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

export const addConfigurableCartItem = (extraCartFragments: DocumentNode[] = []) => gql`
  mutation MagentoAddConfigurableCartItem($cartId: String!, $parentSku: String, $data: CartItemInput!) {
    addConfigurableProductsToCart(input: {
      cart_id: $cartId,
      cart_items: [{
				parent_sku: $parentSku
				data: $data,
      }]
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
