import { gql } from 'apollo-angular';

import { orderAddressFragment } from './order-address';
import { orderPaymentFragment } from './order-payment';
import { orderShipmentItemFragment } from './order-shipment-item';

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
		payment {
			...orderPayment
		}
  }
  ${orderShipmentItemFragment}
  ${orderAddressFragment}
  ${orderPaymentFragment}
`;
