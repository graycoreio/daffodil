import { DaffCart } from '@daffodil/cart';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
export declare function cartPaymentReducer<T extends DaffCart>(state: DaffCartReducerState<any>, action: ActionTypes): DaffCartReducerState<T>;
