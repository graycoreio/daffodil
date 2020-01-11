import { DaffCreditCard } from "../../models/payment/credit-card";

export interface DaffPaymentServiceInterface {
	/**
	 * Generate a token that represents a credit card.
	 */
	generateToken(card: DaffCreditCard): string;
}
