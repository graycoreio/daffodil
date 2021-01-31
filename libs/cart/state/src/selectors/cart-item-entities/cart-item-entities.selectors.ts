import { EntityState } from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelector,
  MemoizedSelectorWithProps,
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

import {
  DaffCartItemStateEnum,
  DaffStatefulCartItem,
} from '../../models/stateful-cart-item';
import { daffCartItemEntitiesAdapter } from '../../reducers/cart-item-entities/cart-item-entities-reducer-adapter';
import { DaffCartReducersState } from '../../reducers/public_api';
import { getDaffCartFeatureSelector } from '../cart-feature.selector';

export interface DaffCartItemEntitiesMemoizedSelectors<T extends DaffStatefulCartItem = DaffStatefulCartItem> {
	selectCartItemEntitiesState: MemoizedSelector<Record<string, any>, EntityState<T>>;
	selectCartItemIds: MemoizedSelector<Record<string, any>, EntityState<T>['ids']>;
	selectCartItemEntities: MemoizedSelector<Record<string, any>, EntityState<T>['entities']>;
	selectAllCartItems: MemoizedSelector<Record<string, any>, T[]>;
	selectCartItemTotal: MemoizedSelector<Record<string, any>, number>;
	selectCartItem: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, T>;
	selectTotalNumberOfCartItems: MemoizedSelector<Record<string, any>, number>;
	selectCartItemConfiguredAttributes: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, DaffConfigurableCartItemAttribute[]>;
	selectCartItemCompositeOptions: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, DaffCompositeCartItemOption[]>;
	selectIsCartItemOutOfStock: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, boolean>;
	selectCartItemMutating: MemoizedSelector<Record<string, any>, boolean>;
	selectCartItemState: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, DaffCartItemStateEnum>;
  /**
   * Selects the specified item's price.
   * Zero by default.
   * This includes any discounts and sales that apply to the product or category.
   * This excludes cart discounts.
   */
	selectCartItemPrice: MemoizedSelectorWithProps<Record<string, any>, {id: DaffCartItem['item_id']}, number>;
  /**
   * Selects the specified item's quantity.
   * Zero by default.
   */
	selectCartItemQuantity: MemoizedSelectorWithProps<Record<string, any>, {id: DaffCartItem['item_id']}, number>;
  /**
   * Selects the specified item's row total.
   * Zero by default.
   * This includes any discounts and sales that apply to the product or category.
   * This excludes cart discounts.
   */
	selectCartItemRowTotal: MemoizedSelectorWithProps<Record<string, any>, {id: DaffCartItem['item_id']}, number>;
  /**
   * Selects the specified item's array of cart (not product) discounts for the entire row.
   */
	selectCartItemDiscounts: MemoizedSelectorWithProps<Record<string, any>, {id: DaffCartItem['item_id']}, DaffCartItemDiscount[]>;
  /**
   * Selects the specified item's sum of all cart (not product) discounts for the entire row.
   * Zero by default.
   */
	selectCartItemTotalDiscount: MemoizedSelectorWithProps<Record<string, any>, {id: DaffCartItem['item_id']}, number>;
}

const createCartItemEntitiesSelectors = <
	T extends DaffCart = DaffCart,
	V extends DaffCartOrderResult = DaffCartOrderResult,
  U extends DaffStatefulCartItem = DaffStatefulCartItem
>(): DaffCartItemEntitiesMemoizedSelectors<U> => {
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

  const selectCartItem = createSelector(
    selectCartItemEntities,
    (cartItems, props) => cartItems[props.id],
  );

  /**
   * Selector for the total number of cart items that takes into account the qty on each cart item.
   */
  const selectTotalNumberOfCartItems = createSelector(
    selectAllCartItems,
    (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.qty, 0),
  );

  const selectCartItemConfiguredAttributes = createSelector(
    selectCartItemEntities,
    (cartItems, props) => {
      const cartItem = selectCartItem.projector(cartItems, { id: props.id });
      if(cartItem.type !== DaffCartItemInputType.Configurable) {
        return null;
      }

      return (<DaffConfigurableCartItem>cartItem).attributes;
    },
  );

  const selectCartItemCompositeOptions = createSelector(
    selectCartItemEntities,
    (cartItems, props) => {
      const cartItem = selectCartItem.projector(cartItems, { id: props.id });

      if(cartItem.type !== DaffCartItemInputType.Composite) {
        return null;
      }

      return (<DaffCompositeCartItem>cartItem).options;
    },
  );

  const selectIsCartItemOutOfStock = createSelector(
    selectCartItemEntities,
    (cartItems, props) => {
      const cartItem = selectCartItem.projector(cartItems, { id: props.id });

      return cartItem ? !cartItem.in_stock : null;
    },
  );

  const selectCartItemMutating = createSelector(
    selectAllCartItems,
    (cartItems: U[]) => cartItems?.reduce((acc, item) =>
      acc || item.daffState === DaffCartItemStateEnum.Mutating, false),
  );

  const selectCartItemState = createSelector(
    selectCartItemEntities,
    (cartItems, props) => selectCartItem.projector(cartItems, { id: props.id })?.daffState || null,
  );

  const selectCartItemQuantity = createSelector(
    selectCartItemEntities,
    (cartItems, props) => selectCartItem.projector(cartItems, { id: props.id })?.qty || 0,
  );

  const selectCartItemRowTotal = createSelector(
    selectCartItemEntities,
    (cartItems, props) => selectCartItem.projector(cartItems, { id: props.id })?.row_total || 0,
  );

  const selectCartItemPrice = createSelector(
    selectCartItemEntities,
    (cartItems, props) => selectCartItem.projector(cartItems, { id: props.id })?.price || 0,
  );

  const selectCartItemDiscounts = createSelector(
    selectCartItemEntities,
    (cartItems, props) => selectCartItem.projector(cartItems, { id: props.id })?.discounts || [],
  );

  const selectCartItemTotalDiscount = createSelector(
    selectCartItemEntities,
    (cartItems, props) => selectCartItemDiscounts.projector(cartItems, { id: props.id })?.reduce((acc, { amount }) => daffAdd(acc, amount), 0) || 0,
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
    selectCartItemMutating,
    selectCartItemState,
    selectCartItemPrice,
    selectCartItemRowTotal,
    selectCartItemQuantity,
    selectCartItemDiscounts,
    selectCartItemTotalDiscount,
  };
};

export const getDaffCartItemEntitiesSelectors = (() => {
  let cache;
  return <
		T extends DaffCart = DaffCart,
		V extends DaffCartOrderResult = DaffCartOrderResult,
		U extends DaffStatefulCartItem = DaffStatefulCartItem
	>(): DaffCartItemEntitiesMemoizedSelectors<U> => cache = cache
    ? cache
    : createCartItemEntitiesSelectors<T, V, U>();
})();
