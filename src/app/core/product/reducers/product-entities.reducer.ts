import { Action } from '@ngrx/store';
import { ProductListActionTypes, ProductListActions } from '@core/product/actions/product-list.actions';
import { Product } from '@core/product/model/product';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export const productAdapter = createEntityAdapter<Product>();

export interface State extends EntityState<Product> { } 

export const initialState: State = productAdapter.getInitialState();

export function reducer(state = initialState, action: ProductListActions): State {
  switch (action.type) {
    case ProductListActionTypes.ProductListLoadSuccessAction:
      return productAdapter.addAll(action.payload, state);
    default:
      return state;
  }
}
