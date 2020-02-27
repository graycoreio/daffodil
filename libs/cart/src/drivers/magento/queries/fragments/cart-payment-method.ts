import gql from 'graphql-tag';

export const cartPaymentMethodFragment = gql`
  fragment cartPaymentMethod on AvailablePaymentMethod {
    code
    title
    purchase_order_number
  }
`;
