import { Action } from '@ngrx/store';
import { ProductGridActionTypes, ProductGridActions } from '../actions/product-grid.actions';
import { Product } from '../model/product';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { ProductActionTypes, ProductActions } from '../actions/product.actions';

export const productAdapter : EntityAdapter<Product> = createEntityAdapter<Product>();

export interface State extends EntityState<Product> { } 

export const initialState: State = productAdapter.getInitialState();

export function reducer(
  state = initialState, 
  action: ProductGridActions| ProductActions): State {
  switch (action.type) {
    case ProductGridActionTypes.ProductGridLoadSuccessAction:
      return productAdapter.upsertMany(action.payload.map(
        (product) => {
          return {
            id: product.id, 
            ...product
          }
        }
      ), state);
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
