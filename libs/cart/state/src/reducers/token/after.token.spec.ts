import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffCartReducersState } from '@daffodil/cart/state';

import {
  daffCartProvideAfterReducers,
  DAFF_CART_AFTER_REDUCERS,
} from './after.token';

describe('daffCartProvideAfterReducers', () => {
  let reducers: ActionReducer<DaffCartReducersState>[];
  let result: ActionReducer<DaffCartReducersState>[];

  beforeEach(() => {
    reducers = [
      (state, action) => state,
      (state, action) => state,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffCartProvideAfterReducers(...reducers),
      ],
    });

    result = TestBed.inject(DAFF_CART_AFTER_REDUCERS);
  });

  it('should provide the reducers to the token', () => {
    reducers.forEach(reducer => {
      expect(result).toContain(reducer);
    });
  });
});
