import { DaffCreditCardInfo } from './credit-card-info';
import { DaffMerchantAuthentication } from './merchant-authentication';

/**
 * An object for processing a payment.
 */
export interface DaffCharge {
	creditCard?: DaffCreditCardInfo;
	amount: number;
	merchantInfo: DaffMerchantAuthentication;
}
