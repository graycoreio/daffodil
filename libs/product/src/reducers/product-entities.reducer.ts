import { createEntityAdapter, EntityState, EntityAdapter, Dictionary } from '@ngrx/entity';

import { DaffProductGridActionTypes, DaffProductGridActions } from '../actions/product-grid.actions';
import { DaffProductActionTypes, ProductActions } from '../actions/product.actions';
import { DaffBestSellersActionTypes, DaffBestSellersActions } from '../actions/best-sellers.actions';
import { DaffProduct } from '../models/product';

export interface State extends EntityState<DaffProduct> {}

export const productAdapter : EntityAdapter<DaffProduct> = createEntityAdapter<DaffProduct>();

export const initialState: State = productAdapter.getInitialState();

export function reducer(
  state = initialState, 
  action: DaffProductGridActions | DaffBestSellersActions | ProductActions): State {
  switch (action.type) {
    case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
      return productAdapter.upsertMany(action.payload, state);
    case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
      return productAdapter.upsertMany(action.payload, state);
    case DaffProductActionTypes.ProductLoadSuccessAction:
      return productAdapter.upsertOne(
        { 
          id: action.payload.id, 
          ...action.payload
        },
        state
      );
    case DaffProductGridActionTypes.ProductGridResetAction:
      return productAdapter.removeAll(state);
    default:
      return state;
  }
}

const { selectIds, selectEntities, selectAll, selectTotal } = productAdapter.getSelectors();

export const selectProductIds = selectIds;

export const selectProductEntities : (state: EntityState<DaffProduct>) => Dictionary<DaffProduct> = selectEntities;

export const selectAllProducts = selectAll;

export const selectProductTotal = selectTotal;
