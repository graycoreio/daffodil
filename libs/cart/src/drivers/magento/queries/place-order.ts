import gql from 'graphql-tag';

export const placeOrder = gql`
  mutation PlaceOrder($cartId: String!) {
    mutation {
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
  }
`;
