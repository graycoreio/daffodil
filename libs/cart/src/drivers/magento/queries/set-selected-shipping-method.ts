import gql from 'graphql-tag';

import { cartFragment } from './fragments';

export const setSelectedShippingMethod = gql`
  mutation SetSelectedShippingMethod($cartId: String!, $method: MagentoShippingMethodInput!) {
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
