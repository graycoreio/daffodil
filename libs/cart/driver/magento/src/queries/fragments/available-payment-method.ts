import {gql} from 'apollo-angular';


export const availablePaymentMethodFragment = gql`
  fragment availablePaymentMethod on AvailablePaymentMethod {
    code
    title
  }
`;
