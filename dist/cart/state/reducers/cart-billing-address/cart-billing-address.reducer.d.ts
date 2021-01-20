import { DaffCart } from '@daffodil/cart';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
export declare function cartBillingAddressReducer<T extends DaffCart>(state: DaffCartReducerState<any>, action: ActionTypes): DaffCartReducerState<T>;
