import {gql} from 'apollo-angular';


export const orderTotalFragment = gql`
  fragment orderTotal on OrderTotal {
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
