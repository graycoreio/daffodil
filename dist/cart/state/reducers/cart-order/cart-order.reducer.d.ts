import { DaffCartOrderResult } from '@daffodil/cart';
import { DaffCartOrderActions } from '../../actions/public_api';
import { DaffCartOrderReducerState } from './cart-order-state.interface';
export declare function daffCartOrderReducer<T extends DaffCartOrderResult = DaffCartOrderResult>(state: DaffCartOrderReducerState<any>, action: DaffCartOrderActions<T>): DaffCartOrderReducerState<T>;
