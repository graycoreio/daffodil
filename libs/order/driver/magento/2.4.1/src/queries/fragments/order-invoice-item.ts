import {gql} from 'apollo-angular';

import { orderItemFragment } from './order-item';

export const orderInvoiceItemFragment = gql`
  fragment orderInvoiceItem on InvoiceItemInterface {
    quantity_invoiced
    order_item {
      ...orderItem
    }
  }
  ${orderItemFragment}
`;
