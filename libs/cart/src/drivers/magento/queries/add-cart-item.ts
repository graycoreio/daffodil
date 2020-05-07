import gql from 'graphql-tag';

import { cartFragment } from './fragments/public_api';

export const addSimpleCartItem = gql`
  mutation AddSimpleCartItem($cartId: String!, $input: CartItemInput!) {
    addSimpleProductsToCart(input: {
      cart_id: $cartId,
      cart_items: [{
        data: $input
      }]
    }) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;

export const addBundleCartItem = gql`
  mutation AddBundleCartItem($cartId: String!, $input: CartItemInput!, $options: [BundleOptionInput]!) {
    addBundleProductsToCart(input: {
      cart_id: $cartId,
      cart_items: [{
				data: $input,
				bundle_options: $options
      }]
    }) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;

export const addConfigurableCartItem = gql`
  mutation AddConfigurableCartItem($cartId: String!, $input: CartItemInput!, $variantSku: String) {
    addConfigurableProductsToCart(input: {
      cart_id: $cartId,
      cart_items: [{
				data: $input,
				variant_sku: $variantSku
      }]
    }) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;