import { TestBed } from '@angular/core/testing';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { daffIdentityReducer } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';
import {
  daffProductEntitiesAdapter,
  DaffProductPageLoadSuccess,
  daffProductProvideExtraReducers,
  DaffProductReducersState,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DAFF_PRODUCT_REDUCERS } from './reducers.token';
import { daffProductReducerInitialState } from '../product/product.reducer';

describe('@daffodil/product/state | daffProductProvideExtraReducers', () => {
  let productFactory: DaffProductFactory;
  let mockProduct: DaffProduct;

  let extraReducer: ActionReducer<DaffProductReducersState>;
  let reducer: ActionReducer<DaffProductReducersState>;
  let result: DaffProductReducersState;

  beforeEach(() => {
    const initialState: DaffProductReducersState = {
      product: daffProductReducerInitialState,
      products: daffProductEntitiesAdapter().getInitialState(),
      productGrid: null,
      bestSellers: null,
    };
    extraReducer = combineReducers<DaffProductReducersState>({
      product: (state, action) => ({
        ...state,
        currentProductId: `${state.currentProductId} extra reducer`,
      }),
      products: daffIdentityReducer,
      productGrid: daffIdentityReducer,
      bestSellers: daffIdentityReducer,
    });

    TestBed.configureTestingModule({
      providers: [
        ...daffProductProvideExtraReducers(extraReducer),
      ],
    });

    productFactory = TestBed.inject(DaffProductFactory);
    reducer = TestBed.inject(DAFF_PRODUCT_REDUCERS);

    mockProduct = productFactory.create();

    result = reducer(initialState, new DaffProductPageLoadSuccess({
      id: mockProduct.id,
      products: [mockProduct],
    }));
  });

  it('should run the extra reducer after the daffodil reducers', () => {
    expect(result.product.currentProductId).toEqual(`${mockProduct.id} extra reducer`);
  });

  it('should keep pieces of state not covered by extra reducers', () => {
    expect(result.products.entities).toBeTruthy();
  });
});
