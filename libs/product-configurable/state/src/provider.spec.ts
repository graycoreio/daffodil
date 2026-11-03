import { TestBed } from '@angular/core/testing';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import { DAFF_PRODUCT_META_REDUCERS } from '@daffodil/product/state';
import {
  DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY,
  daffProductConfigurableProvideExtraReducers,
  DaffConfigurableProductReducersState,
} from '@daffodil/product-configurable/state';

import { provideDaffProductConfigurableState } from './provider';
import { daffProductConfigurableEnsureChildrenMetaReducer } from './reducers/ensure-children.meta-reducer';

describe('@daffodil/product-configurable/state | provideDaffProductConfigurableState', () => {
  let store: Store<{ [DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY]: DaffConfigurableProductReducersState }>;
  let extraReducer: jasmine.Spy;

  beforeEach(() => {
    extraReducer = jasmine.createSpy('extraReducer').and.callFake((state) => state);

    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideDaffProductConfigurableState(),
        ...daffProductConfigurableProvideExtraReducers(extraReducer),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the configurable product feature state', () => {
    let state: DaffConfigurableProductReducersState;
    store.select(DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
    expect(state.configurableProductAttributes).toBeDefined();
  });

  it('should compose the extra reducers', () => {
    expect(extraReducer).toHaveBeenCalledWith(jasmine.anything(), jasmine.anything());
  });

  it('should provide the ensure children meta reducer to the product feature', () => {
    expect(TestBed.inject(DAFF_PRODUCT_META_REDUCERS)).toContain(daffProductConfigurableEnsureChildrenMetaReducer);
  });
});
