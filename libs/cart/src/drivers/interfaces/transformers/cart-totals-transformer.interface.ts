import { DaffCartTotal } from '../../../models/cart-total';
import { InjectionToken } from '@angular/core';

/**
 * A transformer for coalescing a cart total of a given platform into a generic
 * DaffCartTotal
 */
export interface DaffCartTotalsTransformerInterface<T extends DaffCartTotal> {
	/**
	 * Transform a total into a kind of DaffCartTotal.
	 */
	transform(total: any): T;
}

export const DaffCartTotalTransformer = new InjectionToken<
	DaffCartTotalsTransformerInterface<any>
>('DaffCartTotalTransformer');
