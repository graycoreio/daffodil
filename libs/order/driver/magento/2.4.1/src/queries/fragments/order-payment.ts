import {gql} from 'apollo-angular';


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
