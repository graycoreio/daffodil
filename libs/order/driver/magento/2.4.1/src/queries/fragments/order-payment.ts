import gql from 'graphql-tag';

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
