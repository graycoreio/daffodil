import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { Dictionary } from '@ngrx/entity/src/models';

import { Product } from '../../../../index';

import { ProductGridActionTypes, ProductGridActions } from '../actions/product-grid.actions';
import { ProductActionTypes, ProductActions } from '../actions/product.actions';
import { BestSellersActionTypes, BestSellersActions } from '../actions/best-sellers.actions';

export interface State extends EntityState<Product> {}

export const productAdapter : EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: State = productAdapter.getInitialState();

export function reducer(
  state = initialState, 
  action: ProductGridActions | BestSellersActions | ProductActions): State {
  switch (action.type) {
    case ProductGridActionTypes.ProductGridLoadSuccessAction:
      return productAdapter.upsertMany(action.payload, state);
    case BestSellersActionTypes.BestSellersLoadSuccessAction:
      return productAdapter.upsertMany(action.payload, state);
    case ProductActionTypes.ProductLoadSuccessAction:
      return productAdapter.upsertOne(
        { 
          id: action.payload.id, 
          ...action.payload
        },
        state
      );
    case ProductGridActionTypes.ProductGridResetAction:
      return productAdapter.removeAll(state);
    default:
      return state;
  }
}

const { selectIds, selectEntities, selectAll, selectTotal } = productAdapter.getSelectors();

export const selectProductIds = selectIds;

export const selectProductEntities : (state: EntityState<Product>) => Dictionary<Product> = selectEntities;

export const selectAllProducts = selectAll;

export const selectProductTotal = selectTotal;
