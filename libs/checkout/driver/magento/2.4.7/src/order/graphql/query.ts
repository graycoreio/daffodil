import { gql } from 'apollo-angular';

import { MagentoPlaceOrderResponse } from './response.type';
import { MagentoCheckoutPlaceOrderQueryVariables } from './variables.type';

export const magentoCheckoutPlaceOrderQuery = gql<MagentoPlaceOrderResponse, MagentoCheckoutPlaceOrderQueryVariables>`
  mutation MagentoPlaceOrder($cartId: String!) {
    placeOrder(
      input: {
        cart_id: $cartId
      }
    ) {
      orderV2 {
        number
      }
			errors {
				code
				message
			}
    }
  }
`;
