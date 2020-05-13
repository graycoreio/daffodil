import { EntityState } from '@ngrx/entity';

import { DaffProductGridActionTypes, DaffProductGridActions } from '../../actions/product-grid.actions';
import { DaffProductActionTypes, DaffProductActions } from '../../actions/product.actions';
import { DaffBestSellersActionTypes, DaffBestSellersActions } from '../../actions/best-sellers.actions';
import { daffConfigurableProductAppliedAttributesEntitiesAdapter } from './configurable-product-entities-reducer-adapter';
import { DaffProduct, DaffProductTypeEnum } from '../../models/product';
import { DaffConfigurableProductActions, DaffConfigurableProductActionTypes } from '../../actions/configurable-product.actions';
import { DaffProductVariantAttributesDictionary, DaffConfigurableProduct } from '../../models/configurable-product';

/**
 * Reducer function that catches actions and changes/overwrites product entities state.
 * 
 * @param state current State of the redux store
 * @param action ProductGrid, BestSellers, Product, or Configurable Product actions
 * @returns Product entities state
 */
export function daffConfigurableProductEntitiesReducer<T extends DaffProduct, V extends DaffConfigurableProduct>(
  state = daffConfigurableProductAppliedAttributesEntitiesAdapter().getInitialState(), 
  action: DaffProductGridActions<T> | DaffBestSellersActions<T> | DaffProductActions<T> | DaffConfigurableProductActions<V>): EntityState<DaffProductVariantAttributesDictionary> {
	const adapter = daffConfigurableProductAppliedAttributesEntitiesAdapter();
  switch (action.type) {
    case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
		case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
			return adapter.upsertMany(buildConfigurableProductAppliedAttributesEntities(action.payload), state);
    case DaffProductActionTypes.ProductLoadSuccessAction:
			if(action.payload.type === DaffProductTypeEnum.Configurable) {
				return adapter.upsertOne(
					{
						id: action.payload.id
					},
					state
				);
			};
			return state;
		case DaffConfigurableProductActionTypes.ConfigurableProductApplyAttributeAction:
			return adapter.upsertOne(
				{
					id: action.id,
					...state.entities[action.id],
					[action.attributeId]: action.attributeValue
				},
				state
			);
		case DaffConfigurableProductActionTypes.ConfigurableProductRemoveAttributeAction:
			const upsertedEntity = state.entities[action.id];
			delete upsertedEntity[action.attributeId];

			return adapter.upsertOne(
				upsertedEntity,
				state
			);
		case DaffConfigurableProductActionTypes.ConfigurableProductToggleAttributeAction:
			let entity = state.entities[action.id];

			if(entity[action.attributeId] && entity[action.attributeId] === action.attributeValue) {
				delete entity[action.attributeId];
			} else {
				entity = {
					...entity,
					[action.attributeId]: action.attributeValue
				}
			}

			return adapter.upsertOne(
				entity,
				state
			);
    default:
      return state;
  }
}

function buildConfigurableProductAppliedAttributesEntities(products: DaffProduct[]): DaffProductVariantAttributesDictionary[] {
	return products
		.filter(product => product.type === DaffProductTypeEnum.Configurable)
		.map((product) => {
			return {
				id: product.id
			}
		})
}
