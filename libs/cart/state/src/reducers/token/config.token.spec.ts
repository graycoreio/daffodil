import { TestBed } from '@angular/core/testing';
import {
  MetaReducer,
  StoreConfig,
} from '@ngrx/store';

import {
  DaffCartReducersState,
  daffCartProvideMetaReducers,
} from '@daffodil/cart/state';

import { DAFF_CART_STORE_CONFIG } from './config.token';

describe('@daffodil/cart/state | daffCartProvideMetaReducers', () => {
  let metaReducers: MetaReducer<DaffCartReducersState>[];
  let config: StoreConfig<DaffCartReducersState>;

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

    config = TestBed.inject(DAFF_CART_STORE_CONFIG);
  });

  it('should return the meta-reducers', () => {
    expect(config.metaReducers).toEqual(jasmine.arrayContaining(metaReducers));
  });
});
