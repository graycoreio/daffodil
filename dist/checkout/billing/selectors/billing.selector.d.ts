import { MemoizedSelector } from '@ngrx/store';
import { DaffAddress } from '@daffodil/core';
import { PaymentInfo } from '../../models/payment/payment-info';
import { DaffBillingReducersState } from '../reducers/billing-reducers.interface';
import { DaffBillingReducerState } from '../reducers/billing/billing-reducer.interface';
/**
 * Billing Feature State
 */
export declare const selectBillingFeatureState: MemoizedSelector<object, DaffBillingReducersState>;
/**
 * Billing State
 */
export declare const selectBillingState: MemoizedSelector<object, DaffBillingReducerState, import("@ngrx/store").DefaultProjectorFn<DaffBillingReducerState>>;
export declare const selectBillingAddress: MemoizedSelector<object, DaffAddress>;
export declare const selectBillingAddressIsShippingAddress: MemoizedSelector<object, boolean>;
export declare const selectPaymentInfo: MemoizedSelector<object, PaymentInfo>;
