import { gql } from 'apollo-angular';

import {
  orderTotalFragment,
  orderCreditFragment,
  orderAddressFragment,
  orderInvoiceFragment,
  orderItemFragment,
  orderPaymentFragment,
  orderShipmentFragment,
} from '@daffodil/order/driver/magento/2.4.1';

export const magentoCustomerOrderFragment = gql`
  fragment magentoCustomerOrder on CustomerOrder {
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
