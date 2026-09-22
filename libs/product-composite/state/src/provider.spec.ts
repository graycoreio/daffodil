import { TestBed } from '@angular/core/testing';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import { DAFF_PRODUCT_META_REDUCERS } from '@daffodil/product/state';
import {
  DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY,
  daffProductCompositeProvideExtraReducers,
  DaffCompositeProductReducersState,
} from '@daffodil/product-composite/state';

import { provideDaffProductCompositeState } from './provider';
import { daffProductCompositeEnsureItemsMetaReducer } from './reducers/ensure-items.meta-reducer';

describe('@daffodil/product-composite/state | provideDaffProductCompositeState', () => {
  let store: Store<{ [DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY]: DaffCompositeProductReducersState }>;
  let extraReducer: jasmine.Spy;

  beforeEach(() => {
    extraReducer = jasmine.createSpy('extraReducer').and.callFake((state) => state);

    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideDaffProductCompositeState(),
        ...daffProductCompositeProvideExtraReducers(extraReducer),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the composite product feature state', () => {
    let state: DaffCompositeProductReducersState;
    store.select(DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
    expect(state.compositeProductOptions).toBeDefined();
  });

  it('should compose the extra reducers', () => {
    expect(extraReducer).toHaveBeenCalledWith(jasmine.anything(), jasmine.anything());
  });

  it('should provide the ensure items meta reducer to the product feature', () => {
    expect(TestBed.inject(DAFF_PRODUCT_META_REDUCERS)).toContain(daffProductCompositeEnsureItemsMetaReducer);
  });
});
