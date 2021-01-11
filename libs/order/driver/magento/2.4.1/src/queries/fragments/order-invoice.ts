import {gql} from 'apollo-angular';

import { orderInvoiceItemFragment } from './order-invoice-item';
import { orderInvoiceTotalFragment } from './order-invoice-total';

export const orderInvoiceFragment = gql`
  fragment orderInvoice on Invoice {
    __typename
    id
    items {
      ...orderInvoiceItem
    }
    total {
      ...orderInvoiceTotal
    }
  }
  ${orderInvoiceItemFragment}
  ${orderInvoiceTotalFragment}
`;
