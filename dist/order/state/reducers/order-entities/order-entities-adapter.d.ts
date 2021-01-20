import { EntityAdapter } from '@ngrx/entity';
import { DaffOrder } from '@daffodil/order';
/**
 * Order Adapter for changing/overwriting entity state.
 */
export declare const daffGetOrderAdapter: <T extends DaffOrder = DaffOrder>() => EntityAdapter<T>;
