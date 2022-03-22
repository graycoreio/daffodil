import { gql } from '@damienwebdev/apollo-angular';


export const orderPaymentFragment = gql`
  fragment orderPayment on OrderPaymentMethod {
    name
    type
    additional_data {
      name
      value
    }
  }
`;
