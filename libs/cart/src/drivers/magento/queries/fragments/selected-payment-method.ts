import gql from 'graphql-tag';

export const selectedPaymentMethodFragment = gql`
  fragment selectedPaymentMethod on SelectedPaymentMethod {
    code
    title
    purchase_order_number
  }
`;
