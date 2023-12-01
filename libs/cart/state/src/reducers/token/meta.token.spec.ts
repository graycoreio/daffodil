import { TestBed } from '@angular/core/testing';
import { MetaReducer } from '@ngrx/store';

import { DaffCartReducersState } from '@daffodil/cart/state';

import {
  daffCartProvideMetaReducers,
  DAFF_CART_META_REDUCERS,
} from './meta.token';

describe('@daffodil/cart/state | DAFF_CART_STORE_CONFIG', () => {
  let metaReducers: MetaReducer<DaffCartReducersState>[];
  let result: MetaReducer<DaffCartReducersState>[];

  beforeEach(() => {
    metaReducers = [
      reducer => reducer,
      reducer => reducer,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffCartProvideMetaReducers(...metaReducers),
      ],
    });

    result = TestBed.inject(DAFF_CART_META_REDUCERS);
  });

  it('should provide the meta-reducers to the token', () => {
    metaReducers.forEach(metaReducer => {
      expect(result).toContain(metaReducer);
    });
  });
});
