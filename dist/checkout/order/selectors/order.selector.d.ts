import { MemoizedSelector } from '@ngrx/store';
import { DaffOrder } from '../../models/order/order';
import { DaffOrderReducersState } from '../reducers/order-reducers.interface';
import { DaffOrderReducerState } from '../reducers/order/order-reducer.interface';
/**
 * Order Feature State
 * @deprecated
 */
export declare const selectOrderFeatureState: MemoizedSelector<object, DaffOrderReducersState>;
/**
 * Order State
 * @deprecated
 */
export declare const selectOrderState: MemoizedSelector<object, DaffOrderReducerState, import("@ngrx/store").DefaultProjectorFn<DaffOrderReducerState>>;
/**
 * @deprecated
 */
export declare const selectOrder: MemoizedSelector<object, DaffOrder>;
/**
 * @deprecated
 */
export declare const selectLoading: MemoizedSelector<object, boolean>;
/**
 * @deprecated
 */
export declare const selectErrors: MemoizedSelector<object, string[]>;
