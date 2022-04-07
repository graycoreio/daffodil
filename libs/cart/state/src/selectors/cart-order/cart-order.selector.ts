import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  DaffCartOrderResult,
  DaffCart,
} from '@daffodil/cart';
import { DaffState } from '@daffodil/core/state';

import { DaffStatefulCartItem } from '../../models/stateful-cart-item';
import {
  DaffCartReducersState,
  DaffCartOrderReducerState,
  DaffCartStateRootSlice,
} from '../../reducers/public_api';
import { getDaffCartFeatureSelector } from '../cart-feature.selector';

export interface DaffCartOrderMemoizedSelectors<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
  U extends DaffStatefulCartItem = DaffStatefulCartItem
> {
  selectCartOrderState: MemoizedSelector<DaffCartStateRootSlice<T, V, U>, DaffCartOrderReducerState<V>>;
  /**
   * Selects whether there is a cart order operation in progress.
   */
  selectCartOrderLoading: MemoizedSelector<DaffCartStateRootSlice<T, V, U>, boolean>;
  /**
   * Selects whether there is a place order operation in progress.
   */
  selectCartOrderMutating: MemoizedSelector<DaffCartStateRootSlice<T, V, U>, boolean>;
  selectCartOrderErrors: MemoizedSelector<DaffCartStateRootSlice<T, V, U>, DaffCartOrderReducerState<V>['errors']>;
  selectCartOrderValue: MemoizedSelector<DaffCartStateRootSlice<T, V, U>, DaffCartOrderReducerState<V>['cartOrderResult']>;
  selectCartOrderId: MemoizedSelector<DaffCartStateRootSlice<T, V, U>, DaffCartOrderReducerState<V>['cartOrderResult']['orderId']>;
  selectCartOrderCartId: MemoizedSelector<DaffCartStateRootSlice<T, V, U>, DaffCartOrderReducerState<V>['cartOrderResult']['cartId']>;
  selectHasOrderResult: MemoizedSelector<DaffCartStateRootSlice<T, V, U>, boolean>;
}

const createCartOrderSelectors = <
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
  U extends DaffStatefulCartItem = DaffStatefulCartItem
>(): DaffCartOrderMemoizedSelectors<T, V, U> => {
  const selectCartFeatureState = getDaffCartFeatureSelector<T, V, U>().selectCartFeatureState;

  const selectCartOrderState = createSelector(
    selectCartFeatureState,
    (state: DaffCartReducersState<T, V, U>) => state.order,
  );
  const selectCartOrderValue = createSelector(
    selectCartOrderState,
    (state: DaffCartOrderReducerState<V>) => state.cartOrderResult,
  );
  const selectCartOrderId = createSelector(
    selectCartOrderValue,
    (state: DaffCartOrderReducerState<V>['cartOrderResult']) => state.orderId,
  );
  const selectCartOrderCartId = createSelector(
    selectCartOrderValue,
    (state: DaffCartOrderReducerState<V>['cartOrderResult']) => state.cartId,
  );
  const selectCartOrderLoading = createSelector(
    selectCartOrderState,
    (state: DaffCartOrderReducerState<V>) => state.loading !== DaffState.Complete,
  );
  const selectCartOrderMutating = createSelector(
    selectCartOrderState,
    (state: DaffCartOrderReducerState<V>) => state.loading === DaffState.Mutating,
  );
  const selectCartOrderErrors = createSelector(
    selectCartOrderState,
    (state: DaffCartOrderReducerState<V>) => state.errors,
  );
  const selectHasOrderResult = createSelector(
    selectCartOrderValue,
    orderResult => !!(
      orderResult && orderResult.orderId && orderResult.cartId
    ),
  );

  return {
    selectCartOrderState,
    selectCartOrderLoading,
    selectCartOrderMutating,
    selectCartOrderErrors,
    selectCartOrderValue,
    selectCartOrderId,
    selectCartOrderCartId,
    selectHasOrderResult,
  };
};

export const getCartOrderSelectors = (() => {
  let cache;
  return <
    T extends DaffCart = DaffCart,
    V extends DaffCartOrderResult = DaffCartOrderResult,
    U extends DaffStatefulCartItem = DaffStatefulCartItem
  >(): DaffCartOrderMemoizedSelectors<T, V, U> => cache = cache
    ? cache
    : createCartOrderSelectors<T, V, U>();
})();
