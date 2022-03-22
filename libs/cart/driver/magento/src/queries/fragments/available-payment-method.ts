import { gql } from '@damienwebdev/apollo-angular';


export const availablePaymentMethodFragment = gql`
  fragment availablePaymentMethod on AvailablePaymentMethod {
    code
    title
  }
`;
