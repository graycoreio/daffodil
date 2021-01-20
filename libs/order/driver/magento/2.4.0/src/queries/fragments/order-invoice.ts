import {gql} from 'apollo-angular';

import { orderShipmentItemFragment } from './order-shipment-item';
import { orderAddressFragment } from './order-address';
import { orderPaymentFragment } from './order-payment';

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
