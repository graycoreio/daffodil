import { gql } from '@damienwebdev/apollo-angular';


export const selectedPaymentMethodFragment = gql`
  fragment selectedPaymentMethod on SelectedPaymentMethod {
    code
    title
    purchase_order_number
  }
`;
