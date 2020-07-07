import { EntityState } from '@ngrx/entity';

import { DaffProductGridActionTypes, DaffProductGridActions } from '../../actions/product-grid.actions';
import { DaffProductActionTypes, DaffProductActions } from '../../actions/product.actions';
import { DaffBestSellersActionTypes, DaffBestSellersActions } from '../../actions/best-sellers.actions';
import { daffCompositeProductAppliedOptionsEntitiesAdapter } from './composite-product-entities-reducer-adapter';
import { DaffProduct, DaffProductTypeEnum } from '../../models/product';
import { DaffCompositeProductActions, DaffCompositeProductActionTypes } from '../../actions/composite-product.actions';
import { DaffCompositeProduct } from '../../models/composite-product';
import { DaffCompositeProductEntity } from './composite-product-entity';
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
						[action.itemId]: action.optionId
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

	function getDefaultOption(item: DaffCompositeProductItem): string {
		const defaultOptionIndex = item.options.findIndex(option => option.is_default);

		return defaultOptionIndex < 0 && item.required ?
			item.options[0].id :
			item.options[defaultOptionIndex].id;
	}
}
