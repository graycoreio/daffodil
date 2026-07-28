import { gql } from 'apollo-angular';

import { orderAddressFragment } from './order-address';
import { orderInvoiceFragment } from './order-invoice';
import { orderItemFragment } from './order-item';
import { orderPaymentFragment } from './order-payment';
import { orderShipmentFragment } from './order-shipment';

export const orderFragment = gql`
  fragment order on GraycoreOrder {
    id
    order_number
    customer_id
    created_at
    updated_at
    grand_total
    subtotal
    shipping
    discount
    tax
    status
    applied_codes
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
    payment {
      ...orderPayment
    }
    invoices {
      ...orderInvoice
    }
    credits {
      ...orderInvoice
    }
  }
  ${orderItemFragment}
  ${orderShipmentFragment}
  ${orderPaymentFragment}
  ${orderInvoiceFragment}
  ${orderAddressFragment}
`;
