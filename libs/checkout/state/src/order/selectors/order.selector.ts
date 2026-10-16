import {
  createSelector,
  MemoizedSelector,
  defaultMemoize,
} from '@ngrx/store';

import { DaffCheckoutOrderResult } from '@daffodil/checkout';
import {
  daffOperationStateSelectorFactory,
  DaffOperationStateSelectors,
} from '@daffodil/core/state';

import {
  DaffCheckoutReducersState,
  DaffCheckoutStateRootSlice,
} from '../../reducers/public_api';
import { getDaffCheckoutFeatureSelector } from '../../selectors/public_api';
import { DaffCheckoutOrderReducerState } from '../reducers/public_api';

export interface DaffCheckoutOrderMemoizedSelectors<
  T extends DaffCheckoutOrderResult = DaffCheckoutOrderResult,
> extends DaffOperationStateSelectors<DaffCheckoutStateRootSlice, DaffCheckoutOrderReducerState<T>> {
  selectCheckoutOrderState: MemoizedSelector<DaffCheckoutStateRootSlice, DaffCheckoutOrderReducerState<T>>;
  selectCheckoutOrderValue: MemoizedSelector<DaffCheckoutStateRootSlice, DaffCheckoutOrderReducerState<T>['orderResult']>;
  selectHasOrderResult: MemoizedSelector<DaffCheckoutStateRootSlice, boolean>;
}

const createCheckoutOrderSelectors = <
  T extends DaffCheckoutOrderResult = DaffCheckoutOrderResult,
>(): DaffCheckoutOrderMemoizedSelectors<T> => {
  const selectCheckoutFeatureState = getDaffCheckoutFeatureSelector().selectCheckoutFeatureState;

  const selectCheckoutOrderState = createSelector(
    selectCheckoutFeatureState,
    (state: DaffCheckoutReducersState) => <DaffCheckoutOrderReducerState<T>>state.order,
  );
  const selectCheckoutOrderValue = createSelector(
    selectCheckoutOrderState,
    (state: DaffCheckoutOrderReducerState<T>) => state.orderResult,
  );
  const selectHasOrderResult = createSelector(
    selectCheckoutOrderValue,
    orderResult => !!(
      orderResult && orderResult.orderId && orderResult.cartId
    ),
  );

  return {
    ...daffOperationStateSelectorFactory(selectCheckoutOrderState),
    selectCheckoutOrderState,
    selectCheckoutOrderValue,
    selectHasOrderResult,
  };
};

export const daffCheckoutOrderSelectorsFactory: <
  T extends DaffCheckoutOrderResult = DaffCheckoutOrderResult,
>() => DaffCheckoutOrderMemoizedSelectors<T> = defaultMemoize(<
  T extends DaffCheckoutOrderResult = DaffCheckoutOrderResult,
>() => createCheckoutOrderSelectors<T>()).memoized;
