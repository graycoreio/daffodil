import { EntityState } from '@ngrx/entity';

import {
  DaffProduct,
  DaffProductTypeEnum,
  DaffConfigurableProduct,
} from '@daffodil/product';

import {
  DaffProductGridActionTypes,
  DaffProductGridActions,
} from '../../actions/product-grid.actions';
import {
  DaffProductPageActions,
  DaffProductPageActionTypes,
} from '../../actions/product-page.actions';
import {
  DaffProductActionTypes,
  DaffProductActions,
  DaffBestSellersActionTypes,
  DaffBestSellersActions,
  DaffConfigurableProductActions,
  DaffConfigurableProductActionTypes,
} from '../../actions/public_api';
import { daffConfigurableProductAppliedAttributesEntitiesAdapter } from './configurable-product-entities-reducer-adapter';
import {
  DaffConfigurableProductEntity,
  DaffConfigurableProductEntityAttribute,
} from './configurable-product-entity';

/**
 * Reducer function that catches actions and changes/overwrites product entities state.
 *
 * @param state current State of the redux store
 * @param action ProductGrid, BestSellers, Product, or Configurable Product actions
 * @returns Product entities state
 */
export function daffConfigurableProductEntitiesReducer<T extends DaffProduct, V extends DaffConfigurableProduct>(
  state = daffConfigurableProductAppliedAttributesEntitiesAdapter().getInitialState(),
  action: DaffProductGridActions<T> | DaffBestSellersActions<T> | DaffProductActions<T> | DaffProductPageActions<T> | DaffConfigurableProductActions<V>): EntityState<DaffConfigurableProductEntity> {
  const adapter = daffConfigurableProductAppliedAttributesEntitiesAdapter();
  switch (action.type) {
    case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
    case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
      return adapter.upsertMany(
        action.payload
          .filter(product => product.type === DaffProductTypeEnum.Configurable)
          .map(buildConfigurableProductAppliedAttributesEntity),
        state,
      );
    case DaffProductActionTypes.ProductLoadSuccessAction:
    case DaffProductPageActionTypes.ProductPageLoadSuccessAction:
      if(action.payload.type === DaffProductTypeEnum.Configurable) {
        return adapter.upsertOne(
          buildConfigurableProductAppliedAttributesEntity(action.payload),
          state,
        );
      };
      return state;
    case DaffConfigurableProductActionTypes.ConfigurableProductApplyAttributeAction:
      return adapter.upsertOne(
        {
          id: action.id,
          attributes: applyAttribute(state.entities[action.id].attributes, action.attributeId, action.attributeValue),
        },
        state,
      );
    case DaffConfigurableProductActionTypes.ConfigurableProductRemoveAttributeAction:
      return adapter.upsertOne(
        {
          id: action.id,
          attributes: removeAttribute(state.entities[action.id].attributes, action.attributeId),
        },
        state,
      );
    case DaffConfigurableProductActionTypes.ConfigurableProductToggleAttributeAction:
      return adapter.upsertOne(
        {
          id: action.id,
          attributes: isAttributeSelected(state.entities[action.id].attributes, action.attributeId, action.attributeValue) ?
            removeAttribute(state.entities[action.id].attributes, action.attributeId) :
            applyAttribute(state.entities[action.id].attributes, action.attributeId, action.attributeValue),
        },
        state,
      );
    default:
      return state;
  }
}

function buildConfigurableProductAppliedAttributesEntity(product: DaffProduct): DaffConfigurableProductEntity {
  return {
    id: product.id,
    attributes: [],
  };
}

function applyAttribute(currentAttributes: DaffConfigurableProductEntityAttribute[], appliedAttributeCode: string, appliedAttributeValue: string): DaffConfigurableProductEntityAttribute[] {
  const attributeIndex = currentAttributes.findIndex(attribute => attribute.code === appliedAttributeCode);
  const retainedAttributes = attributeIndex > -1 ? currentAttributes.slice(0, attributeIndex) : currentAttributes;

  return [
    ...retainedAttributes,
    {
      code: appliedAttributeCode,
      value: appliedAttributeValue,
    },
  ];
}

function removeAttribute(currentAttributes: DaffConfigurableProductEntityAttribute[], appliedAttributeCode: string): DaffConfigurableProductEntityAttribute[] {
  const index = currentAttributes.findIndex(attribute => attribute.code === appliedAttributeCode);

  return index > -1 ? currentAttributes.slice(0, index) : currentAttributes;
}

function isAttributeSelected(currentAttributes: DaffConfigurableProductEntityAttribute[], attributeCode: string, attributeValue: string): boolean {
  const index = currentAttributes.findIndex(attribute => attribute.code === attributeCode);

  return index > -1 && currentAttributes[index].value === attributeValue;
}
