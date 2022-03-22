import { gql } from '@damienwebdev/apollo-angular';


export const moneyFragment = gql`
  fragment money on Money {
    value
    currency
  }
`;
