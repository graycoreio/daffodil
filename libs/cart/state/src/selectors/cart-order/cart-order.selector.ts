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
} from '../../reducers/public_api';
import { getDaffCartFeatureSelector } from '../cart-feature.selector';

export interface DaffCartOrderMemoizedSelectors<
  T extends DaffCartOrderResult = DaffCartOrderResult
> {
  selectCartOrderState: MemoizedSelector<Record<string, any>, DaffCartOrderReducerState<T>>;
  /**
   * Selects whether there is a cart order operation in progress.
   */
  selectCartOrderLoading: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a place order operation in progress.
   */
  selectCartOrderMutating: MemoizedSelector<Record<string, any>, boolean>;
	selectCartOrderErrors: MemoizedSelector<Record<string, any>, DaffCartOrderReducerState<T>['errors']>;
	selectCartOrderValue: MemoizedSelector<Record<string, any>, DaffCartOrderReducerState<T>['cartOrderResult']>;
	selectCartOrderId: MemoizedSelector<Record<string, any>, DaffCartOrderReducerState<T>['cartOrderResult']['orderId']>;
	selectCartOrderCartId: MemoizedSelector<Record<string, any>, DaffCartOrderReducerState<T>['cartOrderResult']['cartId']>;
  selectHasOrderResult: MemoizedSelector<Record<string, any>, boolean>;
}

const createCartOrderSelectors = <
  T extends DaffCart = DaffCart,
	V extends DaffCartOrderResult = DaffCartOrderResult,
	U extends DaffStatefulCartItem = DaffStatefulCartItem
>(): DaffCartOrderMemoizedSelectors<V> => {
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
  >(): DaffCartOrderMemoizedSelectors<V> => cache = cache
    ? cache
    : createCartOrderSelectors<T, V, U>();
})();
