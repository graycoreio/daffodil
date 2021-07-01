import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffCartReducersState } from '@daffodil/cart/state';

import {
  daffCartProvidePreReducers,
  DAFF_CART_PRE_REDUCERS,
} from './pre.token';

describe('daffCartProvidePreReducers', () => {
  let reducers: ActionReducer<DaffCartReducersState>[];
  let result: ActionReducer<DaffCartReducersState>[];

  beforeEach(() => {
    reducers = [
      (state, action) => state,
      (state, action) => state,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffCartProvidePreReducers(...reducers),
      ],
    });

    result = TestBed.inject(DAFF_CART_PRE_REDUCERS);
  });

  it('should provide the reducers to the token', () => {
    reducers.forEach(reducer => {
      expect(result).toContain(reducer);
    });
  });
});
