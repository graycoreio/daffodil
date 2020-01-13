/**
 * An object for requesting that a cart be processed into an order.
 */
export interface DaffCartProcessRequest {
	cartId: string;
	paymentNonce?: string;
}
