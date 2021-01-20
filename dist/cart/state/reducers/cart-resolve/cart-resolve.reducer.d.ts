import { DaffCart } from '@daffodil/cart';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';
export declare function cartResolveReducer<T extends DaffCart = DaffCart>(state: DaffCartReducerState<any>, action: ActionTypes): DaffCartReducerState<T>;
