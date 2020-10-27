import gql from 'graphql-tag';

import { orderInvoiceItemFragment, orderInvoiceBundleItemFragment } from './order-invoice-item';
import { orderInvoiceTotalFragment } from './order-invoice-total';

export const orderInvoiceFragment = gql`
  fragment orderInvoice on Invoice {
    items {
      ...orderInvoiceItem
      ...orderInvoiceBundleItem
    }
    total {
      ...orderInvoiceTotal
    }
  }
  ${orderInvoiceItemFragment}
  ${orderInvoiceBundleItemFragment}
  ${orderInvoiceTotalFragment}
`;
