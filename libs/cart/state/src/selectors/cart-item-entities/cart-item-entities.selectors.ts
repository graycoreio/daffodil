import {
  createSelector,
  MemoizedSelector,
  defaultMemoize,
} from '@ngrx/store';

import {
  DaffConfigurableCartItemAttribute,
  DaffCompositeCartItemOption,
  DaffCart,
  DaffCartOrderResult,
  DaffCartItemInputType,
  DaffCompositeCartItem,
  DaffCartItemDiscount,
  DaffConfigurableCartItem,
} from '@daffodil/cart';
import { daffAdd } from '@daffodil/core';
import {
  DaffOperationEntity,
  DaffOperationEntityState,
  DaffState,
  DaffStateError,
  daffOperationStateSelectorFactory,
} from '@daffodil/core/state';

import { daffCartItemEntitiesAdapter } from '../../reducers/cart-item-entities/adapter';
import {
  DaffCartStateRootSlice,
  DaffCartReducersState,
} from '../../reducers/public_api';
import { getDaffCartFeatureSelector } from '../cart-feature.selector';

export interface DaffCartItemEntitiesMemoizedSelectors<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
> {
  selectCartItemEntitiesState: MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffOperationEntityState<T['items'][number]>>;
  selectCartItemIds: MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffOperationEntityState<T['items'][number]>['ids']>;
  selectCartItemEntities: MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffOperationEntityState<T['items'][number]>['entities']>;
  selectAllCartItems: MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffOperationEntity<T['items'][number]>[]>;
  selectCartItemTotal: MemoizedSelector<DaffCartStateRootSlice<T, V>, number>;
  selectCartItem: (id: T['items'][number]['id']) => MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffOperationEntity<T['items'][number]>>;
  selectTotalNumberOfCartItems: MemoizedSelector<DaffCartStateRootSlice<T, V>, number>;
  selectCartItemConfiguredAttributes: (id: T['items'][number]['id']) => MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffConfigurableCartItemAttribute[]>;
  selectCartItemCompositeOptions: (id: T['items'][number]['id']) => MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffCompositeCartItemOption[]>;
  selectIsCartItemOutOfStock: (id: T['items'][number]['id']) => MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects all cart items that are out of stock.
   */
  selectOutOfStockCartItems: MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffOperationEntity<T['items'][number]>[]>;
  /**
   * Selects all cart items that are in stock.
   */
  selectInStockCartItems: MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffOperationEntity<T['items'][number]>[]>;
  selectCartItemMutating: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
}

const createCartItemEntitiesSelectors = <
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
  Configurable extends DaffConfigurableCartItem = DaffConfigurableCartItem,
  Composite extends DaffCompositeCartItem = DaffCompositeCartItem,
>(): DaffCartItemEntitiesMemoizedSelectors<T, V> => {
  const {
    selectCartFeatureState,
  } = getDaffCartFeatureSelector<T, V>();
  /**
   * CartItem Entities State
   */
  const selectCartItemEntitiesState = createSelector(
    selectCartFeatureState,
    (state: DaffCartReducersState<T, V>) => state.cartItems,
  );

  const {
    selectOptimisticList: selectAllCartItems,
    selectEntity: selectCartItem,
    selectIds,
    selectEntities,
    selectTotal,
  } = daffCartItemEntitiesAdapter<T['items'][number]>().getSelectors(selectCartItemEntitiesState);

  /**
   * Adapters created with @ngrx/entity generate
   * commonly used selector functions including
   * getting all ids in the record set, a dictionary
   * of the records by id, an array of records and
   * the total number of records. This reduces boilerplate
   * in selecting records from the entity state.
   */
  /**
   * Selector for product IDs.
   */
  const selectCartItemIds = createSelector(
    (s) => s,
    selectIds,
  );

  /**
   * Selector for all product entities (see ngrx/entity).
   */
  const selectCartItemEntities = createSelector(
    (s) => s,
    selectEntities,
  );

  /**
   * Selector for the total number of products.
   */
  const selectCartItemTotal = createSelector(
    (s) => s,
    selectTotal,
  );

  /**
   * Selector for the total number of cart items that takes into account the qty on each cart item.
   */
  const selectTotalNumberOfCartItems = createSelector(
    selectAllCartItems,
    (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.qty, 0),
  );

  const selectCartItemConfiguredAttributes = defaultMemoize((itemId: T['items'][number]['id']) => createSelector(
    selectCartItem(itemId),
    (cartItem) => {
      if (cartItem.type !== DaffCartItemInputType.Configurable) {
        return null;
      }

      return (<DaffOperationEntity<Configurable>>cartItem).attributes;
    },
  )).memoized;

  const selectCartItemCompositeOptions = defaultMemoize((itemId: T['items'][number]['id']) => createSelector(
    selectCartItem(itemId),
    (cartItem) => {
      if (cartItem.type !== DaffCartItemInputType.Composite) {
        return null;
      }

      return (<DaffOperationEntity<Composite>>cartItem).options;
    },
  )).memoized;

  const selectIsCartItemOutOfStock = defaultMemoize((itemId: T['items'][number]['id']) => createSelector(
    selectCartItem(itemId),
    (cartItem) => cartItem ? !cartItem.in_stock : null,
  )).memoized;

  const selectOutOfStockCartItems = createSelector(
    selectAllCartItems,
    items => items.filter(item => !item.in_stock),
  );

  const selectInStockCartItems = createSelector(
    selectAllCartItems,
    items => items.filter(item => item.in_stock),
  );

  const selectCartItemMutating = createSelector(
    selectAllCartItems,
    (cartItems) => cartItems?.reduce((acc, item) =>
      acc || item.daffState === DaffState.Updating, false),
  );

  return {
    selectCartItemEntitiesState,
    selectCartItemIds,
    selectCartItemEntities,
    selectAllCartItems,
    selectCartItemTotal,
    selectCartItem,
    selectTotalNumberOfCartItems,
    selectCartItemConfiguredAttributes,
    selectCartItemCompositeOptions,
    selectIsCartItemOutOfStock,
    selectInStockCartItems,
    selectOutOfStockCartItems,
    selectCartItemMutating,
  };
};

export const getDaffCartItemEntitiesSelectors = (() => {
  let cache;
  return <
    T extends DaffCart = DaffCart,
    V extends DaffCartOrderResult = DaffCartOrderResult,
  >(): DaffCartItemEntitiesMemoizedSelectors<T, V> => cache = cache
    ? cache
    : createCartItemEntitiesSelectors<T, V>();
})();
