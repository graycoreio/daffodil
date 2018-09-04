import { Product } from '@daffodil/core';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { Dictionary } from '@ngrx/entity/src/models';
import { BestSellerGridActions, BestSellerGridActionTypes } from '../actions/best-seller-grid.actions';

export interface State extends EntityState<Product> {}

export const bestSellerAdapter : EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: State = bestSellerAdapter.getInitialState();

export function reducer(
  state = initialState, 
  action: BestSellerGridActions): State {
  switch (action.type) {
    case BestSellerGridActionTypes.BestSellerGridLoadSuccessAction:
      return bestSellerAdapter.upsertMany(action.payload, state);
    default:
      return state;
  }
}

const { selectIds, selectEntities, selectAll, selectTotal } = bestSellerAdapter.getSelectors();

export const selectBestSellerIds = selectIds;

export const selectBestSellerEntities : (state: EntityState<Product>) => Dictionary<Product> = selectEntities;

export const selectAllBestSeller = selectAll;

export const selectBestSellerTotal = selectTotal;
