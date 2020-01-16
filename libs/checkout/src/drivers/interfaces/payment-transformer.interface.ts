import { DaffPaymentTokenRequest } from '../../models/payment/payment-token-request';

export interface DaffPaymentTransformerService<T extends DaffPaymentTokenRequest> {
	transformOut(paymentTokenRequest: T): any;

	transformIn(response: any): string;
}
