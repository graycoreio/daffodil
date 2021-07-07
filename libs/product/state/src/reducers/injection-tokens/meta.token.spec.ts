import { TestBed } from '@angular/core/testing';
import { MetaReducer } from '@ngrx/store';

import { DaffProductReducersState } from '@daffodil/product/state';

import {
  daffProductProvideMetaReducers,
  DAFF_PRODUCT_META_REDUCERS,
} from './meta.token';

describe('daffProductProvideMetaReducers', () => {
  let metaReducers: MetaReducer<DaffProductReducersState>[];
  let result: MetaReducer<DaffProductReducersState>[];

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

    result = TestBed.inject(DAFF_PRODUCT_META_REDUCERS);
  });

  it('should provide the meta-reducers to the token', () => {
    metaReducers.forEach(metaReducer => {
      expect(result).toContain(metaReducer);
    });
  });
});
