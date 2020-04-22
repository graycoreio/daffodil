import {
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { DaffCartOrderResult } from '../../models/cart-order-result';
import { DaffCartOrderReducerState } from '../../reducers/cart-order-state.interface';
import { getDaffCartFeatureSelector } from '../cart-feature.selector';
import { DaffCart } from '../../models/cart';
import { DaffCartReducersState } from '../../reducers/public_api';

export interface DaffCartOrderMemoizedSelectors<
  T extends DaffCartOrderResult = DaffCartOrderResult
> {
  selectCartOrderState: MemoizedSelector<object, DaffCartOrderReducerState<T>>;
  selectCartOrderLoading: MemoizedSelector<object, boolean>;
	selectCartOrderErrors: MemoizedSelector<object, DaffCartOrderReducerState<T>['errors']>;
	selectCartOrderValue: MemoizedSelector<object, DaffCartOrderReducerState<T>['cartOrderResult']>;
	selectCartOrderId: MemoizedSelector<object, DaffCartOrderReducerState<T>['cartOrderResult']['id']>;
}

const createCartOrderSelectors = <
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult
>(): DaffCartOrderMemoizedSelectors<V> => {
	const selectCartFeatureState = getDaffCartFeatureSelector<T, V>().selectCartFeatureState;

  const selectCartOrderState = createSelector(
		selectCartFeatureState,
		(state: DaffCartReducersState<T, V>) => state.order
  );
  const selectCartOrderValue = createSelector(
		selectCartOrderState,
		(state: DaffCartOrderReducerState<V>) => state.cartOrderResult
  );
  const selectCartOrderId = createSelector(
		selectCartOrderValue,
		(state: DaffCartOrderReducerState<V>['cartOrderResult']) => state.id
  );
  const selectCartOrderLoading = createSelector(
		selectCartOrderState,
		(state: DaffCartOrderReducerState<V>) => state.loading
	);
	const selectCartOrderErrors = createSelector(
		selectCartOrderState,
		(state: DaffCartOrderReducerState<V>) => state.errors
  );

	return {
    selectCartOrderState,
    selectCartOrderLoading,
    selectCartOrderErrors,
    selectCartOrderValue,
    selectCartOrderId
	}
}

export const getCartOrderSelectors = (() => {
	let cache;
	return <
    T extends DaffCart = DaffCart,
    V extends DaffCartOrderResult = DaffCartOrderResult
  >(): DaffCartOrderMemoizedSelectors<V> => cache = cache
		? cache
		: createCartOrderSelectors<T, V>();
})();
