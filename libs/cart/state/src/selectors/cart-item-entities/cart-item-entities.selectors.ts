import { EntityState } from '@ngrx/entity';
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
  DaffConfigurableCartItem,
  DaffCompositeCartItem,
  DaffCartItem,
  DaffCartItemDiscount,
} from '@daffodil/cart';
import { daffAdd } from '@daffodil/core';
import { DaffStateError } from '@daffodil/core/state';

import {
  DaffCartItemStateEnum,
  DaffStatefulCartItem,
} from '../../models/stateful-cart-item';
import { daffCartItemEntitiesAdapter } from '../../reducers/cart-item-entities/cart-item-entities-reducer-adapter';
import {
  DaffCartStateRootSlice,
  DaffCartReducersState,
} from '../../reducers/public_api';
import { getDaffCartFeatureSelector } from '../cart-feature.selector';

export interface DaffCartItemEntitiesMemoizedSelectors<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
  U extends DaffStatefulCartItem = DaffStatefulCartItem
> {
  selectCartItemEntitiesState: MemoizedSelector<DaffCartStateRootSlice<T, V, U>, EntityState<U>>;
  selectCartItemIds: MemoizedSelector<DaffCartStateRootSlice<T, V, U>, EntityState<U>['ids']>;
  selectCartItemEntities: MemoizedSelector<DaffCartStateRootSlice<T, V, U>, EntityState<U>['entities']>;
  selectAllCartItems: MemoizedSelector<DaffCartStateRootSlice<T, V, U>, U[]>;
  selectCartItemTotal: MemoizedSelector<DaffCartStateRootSlice<T, V, U>, number>;
  selectCartItem: (id: U['id']) => MemoizedSelector<DaffCartStateRootSlice<T, V, U>, U>;
  selectTotalNumberOfCartItems: MemoizedSelector<DaffCartStateRootSlice<T, V, U>, number>;
  selectCartItemConfiguredAttributes: (id: U['id']) => MemoizedSelector<DaffCartStateRootSlice<T, V, U>, DaffConfigurableCartItemAttribute[]>;
  selectCartItemCompositeOptions: (id: U['id']) => MemoizedSelector<DaffCartStateRootSlice<T, V, U>, DaffCompositeCartItemOption[]>;
  selectIsCartItemOutOfStock: (id: U['id']) => MemoizedSelector<DaffCartStateRootSlice<T, V, U>, boolean>;
  /**
   * Selects all cart items that are out of stock.
   */
  selectOutOfStockCartItems: MemoizedSelector<DaffCartStateRootSlice<T, V, U>, U[]>;
  /**
   * Selects all cart items that are in stock.
   */
  selectInStockCartItems: MemoizedSelector<DaffCartStateRootSlice<T, V, U>, U[]>;
  selectCartItemMutating: MemoizedSelector<DaffCartStateRootSlice<T, V, U>, boolean>;
  selectCartItemState: (id: U['id']) => MemoizedSelector<DaffCartStateRootSlice<T, V, U>, DaffCartItemStateEnum>;
  /**
   * Selects the specified item's price.
   * Zero by default.
   * This includes any discounts and sales that apply to the product or category.
   * This excludes cart discounts.
   */
  selectCartItemPrice: (id: U['id']) => MemoizedSelector<DaffCartStateRootSlice<T, V, U>, number>;
  /**
   * Selects the specified item's quantity.
   * Zero by default.
   */
  selectCartItemQuantity: (id: U['id']) => MemoizedSelector<DaffCartStateRootSlice<T, V, U>, number>;
  /**
   * Selects the specified item's row total.
   * Zero by default.
   * This includes any discounts and sales that apply to the product or category.
   * This excludes cart discounts.
   */
  selectCartItemRowTotal: (id: U['id']) => MemoizedSelector<DaffCartStateRootSlice<T, V, U>, number>;
  /**
   * Selects the specified item's array of cart (not product) discounts for the entire row.
   */
  selectCartItemDiscounts: (id: U['id']) => MemoizedSelector<DaffCartStateRootSlice<T, V, U>, DaffCartItemDiscount[]>;
  /**
   * Selects the specified item's sum of all cart (not product) discounts for the entire row.
   * Zero by default.
   */
  selectCartItemTotalDiscount: (id: U['id']) => MemoizedSelector<DaffCartStateRootSlice<T, V, U>, number>;
  /**
   * Selects the specified item's errors.
   */
  selectCartItemErrors: (id: U['id']) => MemoizedSelector<DaffCartStateRootSlice<T, V, U>, DaffStateError[]>;
}

const createCartItemEntitiesSelectors = <
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
  U extends DaffStatefulCartItem = DaffStatefulCartItem
>(): DaffCartItemEntitiesMemoizedSelectors<T, V, U> => {
  const {
    selectCartFeatureState,
  } = getDaffCartFeatureSelector<T, V, U>();
  const adapterSelectors = daffCartItemEntitiesAdapter<U>().getSelectors();
  /**
   * CartItem Entities State
   */
  const selectCartItemEntitiesState = createSelector(
    selectCartFeatureState,
    (state: DaffCartReducersState<T, V, U>) => state.cartItems,
  );

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
    selectCartItemEntitiesState,
    adapterSelectors.selectIds,
  );

  /**
   * Selector for all product entities (see ngrx/entity).
   */
  const selectCartItemEntities = createSelector(
    selectCartItemEntitiesState,
    adapterSelectors.selectEntities,
  );

  /**
   * Selector for all products on state.
   */
  const selectAllCartItems = createSelector(
    selectCartItemEntitiesState,
    adapterSelectors.selectAll,
  );

  /**
   * Selector for the total number of products.
   */
  const selectCartItemTotal = createSelector(
    selectCartItemEntitiesState,
    adapterSelectors.selectTotal,
  );

  const selectCartItem = defaultMemoize((itemId: U['id']) => createSelector(
    selectCartItemEntities,
    cartItems => cartItems[itemId],
  )).memoized;

  /**
   * Selector for the total number of cart items that takes into account the qty on each cart item.
   */
  const selectTotalNumberOfCartItems = createSelector(
    selectAllCartItems,
    (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.qty, 0),
  );

  const selectCartItemConfiguredAttributes = defaultMemoize((itemId: U['id']) => createSelector(
    selectCartItem(itemId),
    (cartItem: DaffConfigurableCartItem) => {
      if(cartItem.type !== DaffCartItemInputType.Configurable) {
        return null;
      }

      return cartItem.attributes;
    },
  )).memoized;

  const selectCartItemCompositeOptions = defaultMemoize((itemId: U['id']) => createSelector(
    selectCartItem(itemId),
    (cartItem: DaffCompositeCartItem) => {
      if(cartItem.type !== DaffCartItemInputType.Composite) {
        return null;
      }

      return cartItem.options;
    },
  )).memoized;

  const selectIsCartItemOutOfStock = defaultMemoize((itemId: U['id']) => createSelector(
    selectCartItem(itemId),
    (cartItem: U) => cartItem ? !cartItem.in_stock : null,
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
    (cartItems: U[]) => cartItems?.reduce((acc, item) =>
      acc || item.daffState === DaffCartItemStateEnum.Mutating, false),
  );

  const selectCartItemState = defaultMemoize((itemId: U['id']) => createSelector(
    selectCartItem(itemId),
    (cartItem: U) => cartItem?.daffState || null,
  )).memoized;

  const selectCartItemQuantity = defaultMemoize((itemId: U['id']) => createSelector(
    selectCartItem(itemId),
    (cartItem: U) => cartItem?.qty || 0,
  )).memoized;

  const selectCartItemRowTotal = defaultMemoize((itemId: U['id']) => createSelector(
    selectCartItem(itemId),
    (cartItem: U) => cartItem?.row_total || 0,
  )).memoized;

  const selectCartItemPrice = defaultMemoize((itemId: U['id']) => createSelector(
    selectCartItem(itemId),
    (cartItem: U) => cartItem?.price || 0,
  )).memoized;

  const selectCartItemDiscounts = defaultMemoize((itemId: U['id']) => createSelector(
    selectCartItem(itemId),
    (cartItem: U) => cartItem?.discounts || [],
  )).memoized;

  const selectCartItemTotalDiscount = defaultMemoize((itemId: U['id']) => createSelector(
    selectCartItemDiscounts(itemId),
    (discounts: U['discounts']) => discounts?.reduce((acc, { amount }) => daffAdd(acc, amount), 0) || 0,
  )).memoized;

  const selectCartItemErrors = defaultMemoize((itemId: U['id']) => createSelector(
    selectCartItem(itemId),
    (cartItem: U) => cartItem?.errors || [],
  )).memoized;

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
    selectCartItemState,
    selectCartItemPrice,
    selectCartItemRowTotal,
    selectCartItemQuantity,
    selectCartItemDiscounts,
    selectCartItemTotalDiscount,
    selectCartItemErrors,
  };
};

export const getDaffCartItemEntitiesSelectors = (() => {
  let cache;
  return <
    T extends DaffCart = DaffCart,
    V extends DaffCartOrderResult = DaffCartOrderResult,
    U extends DaffStatefulCartItem = DaffStatefulCartItem
  >(): DaffCartItemEntitiesMemoizedSelectors<T, V, U> => cache = cache
    ? cache
    : createCartItemEntitiesSelectors<T, V, U>();
})();
