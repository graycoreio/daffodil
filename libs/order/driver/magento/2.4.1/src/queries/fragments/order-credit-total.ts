import gql from 'graphql-tag';

export const orderCreditTotalFragment = gql`
  fragment orderCreditTotal on CreditMemoTotal {
    __typename
    discounts {
      amount {
        value
      }
      label
    }
    grand_total {
      value
    }
    subtotal {
      value
    }
    total_tax {
      value
    }
    total_shipping {
      value
    }
  }
`;
