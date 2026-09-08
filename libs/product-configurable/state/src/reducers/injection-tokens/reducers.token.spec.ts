import { inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { daffComposeReducers } from '@daffodil/core/state';
import { DaffProductPageLoadSuccess } from '@daffodil/product/state';
import { DaffConfigurableProduct } from '@daffodil/product-configurable';
import {
  DaffConfigurableProductReducersState,
  daffProductConfigurableProvideExtraReducers,
} from '@daffodil/product-configurable/state';
import { DaffConfigurableProductFactory } from '@daffodil/product-configurable/testing';

import { DAFF_PRODUCT_CONFIGURABLE_EXTRA_REDUCERS } from './extra.token';
import {
  DAFF_PRODUCT_CONFIGURABLE_REDUCERS,
  provideDaffProductConfigurableReducersFactory,
} from './reducers.token';
import { daffConfigurableProductAppliedAttributesEntitiesAdapter } from '../configurable-product-entities/configurable-product-entities-reducer-adapter';
import { daffConfigurableProductReducers } from '../configurable-product-reducers';

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
        provideDaffProductConfigurableReducersFactory(() => daffComposeReducers([
          combineReducers(daffConfigurableProductReducers),
          ...inject(DAFF_PRODUCT_CONFIGURABLE_EXTRA_REDUCERS),
        ])),
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
