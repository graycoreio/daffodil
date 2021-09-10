import { EntityState } from '@ngrx/entity';

import {
  DaffCompositeConfigurationItem,
  DaffCompositeProduct,
  DaffCompositeProductItem,
} from '@daffodil/composite-product';
import {
  DaffProduct,
  DaffProductTypeEnum,
} from '@daffodil/product';
import {
  DaffProductPageActions,
  DaffProductPageActionTypes,
  DaffProductGridActionTypes,
  DaffProductGridActions,
  DaffBestSellersActions,
  DaffProductActions,
  DaffBestSellersActionTypes,
  DaffProductActionTypes,
} from '@daffodil/product/state';

import {
  DaffCompositeProductActions,
  DaffCompositeProductActionTypes,
} from '../../actions/public_api';
import { daffCompositeProductAppliedOptionsEntitiesAdapter } from './composite-product-entities-reducer-adapter';
import { DaffCompositeProductEntity } from './composite-product-entity';

/**
 * Reducer function that catches actions and changes/overwrites composite product entities state.
 *
 * @param state current State of the redux store
 * @param action ProductGrid, BestSellers, Product, or Composite Product actions
 * @returns Product entities state
 */
export function daffCompositeProductEntitiesReducer<T extends DaffProduct, V extends DaffCompositeProduct>(
  state = daffCompositeProductAppliedOptionsEntitiesAdapter().getInitialState(),
  action: DaffProductGridActions<T> | DaffBestSellersActions<T> | DaffProductActions<T> | DaffProductPageActions<T> | DaffCompositeProductActions<V>): EntityState<DaffCompositeProductEntity> {
  const adapter = daffCompositeProductAppliedOptionsEntitiesAdapter();
  switch (action.type) {
    case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
    case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
      return adapter.upsertMany(
        mapOptionsEntities(<V[]><unknown>action.payload),
        state,
      );
    case DaffProductActionTypes.ProductLoadSuccessAction:
    case DaffProductPageActionTypes.ProductPageLoadSuccessAction:
      return adapter.upsertMany(
        mapOptionsEntities(<V[]><unknown>action.payload.products),
        state,
      );
    case DaffCompositeProductActionTypes.CompositeProductApplyOptionAction:
      return adapter.upsertOne(
        {
          id: action.id,
          items: {
            ...state.entities[action.id].items,
            [action.itemId]: {
              value: action.optionId,
              qty: action.qty ? action.qty : 1,
            },
          },
        },
        state,
      );
    default:
      return state;
  }
}

function mapOptionsEntities(products: DaffCompositeProduct[]): DaffCompositeProductEntity[] {
  return products.filter(product => product.type === DaffProductTypeEnum.Composite)
    .map(product => buildCompositeProductAppliedOptionsEntity(product));
}

function buildCompositeProductAppliedOptionsEntity(product: DaffCompositeProduct): DaffCompositeProductEntity {
  return {
    id: product.id,
    items: product.items.reduce((acc, item) => ({
      ...acc,
      [item.id]: getDefaultOption(item),
    }), {}),
  };
}

/**
 * Sets the default item option to the specified default option if it is in stock.
 * Does not set a default option if a default is not specified.
 * Does not set a default option but does set a default qty if the default is out of stock.
 *
 * @param item a DaffCompositeProductItem
 */
function getDefaultOption(item: DaffCompositeProductItem): DaffCompositeConfigurationItem {
  const defaultOptionIndex = item.options.findIndex(option => option.is_default);

  if(defaultOptionIndex > -1) {
    return {
      value: item.options[defaultOptionIndex].in_stock ? item.options[defaultOptionIndex].id : null,
      qty: item.options[defaultOptionIndex].quantity,
    };
  } else {
    return { value: null, qty: null };
  }
}
