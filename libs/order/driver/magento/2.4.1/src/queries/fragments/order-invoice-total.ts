import {gql} from 'apollo-angular';


export const orderInvoiceTotalFragment = gql`
  fragment orderInvoiceTotal on InvoiceTotal {
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
