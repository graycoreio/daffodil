import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffCompositeProductReducersState } from '@daffodil/product-composite/state';

import {
  daffProductCompositeProvideExtraReducers,
  DAFF_PRODUCT_COMPOSITE_EXTRA_REDUCERS,
} from './extra.token';

describe('daffProductCompositeProvideExtraReducers', () => {
  let reducers: ActionReducer<DaffCompositeProductReducersState>[];
  let result: ActionReducer<DaffCompositeProductReducersState>[];

  beforeEach(() => {
    reducers = [
      (state, action) => state,
      (state, action) => state,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffProductCompositeProvideExtraReducers(...reducers),
      ],
    });

    result = TestBed.inject(DAFF_PRODUCT_COMPOSITE_EXTRA_REDUCERS);
  });

  it('should provide the reducers to the token', () => {
    reducers.forEach(reducer => {
      expect(result).toContain(reducer);
    });
  });
});
