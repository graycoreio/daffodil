import gql from 'graphql-tag';

export const availablePaymentMethodFragment = gql`
  fragment availablePaymentMethod on AvailablePaymentMethod {
    code
    title
  }
`;
