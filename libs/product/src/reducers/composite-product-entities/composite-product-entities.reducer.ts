import { EntityState } from '@ngrx/entity';

import { DaffProductGridActionTypes, DaffProductGridActions } from '../../actions/product-grid.actions';
import { DaffProductActionTypes, DaffProductActions } from '../../actions/product.actions';
import { DaffBestSellersActionTypes, DaffBestSellersActions } from '../../actions/best-sellers.actions';
import { daffCompositeProductAppliedOptionsEntitiesAdapter } from './composite-product-entities-reducer-adapter';
import { DaffProduct, DaffProductTypeEnum } from '../../models/product';
import { DaffCompositeProductActions, DaffCompositeProductActionTypes } from '../../actions/composite-product.actions';
import { DaffCompositeProduct } from '../../models/composite-product';
import { DaffCompositeProductEntity, DaffCompositeProductEntityItem } from './composite-product-entity';
import { DaffCompositeProductItem } from '../../models/composite-product-item';

/**
 * Reducer function that catches actions and changes/overwrites composite product entities state.
 * 
 * @param state current State of the redux store
 * @param action ProductGrid, BestSellers, Product, or Composite Product actions
 * @returns Product entities state
 */
export function daffCompositeProductEntitiesReducer<T extends DaffProduct, V extends DaffCompositeProduct>(
  state = daffCompositeProductAppliedOptionsEntitiesAdapter().getInitialState(), 
  action: DaffProductGridActions<T> | DaffBestSellersActions<T> | DaffProductActions<T> | DaffCompositeProductActions<V>): EntityState<DaffCompositeProductEntity> {
	const adapter = daffCompositeProductAppliedOptionsEntitiesAdapter();
  switch (action.type) {
    case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
		case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
			return adapter.upsertMany(
				action.payload
					.filter(product => product.type === DaffProductTypeEnum.Composite)
					.map(product => buildCompositeProductAppliedOptionsEntity(<V><unknown>product)), 
				state
			);
    case DaffProductActionTypes.ProductLoadSuccessAction:
			if(action.payload.type === DaffProductTypeEnum.Composite) {
				return adapter.upsertOne(
					buildCompositeProductAppliedOptionsEntity(<V><unknown>action.payload),
					state
				);
			};
			return state;
		case DaffCompositeProductActionTypes.CompositeProductApplyOptionAction:
			return adapter.upsertOne(
				{
					id: action.id,
					items: {
						...state.entities[action.id].items,
						[action.itemId]: {
							value: action.optionId,
							qty: action.qty ? action.qty : 1
						}
					}
				},
				state
			);
    default:
      return state;
  }
}

function buildCompositeProductAppliedOptionsEntity(product: DaffCompositeProduct): DaffCompositeProductEntity {
	return {
		id: product.id,
		items: product.items.reduce((acc, item) => ({
			...acc,
			[item.id]: getDefaultOption(item)
		}), {})
	}
}

/**
 * Sets the default item option to the specified default option if it is in stock.
 * Does not set a default option if a default is not specified or if the default is out of stock.
 * @param item a DaffCompositeProductItem
 */
function getDefaultOption(item: DaffCompositeProductItem): DaffCompositeProductEntityItem {
	const defaultOptionIndex = item.options.findIndex(option => option.is_default);

	if(defaultOptionIndex > -1 && item.options[defaultOptionIndex].in_stock) {
		return {
			value: item.options[defaultOptionIndex].id,
			qty: item.options[defaultOptionIndex].quantity
		}
	} else {
		return { value: null, qty: null };
	}
}
