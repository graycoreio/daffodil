import { DaffPaymentTokenRequest } from '../../models/payment/payment-token-request';

export interface DaffPaymentServiceInterface<T extends DaffPaymentTokenRequest> {
	/**
	 * Generate a token that represents a credit card.
	 */
	generateToken(paymentTokenRequest: T): string;
}
