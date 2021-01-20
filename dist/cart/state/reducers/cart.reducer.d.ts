import { DaffCart } from '@daffodil/cart';
import { DaffCartReducerState } from './cart-state.interface';
import { ActionTypes } from './action-types.type';
/**
 * Recursively invoke reducers, passing the returned state from one into the next.
 */
export declare function composeReducers(state: any, action: any, reducers: any): any;
export declare function daffCartReducer<T extends DaffCart = DaffCart>(state: DaffCartReducerState<any>, action: ActionTypes): DaffCartReducerState<T>;
