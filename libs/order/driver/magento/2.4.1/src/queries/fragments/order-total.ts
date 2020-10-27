import gql from 'graphql-tag';

export const orderTotalFragment = gql`
  fragment orderTotal on OrderTotal {
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
