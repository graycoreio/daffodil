import { gql } from 'apollo-angular';

import {
  MagentoCartPlaceOrderQueryVariables,
  MagentoPlaceOrderResponse,
} from '../public_api';

export const placeOrder = gql<MagentoPlaceOrderResponse, MagentoCartPlaceOrderQueryVariables>`
  mutation MagentoPlaceOrder($cartId: String!) {
    placeOrder(
      input: {
        cart_id: $cartId
      }
    ) {
      order {
        order_number
      }
    }
  }
`;
