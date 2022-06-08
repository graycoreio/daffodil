import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffConfigurableProductReducersState } from '@daffodil/product-configurable/state';

import {
  daffProductConfigurableProvideExtraReducers,
  DAFF_PRODUCT_CONFIGURABLE_EXTRA_REDUCERS,
} from './extra.token';

describe('daffProductConfigurableProvideExtraReducers', () => {
  let reducers: ActionReducer<DaffConfigurableProductReducersState>[];
  let result: ActionReducer<DaffConfigurableProductReducersState>[];

  beforeEach(() => {
    reducers = [
      (state, action) => state,
      (state, action) => state,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffProductConfigurableProvideExtraReducers(...reducers),
      ],
    });

    result = TestBed.inject(DAFF_PRODUCT_CONFIGURABLE_EXTRA_REDUCERS);
  });

  it('should provide the reducers to the token', () => {
    reducers.forEach(reducer => {
      expect(result).toContain(reducer);
    });
  });
});
