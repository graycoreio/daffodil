/**
 * Authentication information needed to process a payment.
 */
export interface DaffMerchantAuthentication {
	merchantKey: string;
	transactionKey?: string;
}
