import { ProductGridActionTypes, ProductGridActions } from '../actions/product-grid.actions';
import { Product } from '../model/product';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { ProductActionTypes, ProductActions } from '../actions/product.actions';
import { Dictionary } from '@ngrx/entity/src/models';

export interface State extends EntityState<Product> {}

export const productAdapter : EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: State = productAdapter.getInitialState();

export function reducer(
  state = initialState, 
  action: ProductGridActions| ProductActions): State {
  switch (action.type) {
    case ProductGridActionTypes.ProductGridLoadSuccessAction:
      return productAdapter.upsertMany(action.payload, state);
    case ProductActionTypes.ProductLoadSuccessAction:
      return productAdapter.upsertOne(
        { 
          id: action.payload.id, 
          ...action.payload
        },
        state
      )
    default:
      return state;
  }
}

const { selectIds, selectEntities, selectAll, selectTotal } = productAdapter.getSelectors();

export const selectProductIds = selectIds;

export const selectProductEntities : (state: EntityState<Product>) => Dictionary<Product> = selectEntities;

export const selectAllProducts = selectAll;

export const selectProductTotal = selectTotal;
