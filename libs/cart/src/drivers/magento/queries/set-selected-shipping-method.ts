import gql from 'graphql-tag';

import { cartFragment } from './fragments/public_api';

export const setSelectedShippingMethod = gql`
  mutation SetSelectedShippingMethod($cartId: String!, $method: ShippingMethodInput!) {
    setShippingMethodsOnCart(input: {
      cart_id: $cartId
      shipping_methods: [$method]
    }) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;
