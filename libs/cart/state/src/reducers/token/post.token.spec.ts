import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffCartReducersState } from '@daffodil/cart/state';

import {
  daffCartProvidePostReducers,
  DAFF_CART_POST_REDUCERS,
} from './post.token';

describe('daffCartProvidePostReducers', () => {
  let reducers: ActionReducer<DaffCartReducersState>[];
  let result: ActionReducer<DaffCartReducersState>[];

  beforeEach(() => {
    reducers = [
      (state, action) => state,
      (state, action) => state,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffCartProvidePostReducers(...reducers),
      ],
    });

    result = TestBed.inject(DAFF_CART_POST_REDUCERS);
  });

  it('should provide the reducers to the token', () => {
    reducers.forEach(reducer => {
      expect(result).toContain(reducer);
    });
  });
});
