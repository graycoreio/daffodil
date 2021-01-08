import {gql} from 'apollo-angular';


export const moneyFragment = gql`
  fragment money on Money {
    value
    currency
  }
`;
