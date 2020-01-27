import { DaffPaymentTokenRequest } from '../../models/payment/payment-token-request';
import { Observable } from 'rxjs';

export interface DaffPaymentServiceInterface<T extends DaffPaymentTokenRequest> {
	/**
	 * Generate a token that represents a credit card.
	 */
	generateToken(paymentTokenRequest: T): Observable<string>;
}
