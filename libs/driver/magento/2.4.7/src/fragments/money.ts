import { gql } from 'apollo-angular';

export const magentoMoneyFragment = gql`
  fragment moneyFragment on Money {
    value
    currency
  }
`;
