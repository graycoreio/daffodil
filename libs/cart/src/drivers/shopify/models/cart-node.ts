import { MailingAddressNode } from './mailing-address-node'
import { ShippingRateNode } from './shipping-rate-node'
import { MoneyV2 } from './money-v2'
import { CheckoutLineItemConnection } from './checkout-line-item-connection'

export interface CartNode {
  id: string;
  createdAt: string;
  updatedAt: string;
  shippingAddress: MailingAddressNode;
  shippingLine: ShippingRateNode;
  currencyCode: string;
  totalPriceV2: MoneyV2;
  subtotalPriceV2: MoneyV2;
  lineItemsSubtotalPrice: MoneyV2;
  lineItems: CheckoutLineItemConnection;
}
