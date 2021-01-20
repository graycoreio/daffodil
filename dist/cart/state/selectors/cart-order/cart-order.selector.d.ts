import { MemoizedSelector } from '@ngrx/store';
import { DaffCartOrderResult, DaffCart } from '@daffodil/cart';
import { DaffCartOrderReducerState } from '../../reducers/public_api';
import { DaffStatefulCartItem } from '../../models/stateful-cart-item';
export interface DaffCartOrderMemoizedSelectors<T extends DaffCartOrderResult = DaffCartOrderResult> {
    selectCartOrderState: MemoizedSelector<object, DaffCartOrderReducerState<T>>;
    /**
     * Selects whether there is a cart order operation in progress.
     */
    selectCartOrderLoading: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a place order operation in progress.
     */
    selectCartOrderMutating: MemoizedSelector<object, boolean>;
    selectCartOrderErrors: MemoizedSelector<object, DaffCartOrderReducerState<T>['errors']>;
    selectCartOrderValue: MemoizedSelector<object, DaffCartOrderReducerState<T>['cartOrderResult']>;
    selectCartOrderId: MemoizedSelector<object, DaffCartOrderReducerState<T>['cartOrderResult']['orderId']>;
    selectCartOrderCartId: MemoizedSelector<object, DaffCartOrderReducerState<T>['cartOrderResult']['cartId']>;
    selectHasOrderResult: MemoizedSelector<object, boolean>;
}
export declare const getCartOrderSelectors: <T extends DaffCart = DaffCart, V extends DaffCartOrderResult = DaffCartOrderResult, U extends DaffStatefulCartItem = DaffStatefulCartItem>() => DaffCartOrderMemoizedSelectors<V>;
