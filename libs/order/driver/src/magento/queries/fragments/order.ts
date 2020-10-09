import gql from 'graphql-tag';
import { orderItemFragment } from './order-item';
import { orderAddressFragment } from './order-address';
import { orderShipmentFragment } from './order-shipment';
import { orderPaymentFragment } from './order-payment';
import { orderInvoiceFragment } from './order-invoice';

export const orderFragment = gql`
  fragment order on GraycoreOrder {
    id
    order_number
    customer_id
    created_at
    updated_at
    grand_total
    subtotal
    subtotal_including_tax
    subtotal_with_discount_excluding_tax
    subtotal_with_discount_including_tax
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
