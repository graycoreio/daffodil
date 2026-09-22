import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import { DaffCategoryTestingDriverModule } from '@daffodil/category/driver/testing';
import {
  DAFF_CATEGORY_STORE_FEATURE_KEY,
  daffCategoryProvideExtraReducers,
  DaffCategoryReducersState,
} from '@daffodil/category/state';
import { DaffProductTestingDriverModule } from '@daffodil/product/driver/testing';
import {
  DAFF_PRODUCT_STORE_FEATURE_KEY,
  DaffProductReducersState,
} from '@daffodil/product/state';

import {
  provideDaffCategoryProductState,
  provideDaffCategoryState,
} from './provider';

describe('@daffodil/category/state | provideDaffCategoryState', () => {
  let store: Store<{
    [DAFF_CATEGORY_STORE_FEATURE_KEY]: DaffCategoryReducersState;
    [DAFF_PRODUCT_STORE_FEATURE_KEY]: DaffProductReducersState;
  }>;
  let extraReducer: jasmine.Spy;

  beforeEach(() => {
    extraReducer = jasmine.createSpy('extraReducer').and.callFake((state) => state);

    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideEffects(),
        importProvidersFrom(
          DaffCategoryTestingDriverModule.forRoot(),
          DaffProductTestingDriverModule.forRoot(),
        ),
        provideDaffCategoryState(),
        ...daffCategoryProvideExtraReducers(extraReducer),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the category feature state', () => {
    let state: DaffCategoryReducersState;
    store.select(DAFF_CATEGORY_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
    expect(state.category).toBeDefined();
  });

  it('should register the product feature state', () => {
    let state: DaffProductReducersState;
    store.select(DAFF_PRODUCT_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
  });

  it('should compose the extra reducers', () => {
    expect(extraReducer).toHaveBeenCalledWith(jasmine.anything(), jasmine.anything());
  });
});

describe('@daffodil/category/state | provideDaffCategoryProductState', () => {
  let store: Store<{ [DAFF_PRODUCT_STORE_FEATURE_KEY]: DaffProductReducersState }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideEffects(),
        importProvidersFrom(DaffProductTestingDriverModule.forRoot()),
        provideDaffCategoryProductState(),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the product feature state', () => {
    let state: DaffProductReducersState;
    store.select(DAFF_PRODUCT_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
    expect(state.product).toBeDefined();
  });
});
