import { TestBed } from '@angular/core/testing';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { DaffConfigurableProduct } from '@daffodil/product-configurable';
import {
  DaffConfigurableProductReducersState,
  daffProductConfigurableProvideExtraReducers,
} from '@daffodil/product-configurable/state';
import { DaffConfigurableProductFactory } from '@daffodil/product-configurable/testing';
import { DaffProductPageLoadSuccess } from '@daffodil/product/state';

import { daffConfigurableProductAppliedAttributesEntitiesAdapter } from '../configurable-product-entities/configurable-product-entities-reducer-adapter';
import { DAFF_PRODUCT_CONFIGURABLE_REDUCERS } from './reducers.token';

describe('daffProductConfigurableProvideExtraReducers', () => {
  let productFactory: DaffConfigurableProductFactory;
  let mockProduct: DaffConfigurableProduct;

  let extraReducer: ActionReducer<DaffConfigurableProductReducersState>;
  let reducer: ActionReducer<DaffConfigurableProductReducersState>;
  let result: DaffConfigurableProductReducersState;
  let newId: string;

  beforeEach(() => {
    newId = 'newId';
    const initialState: DaffConfigurableProductReducersState = {
      configurableProductAttributes: daffConfigurableProductAppliedAttributesEntitiesAdapter().getInitialState(),
    };
    extraReducer = combineReducers<DaffConfigurableProductReducersState>({
      configurableProductAttributes: (state, action) => ({
        ...state,
        ids: [
          ...(<string[]>state.ids),
          newId,
        ],
      }),
    });

    TestBed.configureTestingModule({
      providers: [
        ...daffProductConfigurableProvideExtraReducers(extraReducer),
      ],
    });

    productFactory = TestBed.inject(DaffConfigurableProductFactory);
    reducer = TestBed.inject(DAFF_PRODUCT_CONFIGURABLE_REDUCERS);

    mockProduct = productFactory.create();

    result = reducer(initialState, new DaffProductPageLoadSuccess({
      id: mockProduct.id,
      products: [mockProduct],
    }));
  });

  it('should run the extra reducer after the daffodil reducers', () => {
    expect(result.configurableProductAttributes.ids[1]).toEqual(newId);
  });
});
