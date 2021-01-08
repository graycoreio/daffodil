import {gql} from 'apollo-angular';


export const placeOrder = gql`
  mutation PlaceOrder($cartId: String!) {
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
