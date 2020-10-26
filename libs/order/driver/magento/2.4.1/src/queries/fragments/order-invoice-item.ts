import gql from 'graphql-tag';

import { orderBundleItemFragment, orderItemFragment } from './order-item';

export const orderInvoiceItemFragment = gql`
  fragment orderInvoiceItem on InvoiceItem {
    quantity_invoiced
    order_item {
      ...orderItem
    }
  }
  ${orderItemFragment}
`;

export const orderInvoiceBundleItemFragment = gql`
  fragment orderInvoiceBundleItem on BundleInvoiceItem {
    quantity_invoiced
    order_item {
      ...orderBundleItem
    }
  }
  ${orderBundleItemFragment}
`;
