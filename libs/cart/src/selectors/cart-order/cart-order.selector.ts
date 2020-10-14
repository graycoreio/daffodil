import {
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { DaffCartOrderResult } from '../../models/cart-order-result';
import { getDaffCartFeatureSelector } from '../cart-feature.selector';
import { DaffCart } from '../../models/cart';
import { DaffCartReducersState, DaffCartOrderReducerState } from '../../reducers/public_api';
import { DaffCartItem } from '../../models/cart-item';
import { DaffLoadingState } from '@daffodil/core/state';

export interface DaffCartOrderMemoizedSelectors<
  T extends DaffCartOrderResult = DaffCartOrderResult
> {
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

const createCartOrderSelectors = <
  T extends DaffCart = DaffCart,
	V extends DaffCartOrderResult = DaffCartOrderResult,
	U extends DaffCartItem = DaffCartItem
>(): DaffCartOrderMemoizedSelectors<V> => {
	const selectCartFeatureState = getDaffCartFeatureSelector<T, V, U>().selectCartFeatureState;

  const selectCartOrderState = createSelector(
		selectCartFeatureState,
		(state: DaffCartReducersState<T, V, U>) => state.order
  );
  const selectCartOrderValue = createSelector(
		selectCartOrderState,
		(state: DaffCartOrderReducerState<V>) => state.cartOrderResult
  );
  const selectCartOrderId = createSelector(
		selectCartOrderValue,
		(state: DaffCartOrderReducerState<V>['cartOrderResult']) => state.orderId
  );
  const selectCartOrderCartId = createSelector(
		selectCartOrderValue,
		(state: DaffCartOrderReducerState<V>['cartOrderResult']) => state.cartId
  );
  const selectCartOrderLoading = createSelector(
		selectCartOrderState,
		(state: DaffCartOrderReducerState<V>) => state.loading !== DaffLoadingState.Complete
  );
  const selectCartOrderMutating = createSelector(
		selectCartOrderState,
		(state: DaffCartOrderReducerState<V>) => state.loading === DaffLoadingState.Mutating
	);
	const selectCartOrderErrors = createSelector(
		selectCartOrderState,
		(state: DaffCartOrderReducerState<V>) => state.errors
  );
  const selectHasOrderResult = createSelector(
    selectCartOrderValue,
    orderResult => !!(
      orderResult && orderResult.orderId && orderResult.cartId
    )
  );

	return {
    selectCartOrderState,
    selectCartOrderLoading,
    selectCartOrderMutating,
    selectCartOrderErrors,
    selectCartOrderValue,
    selectCartOrderId,
    selectCartOrderCartId,
    selectHasOrderResult
	}
}

export const getCartOrderSelectors = (() => {
	let cache;
	return <
    T extends DaffCart = DaffCart,
		V extends DaffCartOrderResult = DaffCartOrderResult,
		U extends DaffCartItem = DaffCartItem
  >(): DaffCartOrderMemoizedSelectors<V> => cache = cache
		? cache
		: createCartOrderSelectors<T, V, U>();
})();
