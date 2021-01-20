import { DaffPaymentReducersState } from '../reducers/payment-reducers.interface';
import { DaffPaymentReducerState } from '../reducers/payment/payment-reducer.interface';
/**
 * Payment Feature State
 */
export declare const selectPaymentFeatureState: import("@ngrx/store").MemoizedSelector<object, DaffPaymentReducersState, import("@ngrx/store").DefaultProjectorFn<DaffPaymentReducersState>>;
/**
 * Payment State
 */
export declare const selectPaymentState: import("@ngrx/store").MemoizedSelector<object, DaffPaymentReducerState, import("@ngrx/store").DefaultProjectorFn<DaffPaymentReducerState>>;
export declare const selectPaymentInfo: import("@ngrx/store").MemoizedSelector<object, import("../..").PaymentInfo, import("@ngrx/store").DefaultProjectorFn<import("../..").PaymentInfo>>;
