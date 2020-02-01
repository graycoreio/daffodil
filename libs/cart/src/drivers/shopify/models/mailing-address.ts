import { MailingAddressNode } from './mailing-address-node';
import { ShippingRateNode } from './shipping-rate-node';

export interface MailingAddress extends MailingAddressNode {
  customer_id: string;
  shipping_rate: ShippingRateNode;
}
