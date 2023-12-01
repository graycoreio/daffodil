import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffCartReducersState } from '@daffodil/cart/state';

import {
  daffCartProvideExtraReducers,
  DAFF_CART_EXTRA_REDUCERS,
} from './extra.token';

describe('@daffodil/cart/state | daffCartProvideExtraReducers', () => {
  let reducers: ActionReducer<DaffCartReducersState>[];
  let result: ActionReducer<DaffCartReducersState>[];

  beforeEach(() => {
    reducers = [
      (state, action) => state,
      (state, action) => state,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffCartProvideExtraReducers(...reducers),
      ],
    });

    result = TestBed.inject(DAFF_CART_EXTRA_REDUCERS);
  });

  it('should provide the reducers to the token', () => {
    reducers.forEach(reducer => {
      expect(result).toContain(reducer);
    });
  });
});
