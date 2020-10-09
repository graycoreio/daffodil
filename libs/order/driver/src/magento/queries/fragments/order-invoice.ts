import gql from 'graphql-tag';

import { orderShipmentItemFragment } from './order-shipment-item';
import { orderAddressFragment } from './order-address';

export const orderInvoiceFragment = gql`
  fragment orderInvoice on GraycoreOrderInvoice {
    items {
      ...orderShipmentItem
    }
    grand_total
    subtotal
    shipping
    discount
    tax
    billing_address {
      ...orderAddress
    }
    shipping_address {
      ...orderAddress
    }
  }
  ${orderShipmentItemFragment}
  ${orderAddressFragment}
`;
