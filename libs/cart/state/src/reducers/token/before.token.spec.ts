import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffCartReducersState } from '@daffodil/cart/state';

import {
  daffCartProvideBeforeReducers,
  DAFF_CART_BEFORE_REDUCERS,
} from './before.token';

describe('daffCartProvideBeforeReducers', () => {
  let reducers: ActionReducer<DaffCartReducersState>[];
  let result: ActionReducer<DaffCartReducersState>[];

  beforeEach(() => {
    reducers = [
      (state, action) => state,
      (state, action) => state,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffCartProvideBeforeReducers(...reducers),
      ],
    });

    result = TestBed.inject(DAFF_CART_BEFORE_REDUCERS);
  });

  it('should provide the reducers to the token', () => {
    reducers.forEach(reducer => {
      expect(result).toContain(reducer);
    });
  });
});
