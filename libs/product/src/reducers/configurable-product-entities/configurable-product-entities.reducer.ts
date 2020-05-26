import { EntityState } from '@ngrx/entity';

import { DaffProductGridActionTypes, DaffProductGridActions } from '../../actions/product-grid.actions';
import { DaffProductActionTypes, DaffProductActions } from '../../actions/product.actions';
import { DaffBestSellersActionTypes, DaffBestSellersActions } from '../../actions/best-sellers.actions';
import { daffConfigurableProductAppliedAttributesEntitiesAdapter } from './configurable-product-entities-reducer-adapter';
import { DaffProduct, DaffProductTypeEnum } from '../../models/product';
import { DaffConfigurableProductActions, DaffConfigurableProductActionTypes } from '../../actions/configurable-product.actions';
import { DaffConfigurableProduct } from '../../models/configurable-product';
import { DaffConfigurableProductEntity, DaffConfigurableProductEntityAttribute } from './configurable-product-entity';

/**
 * Reducer function that catches actions and changes/overwrites product entities state.
 * 
 * @param state current State of the redux store
 * @param action ProductGrid, BestSellers, Product, or Configurable Product actions
 * @returns Product entities state
 */
export function daffConfigurableProductEntitiesReducer<T extends DaffProduct, V extends DaffConfigurableProduct>(
  state = daffConfigurableProductAppliedAttributesEntitiesAdapter().getInitialState(), 
  action: DaffProductGridActions<T> | DaffBestSellersActions<T> | DaffProductActions<T> | DaffConfigurableProductActions<V>): EntityState<DaffConfigurableProductEntity> {
	const adapter = daffConfigurableProductAppliedAttributesEntitiesAdapter();
  switch (action.type) {
    case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
		case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
			return adapter.upsertMany(buildConfigurableProductAppliedAttributesEntities(action.payload), state);
    case DaffProductActionTypes.ProductLoadSuccessAction:
			if(action.payload.type === DaffProductTypeEnum.Configurable) {
				return adapter.upsertOne(
					{
						id: action.payload.id,
						attributes: []
					},
					state
				);
			};
			return state;
		case DaffConfigurableProductActionTypes.ConfigurableProductApplyAttributeAction:
			return adapter.upsertOne(
				{
					id: action.id,
					attributes: applyAttribute(state.entities[action.id].attributes, action.attributeId, action.attributeValue),
				},
				state
			);
		case DaffConfigurableProductActionTypes.ConfigurableProductRemoveAttributeAction:
			const upsertedEntity = state.entities[action.id];
			delete upsertedEntity[action.attributeId];

			return adapter.upsertOne(
				{
					id: action.id,
					attributes: removeAttribute(state.entities[action.id].attributes, action.attributeId)
				},
				state
			);
		case DaffConfigurableProductActionTypes.ConfigurableProductToggleAttributeAction:
			let attributes: DaffConfigurableProductEntityAttribute[];

			if(isAttributeSelected(state.entities[action.id].attributes, action.attributeId, action.attributeValue)) {
				attributes = removeAttribute(state.entities[action.id].attributes, action.attributeId)
			} else {
				attributes = applyAttribute(state.entities[action.id].attributes, action.attributeId, action.attributeValue)
			}

			return adapter.upsertOne(
				{
					id: action.id,
					attributes: attributes
				},
				state
			);
    default:
      return state;
  }
}

function buildConfigurableProductAppliedAttributesEntities(products: DaffProduct[]): DaffConfigurableProductEntity[] {
	return products
		.filter(product => product.type === DaffProductTypeEnum.Configurable)
		.map((product) => {
			return {
				id: product.id,
				attributes: []
			}
		})
}

function applyAttribute(currentAttributes: DaffConfigurableProductEntityAttribute[], appliedAttributeCode: string, appliedAttributeValue: string): DaffConfigurableProductEntityAttribute[] {
	const attributeIndex = currentAttributes.findIndex(attribute => attribute.code === appliedAttributeCode);
	if(attributeIndex > -1) {
		currentAttributes = [
			...currentAttributes.slice(0, attributeIndex)
		]
		currentAttributes[attributeIndex] = {
			code: appliedAttributeCode,
			value: appliedAttributeValue
		}
	} else {
		currentAttributes.push({
			code: appliedAttributeCode,
			value: appliedAttributeValue
		});
	}
	
	return currentAttributes;
}

function removeAttribute(currentAttributes: DaffConfigurableProductEntityAttribute[], appliedAttributeCode: string): DaffConfigurableProductEntityAttribute[] {
	for(let i=0; i<currentAttributes.length; i++) {
		if(currentAttributes[i].code === appliedAttributeCode) {
			return currentAttributes.slice(0, i);
		}
	}
}

function isAttributeSelected(currentAttributes: DaffConfigurableProductEntityAttribute[], attributeCode: string, attributeValue: string): boolean {
	for(let i=0; i<currentAttributes.length; i++) {
		if(currentAttributes[i].code === attributeCode && currentAttributes[i].value === attributeValue) return true;
	}
	return false;
}
