import { CheckoutLineItemInput } from './checkout-line-item-input';
import { MailingAddressInput } from './mailing-address-input';

export interface CheckoutCreateInput {
  allowPartialAddresses: boolean,
  customAttributes: any[],
  email: string,
  lineItems: CheckoutLineItemInput[],
  note: string,
  presentmentCurrencyCode: string,
  shippingAddress: MailingAddressInput,
}
