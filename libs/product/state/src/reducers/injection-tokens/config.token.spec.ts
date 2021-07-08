import { TestBed } from '@angular/core/testing';
import {
  MetaReducer,
  StoreConfig,
} from '@ngrx/store';

import {
  DaffProductReducersState,
  daffProductProvideMetaReducers,
} from '@daffodil/product/state';

import { DAFF_PRODUCT_STORE_CONFIG } from './config.token';

describe('daffProductProvideMetaReducers', () => {
  let metaReducers: MetaReducer<DaffProductReducersState>[];
  let config: StoreConfig<DaffProductReducersState>;

  beforeEach(() => {
    metaReducers = [
      reducer => reducer,
      reducer => reducer,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffProductProvideMetaReducers(...metaReducers),
      ],
    });

    config = TestBed.inject(DAFF_PRODUCT_STORE_CONFIG);
  });

  it('should return the meta-reducers', () => {
    expect(config.metaReducers).toEqual(metaReducers);
  });
});
