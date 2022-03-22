import { gql } from '@damienwebdev/apollo-angular';

import { orderAddressFragment } from './order-address';
import { orderCreditFragment } from './order-credit';
import { orderInvoiceFragment } from './order-invoice';
import { orderItemFragment } from './order-item';
import { orderPaymentFragment } from './order-payment';
import { orderShipmentFragment } from './order-shipment';
import { orderTotalFragment } from './order-total';

export const orderFragment = gql`
  fragment order on GraycoreGuestOrder {
    id
    order_date
    status
    carrier
    number
    shipping_method
    items {
      ...orderItem
    }
    billing_address {
      ...orderAddress
    }
    shipping_address {
      ...orderAddress
    }
    shipments {
      ...orderShipment
    }
    payment_methods {
      ...orderPayment
    }
    invoices {
      ...orderInvoice
    }
    credit_memos {
      ...orderCredit
    }
    total {
      ...orderTotal
    }
  }
  ${orderItemFragment}
  ${orderShipmentFragment}
  ${orderPaymentFragment}
  ${orderInvoiceFragment}
  ${orderCreditFragment}
  ${orderAddressFragment}
  ${orderTotalFragment}
`;
