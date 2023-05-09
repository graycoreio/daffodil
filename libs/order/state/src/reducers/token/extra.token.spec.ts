import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffOrderReducersState } from '@daffodil/order/state';

import {
  daffOrderProvideExtraReducers,
  DAFF_ORDER_EXTRA_REDUCERS,
} from './extra.token';

describe('@daffodil/order/state | daffOrderProvideExtraReducers', () => {
  let reducers: ActionReducer<DaffOrderReducersState>[];
  let result: ActionReducer<DaffOrderReducersState>[];

  beforeEach(() => {
    reducers = [
      (state, action) => state,
      (state, action) => state,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffOrderProvideExtraReducers(...reducers),
      ],
    });

    result = TestBed.inject( DAFF_ORDER_EXTRA_REDUCERS);
  });

  it('should provide the reducers to the token', () => {
    reducers.forEach(reducer => {
      expect(result).toContain(reducer);
    });
  });
});
