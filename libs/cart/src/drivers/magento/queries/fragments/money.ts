import gql from 'graphql-tag';

export const moneyFragment = gql`
  fragment money on MagentoMoney {
    value
    currency
  }
`;
