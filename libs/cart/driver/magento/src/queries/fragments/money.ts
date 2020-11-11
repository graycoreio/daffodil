import gql from 'graphql-tag';

export const moneyFragment = gql`
  fragment money on Money {
    value
    currency
  }
`;
