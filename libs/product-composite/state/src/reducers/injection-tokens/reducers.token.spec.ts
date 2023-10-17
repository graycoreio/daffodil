import { TestBed } from '@angular/core/testing';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { DaffProductPageLoadSuccess } from '@daffodil/product/state';
import { DaffCompositeProduct } from '@daffodil/product-composite';
import {
  DaffCompositeProductReducersState,
  daffProductCompositeProvideExtraReducers,
} from '@daffodil/product-composite/state';
import { DaffCompositeProductFactory } from '@daffodil/product-composite/testing';

import { DAFF_PRODUCT_COMPOSITE_REDUCERS } from './reducers.token';
import { daffCompositeProductAppliedOptionsEntitiesAdapter } from '../composite-product-entities/composite-product-entities-reducer-adapter';

describe('daffProductCompositeProvideExtraReducers', () => {
  let productFactory: DaffCompositeProductFactory;
  let mockProduct: DaffCompositeProduct;

  let extraReducer: ActionReducer<DaffCompositeProductReducersState>;
  let reducer: ActionReducer<DaffCompositeProductReducersState>;
  let result: DaffCompositeProductReducersState;
  let newId: string;

  beforeEach(() => {
    newId = 'newId';
    const initialState: DaffCompositeProductReducersState = {
      compositeProductOptions: daffCompositeProductAppliedOptionsEntitiesAdapter().getInitialState(),
    };
    extraReducer = combineReducers<DaffCompositeProductReducersState>({
      compositeProductOptions: (state, action) => ({
        ...state,
        ids: [
          ...(<string[]>state.ids),
          newId,
        ],
      }),
    });

    TestBed.configureTestingModule({
      providers: [
        ...daffProductCompositeProvideExtraReducers(extraReducer),
      ],
    });

    productFactory = TestBed.inject(DaffCompositeProductFactory);
    reducer = TestBed.inject(DAFF_PRODUCT_COMPOSITE_REDUCERS);

    mockProduct = productFactory.create();

    result = reducer(initialState, new DaffProductPageLoadSuccess({
      id: mockProduct.id,
      products: [mockProduct],
    }));
  });

  it('should run the extra reducer after the daffodil reducers', () => {
    expect(result.compositeProductOptions.ids[1]).toEqual(newId);
  });
});
