import { createEntityAdapter, EntityState, EntityAdapter, Dictionary } from '@ngrx/entity';

import { DaffProductGridActionTypes, DaffProductGridActions } from '../actions/product-grid.actions';
import { DaffProductActionTypes, DaffProductActions } from '../actions/product.actions';
import { DaffBestSellersActionTypes, DaffBestSellersActions } from '../actions/best-sellers.actions';
import { DaffProductUnion } from '../models/product-union';

export interface State extends EntityState<DaffProductUnion> {}

export const productAdapter : EntityAdapter<DaffProductUnion> = createEntityAdapter<DaffProductUnion>();

export const initialState: State = productAdapter.getInitialState();

export function reducer(
  state = initialState, 
  action: DaffProductGridActions | DaffBestSellersActions | DaffProductActions): State {
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
    case DaffProductActionTypes.ProductModifyAction:
      return productAdapter.updateOne(
        {
          id: action.payload.id,
          changes: action.payload.modification
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

export const selectProductEntities : (state: EntityState<DaffProductUnion>) => Dictionary<DaffProductUnion> = selectEntities;

export const selectAllProducts = selectAll;

export const selectProductTotal = selectTotal;
