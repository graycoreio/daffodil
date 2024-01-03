import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffCartStoreCreditReducersState } from '@daffodil/cart-store-credit/state';

import {
  daffCartStoreCreditProvideExtraReducers,
  DAFF_CART_STORE_CREDIT_EXTRA_REDUCERS,
} from './extra.token';

describe('@daffodil/cart-store-credit/state | daffCartStoreCreditProvideExtraReducers', () => {
  let reducers: ActionReducer<DaffCartStoreCreditReducersState>[];
  let result: ActionReducer<DaffCartStoreCreditReducersState>[];

  beforeEach(() => {
    reducers = [
      (state, action) => state,
      (state, action) => state,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffCartStoreCreditProvideExtraReducers(...reducers),
      ],
    });

    result = TestBed.inject(DAFF_CART_STORE_CREDIT_EXTRA_REDUCERS);
  });

  it('should provide the reducers to the token', () => {
    reducers.forEach(reducer => {
      expect(result).toContain(reducer);
    });
  });
});
