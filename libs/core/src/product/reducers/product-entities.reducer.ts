import { Action } from '@ngrx/store';
import { ProductListActionTypes, ProductListActions } from '../actions/product-list.actions';
import { Product } from '../model/product';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

export const productAdapter : EntityAdapter<Product> = createEntityAdapter<Product>();

export interface State extends EntityState<Product> { } 

export const initialState: State = productAdapter.getInitialState();

export function reducer(state = initialState, action: ProductListActions): State {
  switch (action.type) {
    case ProductListActionTypes.ProductListLoadSuccessAction:
      return productAdapter.upsertMany(action.payload.map(
        (product) => {
          return {
            id: product.id, changes: {...product}
          }
        }
      ), state);
    default:
      return state;
  }
}
