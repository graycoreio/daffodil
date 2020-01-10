import { Observable } from 'rxjs';
import { DaffCharge } from '../../models/payment/request/charge';
import { DaffTransactionResponse } from '../../models/payment/response/transaction-response';

export interface DaffPaymentServiceInterface {
	/**
	 * Authorizes a credit card to be charged without actually charging the card.
	 */
	authorizeCard(charge: DaffCharge): Observable<DaffTransactionResponse>;

	/**
	 * Charges an authorized card.
	 */
	chargeAuthorizedCard(charge: DaffCharge): Observable<DaffTransactionResponse>;

	/**
	 * Authorize and charge a credit card.
	 */
	chargeAndAuthorizeCard(charge: DaffCharge): Observable<DaffTransactionResponse>;
}
