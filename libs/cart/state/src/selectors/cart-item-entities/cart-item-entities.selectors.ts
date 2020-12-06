import { createSelector, MemoizedSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';

import { DaffConfigurableCartItemAttribute, DaffCompositeCartItemOption, DaffCart, DaffCartOrderResult, DaffCartItemInputType, DaffConfigurableCartItem, DaffCompositeCartItem } from '@daffodil/cart';

import { daffCartItemEntitiesAdapter } from '../../reducers/cart-item-entities/cart-item-entities-reducer-adapter';
import { DaffCartReducersState } from '../../reducers/public_api';
import { getDaffCartFeatureSelector } from '../cart-feature.selector';
import { DaffCartItemStateEnum, DaffStatefulCartItem } from '../../models/stateful-cart-item';

export interface DaffCartItemEntitiesMemoizedSelectors<T extends DaffStatefulCartItem = DaffStatefulCartItem> {
	selectCartItemEntitiesState: MemoizedSelector<object, EntityState<T>>;
	selectCartItemIds: MemoizedSelector<object, EntityState<T>['ids']>;
	selectCartItemEntities: MemoizedSelector<object, EntityState<T>['entities']>;
	selectAllCartItems: MemoizedSelector<object, T[]>;
	selectCartItemTotal: MemoizedSelector<object, number>;
	selectCartItem: MemoizedSelectorWithProps<object, object, T>;
	selectTotalNumberOfCartItems: MemoizedSelector<object, number>;
	selectCartItemConfiguredAttributes: MemoizedSelectorWithProps<object, object, DaffConfigurableCartItemAttribute[]>;
	selectCartItemCompositeOptions: MemoizedSelectorWithProps<object, object, DaffCompositeCartItemOption[]>;
	selectIsCartItemOutOfStock: MemoizedSelectorWithProps<object, object, boolean>;
	selectCartItemState: MemoizedSelectorWithProps<object, object, DaffCartItemStateEnum>;
}

const createCartItemEntitiesSelectors = <
	T extends DaffCart = DaffCart,
	V extends DaffCartOrderResult = DaffCartOrderResult,
  U extends DaffStatefulCartItem = DaffStatefulCartItem
>(): DaffCartItemEntitiesMemoizedSelectors<U> => {
	const {
		selectCartFeatureState
	} = getDaffCartFeatureSelector<T, V, U>();
	const adapterSelectors = daffCartItemEntitiesAdapter<U>().getSelectors();
	/**
	 * CartItem Entities State
	 */
	const selectCartItemEntitiesState = createSelector(
		selectCartFeatureState,
		(state: DaffCartReducersState<T, V, U>) => state.cartItems
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
		adapterSelectors.selectIds
	);

	/**
	 * Selector for all product entities (see ngrx/entity).
	 */
	const selectCartItemEntities = createSelector(
		selectCartItemEntitiesState,
		adapterSelectors.selectEntities
	);

	/**
	 * Selector for all products on state.
	 */
	const selectAllCartItems = createSelector(
		selectCartItemEntitiesState,
		adapterSelectors.selectAll
	);

	/**
	 * Selector for the total number of products.
	 */
	const selectCartItemTotal = createSelector(
		selectCartItemEntitiesState,
		adapterSelectors.selectTotal
	);

	const selectCartItem = createSelector(
		selectCartItemEntities,
		(cartItems, props) => cartItems[props.id]
	);

	/**
	 * Selector for the total number of cart items that takes into account the qty on each cart item.
	 */
	const selectTotalNumberOfCartItems = createSelector(
		selectAllCartItems,
		(cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.qty, 0)
	)

	const selectCartItemConfiguredAttributes = createSelector(
		selectCartItemEntities,
		(cartItems, props) => {
			const cartItem = selectCartItem.projector(cartItems, { id: props.id });
			if(cartItem.type !== DaffCartItemInputType.Configurable) {
				return null;
			}

			return (<DaffConfigurableCartItem>cartItem).attributes;
		}
	);

	const selectCartItemCompositeOptions = createSelector(
		selectCartItemEntities,
		(cartItems, props) => {
			const cartItem = selectCartItem.projector(cartItems, { id: props.id });

			if(cartItem.type !== DaffCartItemInputType.Composite) {
				return null;
			}

			return (<DaffCompositeCartItem>cartItem).options;
		}
	);

	const selectIsCartItemOutOfStock = createSelector(
		selectCartItemEntities,
		(cartItems, props) => {
			const cartItem = selectCartItem.projector(cartItems, { id: props.id });

			return cartItem ? !cartItem.in_stock : null;
		}
	);

	const selectCartItemState = createSelector(
		selectCartItemEntities,
		(cartItems, props) => {
			const cartItem = selectCartItem.projector(cartItems, { id: props.id });

			//todo use optional chaining when possible
			return cartItem ? cartItem.daffState : null;
		}
	)

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
		selectCartItemState
	}
}

export const getDaffCartItemEntitiesSelectors = (() => {
	let cache;
	return <
		T extends DaffCart = DaffCart,
		V extends DaffCartOrderResult = DaffCartOrderResult,
		U extends DaffStatefulCartItem = DaffStatefulCartItem
	>(): DaffCartItemEntitiesMemoizedSelectors<U> => cache = cache
		? cache
		: createCartItemEntitiesSelectors<T, V, U>();
})()
