import { createSelector, MemoizedSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';

import { DaffCartItem, DaffCartItemStockEnum } from '../../models/cart-item';
import { daffCartItemEntitiesAdapter } from '../../reducers/cart-item-entities/cart-item-entities-reducer-adapter';
import { DaffCartReducersState } from '../../reducers/public_api';
import { DaffCart } from '../../models/cart';
import { DaffCartOrderResult } from '../../models/cart-order-result';
import { getDaffCartFeatureSelector } from '../cart-feature.selector';
import { DaffCartItemInputType } from '../../models/cart-item-input';
import { DaffConfigurableCartItem, DaffConfigurableCartItemAttribute } from '../../models/configurable-cart-item';
import { DaffCompositeCartItem, DaffCompositeCartItemOption } from '../../models/composite-cart-item';

export interface DaffCartItemEntitiesMemoizedSelectors<T extends DaffCartItem = DaffCartItem> {
	selectCartItemEntitiesState: MemoizedSelector<object, EntityState<T>>;
	selectCartItemIds: MemoizedSelector<object, EntityState<T>['ids']>;
	selectCartItemEntities: MemoizedSelector<object, EntityState<T>['entities']>;
	selectAllCartItems: MemoizedSelector<object, T[]>;
	selectCartItemTotal: MemoizedSelector<object, number>;
	selectCartItem: MemoizedSelectorWithProps<object, object, T>;
	selectCartItemConfiguredAttributes: MemoizedSelectorWithProps<object, object, DaffConfigurableCartItemAttribute[]>;
	selectCartItemCompositeOptions: MemoizedSelectorWithProps<object, object, DaffCompositeCartItemOption[]>;
	selectIsCartItemOutOfStock: MemoizedSelectorWithProps<object, object, boolean>;
}

const createCartItemEntitiesSelectors = <
	T extends DaffCart = DaffCart,
	V extends DaffCartOrderResult = DaffCartOrderResult,
  U extends DaffCartItem = DaffCartItem
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
			return selectCartItem.projector(cartItems, { id: props.id })
				.stock_status === DaffCartItemStockEnum.OutOfStock;
		}
	);

	return { 
		selectCartItemEntitiesState,
		selectCartItemIds,
		selectCartItemEntities,
		selectAllCartItems,
		selectCartItemTotal,
		selectCartItem,
		selectCartItemConfiguredAttributes,
		selectCartItemCompositeOptions,
		selectIsCartItemOutOfStock
	}
}

export const getDaffCartItemEntitiesSelectors = (() => {
	let cache;
	return <
		T extends DaffCart = DaffCart,
		V extends DaffCartOrderResult = DaffCartOrderResult,
		U extends DaffCartItem = DaffCartItem
	>(): DaffCartItemEntitiesMemoizedSelectors<U> => cache = cache 
		? cache 
		: createCartItemEntitiesSelectors<T, V, U>();
})()
