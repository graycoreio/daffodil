import gql from 'graphql-tag';

export const orderPaymentFragment = gql`
  fragment orderPayment on OrderPaymentMethod {
    __typename
    name
    type
    additional_data {
      name
      value
    }
  }
`;
