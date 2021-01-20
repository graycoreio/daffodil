import { MemoizedSelector } from '@ngrx/store';
import { DaffAddress } from '@daffodil/core';
import { DaffShippingReducerState } from '../reducers/shipping/shipping-reducer.interface';
import { DaffShippingReducersState } from '../reducers/shipping-reducers.interface';
/**
 * Shipping Feature State
 */
export declare const selectShippingFeatureState: MemoizedSelector<object, DaffShippingReducersState>;
/**
 * Shipping State
 */
export declare const selectShippingState: MemoizedSelector<object, DaffShippingReducerState, import("@ngrx/store").DefaultProjectorFn<DaffShippingReducerState>>;
export declare const selectShippingAddress: MemoizedSelector<object, DaffAddress>;
export declare const selectShippingOptionId: MemoizedSelector<object, string>;
export declare const selectIsShippingAddressValid: MemoizedSelector<object, boolean>;
